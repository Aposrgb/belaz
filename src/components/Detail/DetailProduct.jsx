import React, { useEffect, useState } from "react";
import style from "./DetailProduct.module.scss";
import Counter from "../Counter/Counter.jsx";
import star from "../../assets/svg/star.svg";
import notFavorite from "../../assets/svg/favorite.svg";
import favorite from "../../assets/svg/favorite-red.svg";
import baseUrl, { Api } from "../../api/api";
import { AllProductsFavorite } from "../../api/favorite";
import { Rating } from "react-simple-star-rating";
import avatar from "../../assets/images/avatar.png";

export default function DetailProduct(props) {
  const [count, setCount] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState("");
  const [feedbackError, setFeedbackError] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (props.detail?.id && localStorage.token) {
      AllProductsFavorite().then((res) => {
        const currentFavoriteProduct = res.data.find(
          (favorite) => favorite.id === props.detail?.id
        );
        if (currentFavoriteProduct) {
          setIsFavorite(true);
        }
      });
    }
  }, [props.detail?.id]);

  const handleAddFavorite = () => {
    const token = localStorage.token;
    Api.put(
      "api/favorite/" + props.detail.id,
      {},
      { headers: { apiKey: token } }
    ).then(() => {
      setIsFavorite(true);
    });
  };

  const handleRemoveFavorite = () => {
    const token = localStorage.token;
    Api.delete("api/favorite/" + props.detail.id, {
      headers: { apiKey: token },
    }).then(() => {
      setIsFavorite(false);
    });
  };

  const handleClickFavorite = (e) => {
    e.stopPropagation();
    if (localStorage.token) {
      if (isFavorite) {
        handleRemoveFavorite();
        return;
      }
      handleAddFavorite();
      return;
    }
    setError("Вы не авторизованы");
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const handleAddInBasket = (e) => {
    const token = localStorage.token;
    if (token) {
      Api.put(
        "api/basket/" + props.detail.id,
        { count },
        { headers: { apiKey: token } }
      );
      return;
    }
    setError("Вы не авторизованы");
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const handleSubmitFeedback = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let { value } = event.target[0];
    const token = localStorage.token;
    if (value && !!rating && token) {
      let formData = new FormData();
      formData.append("text", value);
      formData.append("rating", rating);

      Api.post("api/comments/" + props.detail.id, formData, {
        headers: { apiKey: token },
      }).then((res) => {
        if (res.status === 200 || res.status === 201) {
          setRating(0);
          value = "";
        }
      });
    }
    if (!token) {
      setFeedbackError("Вы не авторизованы");
      setTimeout(() => {
        setFeedbackError("");
      }, 3000);
    }
    if (!rating) {
      setFeedbackError("Выберите рейтинг");
      setTimeout(() => {
        setFeedbackError("");
      }, 3000);
    }
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  const comments = props?.detail?.comments || []
  
  return (
    <>
      <div className={style.flex}>
        <img
          className={style.img}
          src={baseUrl + props.detail?.img}
        />
        <div className={style.item}>
          <div className={style.grabe}>
            <img src={star} className={style.icon} />
            <div className={style.grabeText}>{props.detail?.rating}</div>
          </div>
          <div className={style.title}>{props.detail?.title}</div>
          {props.detail?.balanceStock !== null && (
            <div className={style.count}>
              В наличии: {props.detail?.balanceStock}
            </div>
          )}
          {!!props.detail?.balanceStock && (
            <>
              <div className={style.count}>Количество:</div>
              <Counter
                maxCount={props.detail?.balanceStock}
                count={count}
                setCount={setCount}
              />
            </>
          )}
          <div className={style.count}>Цена:</div>
          <div className={style.countFlex}>
            <div className={style.countTextFlex}>
              <div className={style.countPrice}>
                {props.detail?.price * count} ₽
              </div>
              <div className={style.countText}>Розничная цена</div>
            </div>
            <div className={style.countBtnFlex}>
              <div className={style.favorite}>
                <img
                  onClick={handleClickFavorite}
                  src={isFavorite ? favorite : notFavorite}
                  className={style.favoriteIcon}
                />
              </div>
              {!!props.detail?.balanceStock && (
                <>
                  <div className={style.basket} onClick={handleAddInBasket}>
                    В корзину
                  </div>
                </>
              )}
            </div>
          </div>
          {!!error.length && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
      <div className={style.descriptionTitle}>Описание товара</div>
      <div className={style.description} dangerouslySetInnerHTML={{__html:props.detail?.description}} ></div>
      <div className={style.feedbackTitle}>Отзывы</div>
      {!!comments.length && (
        <div className={style.commentCardList}>
          {comments.map((comment, index) => (
            <div key={index} className={style.commentCard}>
              <div className={style.commentHeader}>
                <img
                  className={style.commentImg}
                  src={
                    !!comment.owner?.photo?.length ? comment.owner.photo : avatar
                  }
                  alt=""
                />
                <div>
                  <p
                    className={style.commentTitle}
                  >{`${comment.owner.firstname} ${comment.owner.surname}`}</p>
                  <p
                    className={style.commentRating}
                  >{`${comment.rating} рейтинг`}</p>
                </div>
              </div>
              <p className={style.commentText}>{comment.text}</p>
            </div>
          ))}
        </div>
      )}
      <form className={style.feedbackForm} onSubmit={handleSubmitFeedback}>
        <Rating onClick={handleRating} initialValue={rating} />
        <textarea
          required
          placeholder="Коментарий к товару"
          className={style.textarea}
        />
        {!!feedbackError.length && (
          <p style={{ color: "red" }}>{feedbackError}</p>
        )}
        <button
          title="Отправить отзыв"
          type="submit"
          className={style.feedbackBtn}
        >
          Отправить
        </button>
      </form>
    </>
  );
}

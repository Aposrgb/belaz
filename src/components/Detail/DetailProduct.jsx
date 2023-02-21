import React, { useEffect, useState } from "react";
import style from "./DetailProduct.module.scss";
import Counter from "../Counter/Counter.jsx";
import star from "../../assets/svg/star.svg";
import notFavorite from "../../assets/svg/favorite.svg";
import favorite from "../../assets/svg/favorite-red.svg";
import { Api } from "../../api/api";
import { AllProductsFavorite } from "../../api/favorite";

export default function DetailProduct(props) {
  const [count, setCount] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (props.detail?.id && localStorage.token) {
      AllProductsFavorite().then((res) => {
        const currentFavoriteProduct = res.data.find(
          (favorite) => favorite.id === props.detail?.id
        );
        console.log(currentFavoriteProduct);
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
  return (
    <>
      <div className={style.flex}>
        <img
          className={style.img}
          src={"https://agregatekb.ru/" + props.detail?.img}
        />
        <div className={style.item}>
          <div className={style.grabe}>
            <img src={star} className={style.icon} />
            <div className={style.grabeText}>Нет оценок</div>
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
      <div className={style.description}>{props.detail?.description}</div>
    </>
  );
}

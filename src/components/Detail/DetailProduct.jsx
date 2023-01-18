import React, { useState } from "react";
import style from "./DetailProduct.module.scss";
import Counter from "../Counter/Counter.jsx";
import star from "../../assets/svg/star.svg";
import favorite from "../../assets/svg/favorite.svg";
import { Api } from "../../api/api";

export default function DetailProduct(props) {
  const [count, setCount] = useState(1);

  const handleAddFavorite = () => {
    const token = localStorage.token;
    Api.put(
      "api/favorite/" + props.detail.id,
      {},
      { headers: { apiKey: token } }
    );
  };

  const handleAddInBasket = (e) => {
    const token = localStorage.token;
    Api.put(
      "api/basket/" + props.detail.id,
      { count },
      { headers: { apiKey: token } }
    );
  };
  return (
    <>
      <div className={style.flex}>
        <img
          className={style.img}
          src={"https://a.mpstats.store/" + props.detail?.img}
        />
        <div className={style.item}>
          <div className={style.grabe}>
            <img src={star} className={style.icon} />
            <div className={style.grabeText}>Нет оценок</div>
          </div>
          <div className={style.title}>{props.detail?.title}</div>
          <div className={style.count}>Количество:</div>
          <Counter count={count} setCount={setCount} />
          <div className={style.count}>Цена:</div>
          <div className={style.countFlex}>
            <div className={style.countTextFlex}>
              <div className={style.countPrice}>{props.detail?.price} ₽</div>
              <div className={style.countText}>Розничная цена</div>
            </div>
            <div className={style.countBtnFlex}>
              <div className={style.favorite}>
                <img
                  onClick={handleAddFavorite}
                  src={favorite}
                  className={style.favoriteIcon}
                />
              </div>
              <div className={style.basket} onClick={handleAddInBasket}>
                В корзину
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.descriptionTitle}>Описание товара</div>
      <div className={style.description}>{props.detail?.description}</div>
    </>
  );
}

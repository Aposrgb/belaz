import React from "react";
import style from "./Product.module.scss";
import star from "../../assets/svg/star.svg";
import buy from "../../assets/svg/buy.svg";
import favorite from "../../assets/svg/favorite.svg";
import picture from "../../assets/images/nullPicture.png";
import { AddBasket } from "../../store/slice/basketSlice.js";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  return (
    <Link to={"/product/" + props.id} className={style.card}>
      <div className={style.contain}>
        <img
          src={
            props.img === null ? picture : "https://a.mpstats.store/" + props.img
          }
          className={style.productImg}
          alt="product"
        />
        {props.special ? (
          <div className={style.special}>Спецпредложение</div>
        ) : (
          <></>
        )}
        <img src={favorite} className={style.favorite} alt="favorite" />
      </div>
      <div className={style.title}>{props.title}</div>
      <div className={style.flex}>
        {props.rating === 0 ? (
          <>
            <img src={star} className={style.star} alt="grabe" />{" "}
            <div>
              {props.rating} ({props.totalGrabe} оценок)
            </div>
          </>
        ) : (
          <div>Нет оценок</div>
        )}
      </div>
      <div className={style.spaceBetween}>
        <div className={style.price}>{props.price} ₽</div>
        <img src={buy} className={style.buy} alt="icon" />
      </div>
    </Link>
  );
};

export default ProductItem;

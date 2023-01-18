import React from "react";
import style from "./Product.module.scss";
import star from "../../assets/svg/star.svg";
import buy from "../../assets/svg/buy.svg";
import favorite from "../../assets/svg/favorite.svg";
import favoriteRed from "../../assets/svg/favorite-red.svg";
import picture from "../../assets/images/nullPicture.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Api } from "../../api/api";

const ProductItem = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFavoritePage = location.pathname.includes("favorite");

  const redirectToProduct = (e) => {
    navigate("/product/" + props.id);
  };
  const handleAddFavorite = () => {
    const token = localStorage.token;
    Api.put("api/favorite/" + props.id, {}, { headers: { apiKey: token } });
  };

  const handleRemoveFavorite = () => {
    const token = localStorage.token;
    Api.delete("api/favorite/" + props.id, { headers: { apiKey: token } });
    window.location.reload();
  };

  const handleClickFavorite = (e) => {
    e.stopPropagation();
    if (isFavoritePage) {
      handleRemoveFavorite();
      return;
    }
    handleAddFavorite();
  };

  const handleAddInBasket = (e) => {
    e.stopPropagation();
    const token = localStorage.token;
    Api.put(
      "api/basket/" + props.id,
      { count: 1 },
      { headers: { apiKey: token } }
    );
  };

  return (
    <div className={style.card} onClick={redirectToProduct}>
      <div className={style.contain}>
        <img
          src={
            props.img === null
              ? picture
              : "https://a.mpstats.store/" + props.img
          }
          className={style.productImg}
          alt="product"
        />
        {props.special ? (
          <div className={style.special}>Спецпредложение</div>
        ) : (
          <></>
        )}
        <img
          src={props.isFavorite ? favoriteRed : favorite}
          onClick={handleClickFavorite}
          className={style.favorite}
          alt="favorite"
        />
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
        <img
          src={buy}
          className={style.buy}
          alt="icon"
          onClick={handleAddInBasket}
        />
      </div>
    </div>
  );
};

export default ProductItem;

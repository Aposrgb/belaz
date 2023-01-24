import React, { useEffect } from "react";
import ProductItem from "./ProductItem.jsx";
import style from "./Product.module.scss";
import { useState } from "react";
import { AllProductsFavorite } from "../../api/favorite.js";

const Product = (props) => {
  const [favoriteList, setFavoriteList] = useState([]);

  const token = localStorage.token;
  useEffect(() => {
    if (token) {
      AllProductsFavorite().then((res) => {
        setFavoriteList(res.data);
      });
    }
  }, [token]);
  const products =
    props.products?.data?.map((product) => {
      return {
        ...product,
        isFavorite: favoriteList?.some(
          (favorite) => favorite.id === product.id
        ),
      };
    }) ?? [];

  const handleAddFavorite = (id) => {
    const newFavoriteList = [...favoriteList, { id }];
    setFavoriteList(newFavoriteList);
  };

  const handleRemoveFavorite = (id) => {
    const newFavoriteList = favoriteList.filter(
      (favorite) => favorite.id !== id
    );
    setFavoriteList(newFavoriteList);
  };

  return (
    <div className={style.productContainer}>
      {products?.map((e) => (
        <ProductItem
        id={e.id}
        key={e.id}
        title={e.title}
        special={e.special}
        img={e.img}
        rating={e.rating}
        totalGrabe={e.totalGrabe}
        price={e.price}
        isFavorite={e.isFavorite}
        onAdd={handleAddFavorite}
        onRemove={handleRemoveFavorite}
        />
      ))}
    </div>
  );
};

export default Product;

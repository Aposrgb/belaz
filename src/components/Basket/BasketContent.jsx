import React from "react";
import BasketBlock from "./BasketBlock.jsx";
import style from "./Basket.module.scss";
import Title from "../Title/Title.jsx";
import Product from "../Product/Product.jsx";
import BasketSidebar from "../BasketSidebar/BasketSidebar.jsx";
import { useState } from "react";
import { useEffect } from "react";

const BasketContent = (props) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (props.basketProduct.length) {
      setSum(
        props.basketProduct.reduce(
          (acc, cur) => acc + cur.product.price * cur.count,
          0
        )
      );
    }
  }, [props.basketProduct.length]);

  return (
    <>
      <div className={style.content}>
        <div className={style.block}>
          <BasketBlock loading={props.loading} product={props.basketProduct} />
        </div>
        <div className={style.sidebar}>
          <BasketSidebar count={props.basketProduct.length} sum={sum} />
        </div>
      </div>
      {props.popular && (
        <>
          <Title arrow={true} title={"Мы рекомендуем"} link="/recommend" />
          <Product product={props.popular} slice={5} />
        </>
      )}
    </>
  );
};

export default BasketContent;

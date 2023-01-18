import React, { useEffect, useState } from "react";
import Title from "../components/Title/Title.jsx";
import Search from "../components/Search/Search.jsx";
import BreadcrumbsBasket from "../components/Breadcrumb/BreadcrumbsBasket.jsx";
import BasketContent from "../components/Basket/BasketContent.jsx";
import { AllProductsBasket } from "../api/basket.js";

const Basket = (props) => {
  const [basketProduct, setBasketProduct] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AllProductsBasket().then((res) => {
      setBasketProduct(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="content">
      <Search />
      <BreadcrumbsBasket />
      <Title title="Корзина" />
      <BasketContent
        loading={loading}
        basketProduct={basketProduct}
        popular={props.popular}
        product={props.product}
      />
    </div>
  );
};

export default Basket;

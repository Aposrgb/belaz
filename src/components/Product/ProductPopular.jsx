import React, { useState } from "react";
import ProductItem from "./ProductItem.jsx";
import style from "./Product.module.scss";
import Title from "../Title/Title.jsx";
import ProductSelectSort from "./ProductSelectSort.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductFilter from "./ProductFilter.jsx";
import BreadcrumbPopular from "../Breadcrumb/BreadcrumbPopular.jsx";
import TitlePopular from "../Title/TitlePopular.jsx";
import ProductItemLine from "./ProductItemLine.jsx";
import { AddBasket } from "../../store/slice/basketSlice.js";
import PaginationBlock from "../Pagination/PaginationBlock.jsx";

const ProductPopular = (props) => {
  const [line, setLine] = useState(false);
  const [current, setCurrent] = useState(1);
  const [popularChoosenSorting, setPopularChoosenSorting] = useState("popular");
  const [priceChoosenSorting, setPriceChoosenSorting] = useState("asc");

  let products = [...(props.product.data ?? [])];

  if (products.length) {
    if (popularChoosenSorting === "popular") {
      products = products.sort((a, b) => a.rating - b.rating).reverse();
    }
    if (popularChoosenSorting === "not popular") {
      products = products.sort((a, b) => a.rating - b.rating);
    }
    if (priceChoosenSorting === "asc") {
      products = products.sort((a, b) => a.price - b.price).reverse();
    }
    if (priceChoosenSorting === "desc") {
      products = products.sort((a, b) => a.price - b.price);
    }
  }

  const handleChangePopular = (value) => {
    setPopularChoosenSorting(value);
  };

  const handleChangePrice = (value) => {
    setPriceChoosenSorting(value);
  };

  let item = products.map((e) => (
    <ProductItem
      AddBasket={props.AddBasket}
      id={e.id}
      key={e.id}
      title={e.title}
      special={e.special}
      img={e.img}
      grabe={e.grabe}
      totalGrabe={e.totalGrabe}
      price={e.price}
    />
  ));
  let itemLine = products.map((e) => (
    <ProductItemLine
      AddBasket={props.AddBasket}
      id={e.id}
      key={e.id}
      title={e.title}
      special={e.special}
      img={e.img}
      grabe={e.grabe}
      totalGrabe={e.totalGrabe}
      price={e.price}
      description={e.description}
    />
  ));
  return (
    <>
      <BreadcrumbPopular />
      <div className={style.flexBetween}>
        <TitlePopular />
        <div className={style.sortFlex}>
          <ProductSelectSort
            onChangePopular={handleChangePopular}
            onChangePrice={handleChangePrice}
          />
          <LineOrBlock line={line} setLine={setLine} />
        </div>
      </div>
      <div className="product">
        <div className="filter">
          <ProductFilter
            current={current}
            setCurrent={setCurrent}
            Function={props.GetPopularFiltered}
            filter={props.filter?.data}
            GetFilter={props.GetFilter}
          />
        </div>
        <div className="cards">
          {line ? itemLine : item}
          <PaginationBlock
            Function={props.GetPopulars}
            current={current}
            setCurrent={setCurrent}
            total={props.product?.count}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPopular;

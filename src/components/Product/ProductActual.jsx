import React, { useState } from "react";
import ProductItem from "./ProductItem.jsx";
import style from "./Product.module.scss";
import ProductSelectSort from "./ProductSelectSort.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductFilter from "./ProductFilter.jsx";
import TitleActual from "../Title/TitleActual.jsx";
import ProductItemLine from "./ProductItemLine.jsx";
import PaginationBlock from "../Pagination/PaginationBlock.jsx";
import { GetActualFiltered } from "../../store/slice/actualSlice.js";

const ProductActual = (props) => {
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

  let item = products?.map((e) => (
    <ProductItem
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
  let itemLine = products?.map((e) => (
    <ProductItemLine
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
      <div className={style.flexBetween}>
        <TitleActual />
        <div className={style.sortFlex}>
          <div>
            <ProductSelectSort
              onChangePopular={handleChangePopular}
              onChangePrice={handleChangePrice}
            />
            <LineOrBlock line={line} setLine={setLine} />
          </div>
        </div>
      </div>
      <div className="product">
        <div className="filter">
          <ProductFilter
            current={current}
            setCurrent={setCurrent}
            Function={props.GetActualFiltered}
            filter={props.filter?.data}
            GetFilter={props.GetFilter}
          />
        </div>
        <div className="cards">
          {line ? itemLine : item}
          <PaginationBlock
            Function={props.GetActual}
            current={current}
            setCurrent={setCurrent}
            total={props.product?.count}
          />
        </div>
      </div>
    </>
  );
};

export default ProductActual;

import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem.jsx";
import style from "./Product.module.scss";
import ProductSelectSort from "./ProductSelectSort.jsx";
import LineOrBlock from "../LineOrBlock/LineOrBlock.jsx";
import ProductItemLine from "./ProductItemLine.jsx";
import PaginationBlock from "../Pagination/PaginationBlock.jsx";
import TitleProducts from "../Title/TitleProducts.jsx";
import ProductFilter from "./ProductFilter.jsx";

export default function ProductsCategory(props) {
  const [line, setLine] = useState(false);
  const [current, setCurrent] = useState(1);
  const [popularChoosenSorting, setPopularChoosenSorting] = useState("popular");
  const [priceChoosenSorting, setPriceChoosenSorting] = useState("asc");

  let products = [...(props.products.data ?? [])];

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

  useEffect(() => {
    props.GetProducts(current, 20, props.id);
  }, [current]);

  console.log("====================================");
  console.log(props);
  console.log("====================================");

  return (
    <>
      <div className={style.flexBetween}>
        <TitleProducts />
        <div className={style.sortFlex}>
          <ProductSelectSort
            onChangePopular={handleChangePopular}
            onChangePrice={handleChangePrice}
          />
          <LineOrBlock line={line} setLine={setLine} />
        </div>
      </div>
      <div className="product">
        {props?.filter?.data && (
          <div className="filter">
            <ProductFilter
              isUseSubCategory
              current={current}
              setCurrent={setCurrent}
              getFilter={props.getProductsFiltered}
              filter={props.filter?.data}
            />
          </div>
        )}
        {props.products.data?.length === 0 ? (
          "В данной категории товары не найдены, уточняйте информацию у продавца"
        ) : (
          <>
            <div className="filter"></div>
            <div className="cards">
              {line ? itemLine : item}
              <PaginationBlock
                Function={props.Products}
                current={current}
                setCurrent={setCurrent}
                total={props.products?.count}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

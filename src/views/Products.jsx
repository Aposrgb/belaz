import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../components/Search/Search";
import ProductsCategory from "../components/Product/ProductsCategory";
import Preloader from "../components/Preloader/Preloader";
import { useDisableScroll } from "../hooks/useDisableScroll.js";
import {GetSearch} from "../store/slice/searcSlice.js";
export default function Products(props) {
  const id = useParams();

  useEffect(() => {
    props.GetProducts(1, 20, id.id);
    props.GetFilter();
  }, []);
  console.log(props);

  useDisableScroll(props.productsLoader)
  return (
    <div className="content">
      {props.productsLoader ? <Preloader /> : ""}
      <Search GetSearch={props.GetSearch} />
      <ProductsCategory
        GetFilter={props.GetFilter}
        GetProducts={props.GetProducts}
        filter={props.filter}
        products={props.products}
        id={id.id}
      />
    </div>
  );
}

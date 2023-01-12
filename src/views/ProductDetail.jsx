import React, { useEffect } from "react";
import BreadcrumbDetailProduct from "../components/Breadcrumb/BreadcrumbDetailProduct";
import DetailProduct from "../components/Detail/DetailProduct";
import Search from "../components/Search/Search";
import { useParams } from "react-router-dom";
import Title from "../components/Title/Title";
import Product from "../components/Product/Product";
import Preloader from "../components/Preloader/Preloader";
import { useDisableScroll } from "../hooks/useDisableScroll.js";
import {GetSearch} from "../store/slice/searcSlice.js";

export default function ProductDetail(props) {
  const id = useParams();

  useEffect(() => {
    props.GetDetailProducts(id.id);
    props.GetRecommends(1, 5);
  }, []);
  console.log(props.detail);

  useDisableScroll(props.detailLoading)

  return (
    <div className="content">
      {props.detailLoading ? <Preloader /> : ""}
      <Search GetSearch={props.GetSearch} />
      <BreadcrumbDetailProduct detail={props.detail?.data} />
      <DetailProduct detail={props.detail.data} />
      <Title title={"Мы рекомендуем"} arrow={true} link="/recommend" />
      <Product products={props.recommend} />
    </div>
  );
}

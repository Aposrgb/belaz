import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadcrumbDetailProduct from "../components/Breadcrumb/BreadcrumbDetailProduct";
import DetailProduct from "../components/Detail/DetailProduct";
import Preloader from "../components/Preloader/Preloader";
import Product from "../components/Product/Product";
import Search from "../components/Search/Search";
import Title from "../components/Title/Title";
import { useDisableScroll } from "../hooks/useDisableScroll.js";

export default function ProductDetail(props) {
  const params = useParams();

  useEffect(() => {
    props.GetDetailProducts(params.id);
    props.GetRecommends(1, 5);
  }, []);

  useDisableScroll(props.detailLoading)

  return (
    <div className="content">
      {props.detailLoading ? <Preloader /> : null}
      <Search GetSearch={props.GetSearch} />
      <BreadcrumbDetailProduct detail={props.detail?.data} />
      <DetailProduct detail={props.detail.data} />
      
    </div>
  );
}

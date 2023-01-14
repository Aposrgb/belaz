import React, { useEffect } from 'react';
import BreadcrumbActual from "../components/Breadcrumb/BreadcrumbActual.jsx";
import Preloader from '../components/Preloader/Preloader.jsx';
import ProductActual from "../components/Product/ProductActual.jsx";
import Search from "../components/Search/Search.jsx";
import { useDisableScroll } from "../hooks/useDisableScroll.js";

const Actual = (props) => {

  useEffect(() => {

    props.GetActual(
      1, 20,
    );
    props.GetFilter()

  }, [])

  useDisableScroll(props.actualLoading);

  return (
    <div className="content">
      { props.actualLoading ? <Preloader/> : null }
      <Search GetSearch={ props.GetSearch }/>
      <BreadcrumbActual/>
      <ProductActual GetFilter={ props.GetFilter } GetActualFiltered={ props.GetActualFiltered }
                     GetActual={ props.GetActual } filter={ props.filter } product={ props.actual }/>

    </div>
  );
};

export default Actual;

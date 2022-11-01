import React from 'react';
import Search from "../components/Search/Search.jsx";
import BreadcrumbDiscount from "../components/Breadcrumb/BreadcrumbDiscount.jsx";
import ProductPopular from "../components/Product/ProductPopular.jsx";
import {GetPopulars} from "../store/slice/popularSlice.js";

const Popular = (props) => {
    return (
        <div className="content">
            <Search/>
            <ProductPopular GetPopulars={props.GetPopulars} product={props.product}/>

        </div>
    );
};

export default Popular;
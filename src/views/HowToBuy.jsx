import React, { useEffect } from "react";
import Search from "../components/Search/Search.jsx";
import HowToBuyContent from "../components/HowToBuyContent/HowToBuyContent.jsx";
import BreadcrumbHowToBuy from "../components/Breadcrumb/BreadcrumbHowToBuy.jsx";
import Preloader from "../components/Preloader/Preloader.jsx";
import { useDisableScroll } from "../hooks/useDisableScroll.js";
import { GetSearch } from "../store/slice/searcSlice.js";

const HowToBuy = (props) => {
  useEffect(() => {
    props.GetNewsAll(1, 5, 2022);
    props.GetHelp();
  }, []);

  useDisableScroll(props.helpLoading)

  return (
    <div className="content">
      { props.helpLoading ? <Preloader/> : null }
      <Search GetSearch={ props.GetSearch }/>
      <BreadcrumbHowToBuy/>
      <HowToBuyContent helps={ props.helps } news={ props.news }/>
    </div>
  );
};

export default HowToBuy;

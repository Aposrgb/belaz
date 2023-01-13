import React, { useEffect, useState } from 'react';
import Title from "../components/Title/Title.jsx";
import Product from "../components/Product/Product.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Category from "../components/Category/Category.jsx";
import Preloader from '../components/Preloader/Preloader.jsx';
import { useDisableScroll } from "../hooks/useDisableScroll.js";

const Catalog = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useDisableScroll(isLoading)

  useEffect(() => {
    props.GetPopulars(
      1, 5
    );
    props.GetRecommends(
      1, 5
    )
    props.GetAvailables(
      1, 10
    );
    props.GetCategory(
      1, 10
    )
  }, [])

  useEffect(() => {
    setIsLoading(props.popularLoading ||
      props.recommendLoading ||
      props.popularsLoading ||
      props.categoryLoading)
  }, [props.popularLoading, props.recommendLoading, props.popularsLoading, props.categoryLoading]);


  return (
    <div className="content">
      { isLoading ? <Preloader/> : null }
      <Title arrow={ true } title={ "Популярное" } link="/popular"/>
      <Product products={ props.populars }/>
      <Title arrow={ true } title={ "Мы рекомендуем" } link="/recommend"/>
      <Product products={ props.recommend }/>
      <Banner green={ false } title={ "Всегда пригодится" } subtitle={ "Возьми с собой домкрат" }/>
      <Title arrow={ true } title={ "Скидки и акции" } link="/discount"/>
      <Product products={ props.availables }/>
      <Banner green={ true } title={ "Смотри в оба" } subtitle={ 'Главное - внимательность!' }/>
      <Title arrow={ true } title={ "Категории" } link="/category"/>
      <Category category={ props.category }/>

    </div>
  );
};

export default Catalog;

import React from 'react';
import style from "./Title.module.scss";
import popular from "../../assets/svg/popular.svg";

const TitlePopular = () => {
    return (
            <div className={style.flex}>
                <div className={style.title}>Популярное</div>
                <img src={popular}/>
            </div>
    );
};

export default TitlePopular;

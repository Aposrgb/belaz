import React from 'react';
import style from "./Title.module.scss";
import popular from "../../assets/svg/popular.svg";

const TitleDiscount = () => {
    return (
        <div className={style.flex}>
            <div className={style.title}>Скидки и акции</div>
        </div>
    );
};

export default TitleDiscount;

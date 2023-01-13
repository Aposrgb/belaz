import React from 'react';
import style from "../Category/Category.module.scss"
import stroke from "../../assets/svg/stroke.svg"
import bloke from "../../assets/svg/bloke.svg"
const LineOrBlock = (props) => {
    return (
        <div className={style.flex}>
            <img src={stroke} onClick={()=>props.setLine(true)} className={props.line? `${style.icon} `: `${style.icon} ${style.noActive}`}/>
            <img src={bloke} onClick={()=>props.setLine(false)} className={props.line? `${style.icon} ${style.noActive}`: `${style.icon} `}/>
        </div>
    );
};

export default LineOrBlock;

import React from "react";
import style from "./LkBlock.module.scss";
import { NavLink } from "react-router-dom";
const LkBlockOrder = (props) => {
  return (
    <div className={style.blockNav}>
      <p className={style.title}>Заказы</p>

      <div className={style.links}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="basket/"
        >
          Корзина
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="favorite/"
        >
          Избранное
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="order/"
        >
          Мои заказы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="history/"
        >
          История просмотров
        </NavLink>
      </div>
    </div>
  );
};

export default LkBlockOrder;

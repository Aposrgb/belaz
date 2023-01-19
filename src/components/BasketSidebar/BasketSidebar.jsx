import React from "react";
import style from "./BasketSidebar.module.scss";
import { NavLink, useLocation } from "react-router-dom";
const BasketSidebar = (props) => {
  const location = useLocation();
  const isOrderPage = location.pathname.includes("order");
  return (
    <div className={style.sidebar}>
      <div className={style.description}>
        Доступные способы и время доставки можно выбрать при оформлении заказа
      </div>
      <div className={style.card}>
        <div className={style.flex}>
          <div className={style.title}>Ваша корзина</div>
          <div className={style.info}>{`${props.count ?? 0} товаров • ${
            props.weight ?? 0
          } кг`}</div>
        </div>
        <div className={style.flex}>
          <div className={style.text}>
            Товары <span>({props.count ?? 0})</span>
          </div>
          <div className={style.count}>{`${props.sum ?? 0} ₽`}</div>
        </div>
        {props.discount && (
          <div className={style.flex}>
            <div className={style.text}>Скидка</div>
            <div className={style.discount}>{`- ${props.discount} ₽`}</div>
          </div>
        )}
      </div>
      <div className={style.flex}>
        <div className={style.totalTitle}>Общая стоимость</div>
        <div className={style.totalCount}>{`${
          (props.sum ?? 0) - (props.discount ?? 0)
        }  ₽`}</div>
      </div>
      {isOrderPage ? (
        <div onClick={props?.onOrder} className={style.btn}>
          Заказать
        </div>
      ) : (
        <NavLink to={"order"} className={style.btn}>
          Перейти к оформлению
        </NavLink>
      )}
    </div>
  );
};

export default BasketSidebar;

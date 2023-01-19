import React, { useEffect, useState } from "react";
import style from "./Order.module.scss";
import cardholder from "../../assets/svg/openmoneybox.svg";
import { Checkbox, Input } from "antd";
const OrderPay = (props) => {
  return (
    <div className={style.card}>
      <div className={style.title}>Способ оплаты</div>
      <div className={style.item}>
        <img src={cardholder} className={style.icon} />
        <div className={style.text}>Наличными</div>
      </div>
      <div className={style.description}>
        Для оплаты товара, заполните контактные данные для связи с вами
      </div>
      <form className={style.form}>
        <div className={style.flex}>
          <Input
            onChange={props.onChangeFirstName}
            value={props.firstname}
            type="text"
            placeholder="Имя"
            className={style.input}
          />
          <Input
            onChange={props.onChangeSurname}
            value={props.surname}
            type="text"
            placeholder="Фамилия"
            className={style.input}
          />
        </div>
        <Input
          onChange={props.onChangePhone}
          value={props.phone}
          type="text"
          placeholder="Номер телефона"
          className={style.fullInput}
        />
        <div className={style.checkboxItem}>
          <Checkbox
            checked={props.checked}
            onChange={props.onChangeChecked}
            className={style.checkbox}
          />
          <div className={style.checkboxText}>
            Получать уведомления о статусе заказа по электронной почте
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderPay;

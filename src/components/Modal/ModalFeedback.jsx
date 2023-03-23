import React, { useState } from "react";
import { Button, Modal } from "antd";
import style from "./Modal.module.scss";

const ModalFeedback = () => {
  const handleSubmitPhone = (e) => {
    e.preventDefault();
    e.stopPropagation();

    Api.post("api/feedback/" +  {
      headers: { apiKey: token },
    });
  };

  return (
    <div>
      <h2>Хотите заказать звонок?</h2>
      <p>Оставьте нам свой номер и мы с вами свяжемся</p>
      <form onSubmit={handleSubmitPhone} className={style.form}>
        <div className={style.input}>
          <div className={style.inputText}>Ваш номер</div>
          <input
            required
            placeholder="8123839902"
            className={style.inputItem}
          />
        </div>
        <button className={style.btn}>Отправить</button>
      </form>
    </div>
  );
};

export default ModalFeedback;

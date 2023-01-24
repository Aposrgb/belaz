import React, { useState, useEffect } from "react";
import style from "./Modal.module.scss";
import logo from "../../assets/svg/logoModal.svg";
import { Autorize } from "../../api/security.js";

const ModalAuto = (props) => {
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Auto = (email, password) => {
    Autorize(email, password)
      .then((res) => {
        console.log("====================================");
        console.log(res);
        console.log("====================================");

        localStorage.setItem("token", res.data.data.token);
        window.location.reload();
      })
      .catch((error) => {
        setErrorText(error.response.data.message);
      });
  };

  return (
    <div>
      <img src={logo} className={style.logo} />
      <div className={style.title}>Введите логин и пароль</div>
      <div className={style.text}>
        Или зарегистрируйтесь, если Вы здесь впервые
      </div>
      <form className={style.form}>
        <div
          className={style.input}
          style={!!errorText.length ? { borderColor: "red" } : {}}
        >
          <div className={style.inputText}>E-mail или логин</div>
          <input
            required
            type="email"
            placeholder="info@agregatekb.ru"
            className={style.inputItem}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorText("");
            }}
            value={email}
          />
        </div>
        <div
          className={style.input}
          style={!!errorText.length ? { borderColor: "red" } : {}}
        >
          <div className={style.inputText}>Телефон или пароль</div>
          <input
            required
            type="text"
            placeholder="8123839902"
            className={style.inputItem}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorText("");
            }}
            value={password}
          />
        </div>
        {!!errorText.length && <p className={style.error}>{errorText}</p>}
        <button
          className={style.btn}
          onClick={(e) => {
            e.preventDefault();
            Auto(email, password);
          }}
        >
          Войти
        </button>
      </form>
      <div className={style.linkModal} onClick={props.autorize}>
        Нет аккаунта? Зарегистрироваться
      </div>
    </div>
  );
};
export default ModalAuto;

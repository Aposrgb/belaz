import React, { useState } from "react";
import style from "./Modal.module.scss";
import { registration } from "../../api/security";
const ModalRegister = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [phone, setPhone] = useState("");
  const [isJuristic, setIsJuristic] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    registration(email, password, name, surname, patronymic, phone, isJuristic)
      .then((res) => {
        if (res.data.token) {
          props.registrathion();
        }
      })
      .catch((error) => {
        setErrorText(error.response.data.message || error.response.data.detail);
      });
  };

  const flexStyles = {
    display: 'flex',
    margin: '25px'
  }

  return (
    <div>
      <div className={style.title}>Регистрация</div>
      <div className={style.text}>
        Зарегистрируйтесь и начните совершать покупки
      </div>
      <form className={style.form}>
        <div
          className={style.input}
          style={!!errorText.length ? { borderColor: "red" } : {}}
        >
          <input
            required
            type="text"
            placeholder="Имя"
            onChange={(e) => {
              setName(e.target.value);
              setErrorText("");
            }}
            value={name}
            className={style.inputItem}
          />
        </div>
        <div
          className={style.input}
          style={!!errorText.length ? { borderColor: "red" } : {}}
        >
          <input
            required
            type="text"
            placeholder="Фамилия"
            onChange={(e) => {
              setSurname(e.target.value);
              setErrorText("");
            }}
            value={surname}
            className={style.inputItem}
          />
        </div>
        <div
          className={style.input}
          style={!!errorText.length ? { borderColor: "red" } : {}}
        >
          <input
            required
            type="text"
            placeholder="Отчество"
            onChange={(e) => {
              setPatronymic(e.target.value);
              setErrorText("");
            }}
            value={patronymic}
            className={style.inputItem}
          />
        </div>
        <div
          className={style.input}
          style={!!errorText.length ? { borderColor: "red" } : {}}
        >
          <input
            required
            type="email"
            placeholder="E-Mail"
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorText("");
            }}
            value={email}
            className={style.inputItem}
          />
        </div>
        <div
          className={style.input}
          style={!!errorText.length ? { borderColor: "red" } : {}}
        >
          <input
            required
            type="tel"
            placeholder="Телефон"
            maxLength={12}
            onChange={(e) => {
              setPhone(e.target.value);
              setErrorText("");
            }}
            value={phone}
            className={style.inputItem}
          />
        </div>
        <div
          className={style.input}
          style={!!errorText.length ? { borderColor: "red" } : {}}
        >
          <input
            required
            type="text"
            placeholder="Пароль"
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorText("");
            }}
            value={password}
            className={style.inputItem}
          />
        </div>
        <div style={flexStyles}>
          <label style={{marginRight: '20px', fontSize: '15px'}}for="isJuristic">
Юридическое лицо
          </label>
          <input
            id="isJuristic"
            type="checkbox"
            onChange={(e) => {
              setIsJuristic(e.target.checked);
              setErrorText("");
            }}
            value={isJuristic}
          />
        </div>
        {!!errorText.length && <p className={style.error}>{errorText}</p>}
        <button
          className={style.btn}
          onClick={handleSubmit}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className={style.linkModal} onClick={props.registrathion}>
        Уже есть аккаунт? Вход
      </div>
    </div>
  );
};
export default ModalRegister;

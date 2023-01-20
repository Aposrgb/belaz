import React, { useEffect } from "react";
import style from "./LkSetting.module.scss";
import { Input, DatePicker, ConfigProvider } from "antd";
// import moment from "moment";
// import "moment/locale/ru";
import locale from "antd/es/locale/ru_RU";
import { connect } from "react-redux";
import { useState } from "react";
import { Api } from "../../../api/api";

let mapStateToProps = (state) => {
  return {
    personInfo: state.personInfoReducer.personInfo,
  };
};

const LkSettingContainer = (props) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [dateBirth, setDateBirth] = useState(undefined);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [index, setIndex] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    setName(props.personInfo.firstname ?? "");
    setSurname(props.personInfo.surname ?? "");
    setPatronymic(props.personInfo.patronymic ?? "");
    setDateBirth(props.personInfo.dateBirth ?? undefined);
    setEmail(props.personInfo.email ?? "");
    setPhone(props.personInfo.phone ?? "");
    setCountry(props.personInfo.country ?? "");
    setCity(props.personInfo.city ?? "");
    setLocality(props.personInfo.locality ?? "");
    setIndex(props.personInfo.index ?? "");
    setAddress(props.personInfo.address ?? "");
  }, [props.personInfo]);

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeSurname = (e) => setSurname(e.target.value);
  const handleChangePatronymic = (e) => setPatronymic(e.target.value);
  const handleDateBirth = (value) => {
    setDateBirth(value);
  };
  const handleChangeemail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleLocality = (e) => setLocality(e.target.value);
  const handleIndex = (e) => setIndex(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  const handleSubmit = () => {
    const token = localStorage.token;
    Api.patch(
      "/api/user",
      {
        name,
        surname,
        patronymic,
        email,
        phone,
        country,
        city,
        locality,
        index,
        dateBirth,
        address,
      },
      { headers: { apiKey: token } }
    ).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
    });
  };

  return (
    <div className="block">
      <div className={style.title}>Личные данные</div>
      <div className={style.inputContainer}>
        <div className={style.input}>
          <div className={style.inputName}>Имя</div>
          <Input
            onChange={handleChangeName}
            value={name}
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Фамилия</div>
          <Input
            onChange={handleChangeSurname}
            value={surname}
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Отчество</div>
          <Input
            onChange={handleChangePatronymic}
            value={patronymic}
            placeholder="Если есть"
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          {/* <div className={style.inputName}>Дата рождения</div> */}
          {/* <ConfigProvider locale={locale}>
            <DatePicker
              onChange={handleDateBirth}
              value={dateBirth}
              className={style.inputItem}
              // defaultValue={moment("01-01-2022", "DD-MM-YYYY")}
            />
          </ConfigProvider> */}
        </div>
      </div>
      <div className={style.title}>Контактные данные</div>
      <div className={style.inputContainer}>
        <div className={style.input}>
          <div className={style.inputName}>E-mail</div>
          <Input
            onChange={handleChangeemail}
            value={email}
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Телефон</div>
          <Input
            onChange={handlePhone}
            value={phone}
            className={style.inputItem}
          />
        </div>
      </div>
      <div className={style.title}>Адрес доставки</div>
      <div className={style.inputContainer}>
        <div className={style.input}>
          <div className={style.inputName}>Страна</div>
          <Input
            onChange={handleCountry}
            value={country}
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Город</div>
          <Input
            onChange={handleCity}
            value={city}
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Населенный пункт</div>
          <Input
            onChange={handleLocality}
            value={locality}
            placeholder="Если есть"
            className={style.inputItem}
          />
        </div>
        <div className={style.input}>
          <div className={style.inputName}>Индекс</div>
          <Input
            onChange={handleIndex}
            className={style.inputItem}
            value={index}
          />
        </div>
        <div className={style.inputFull}>
          <div className={style.inputName}>Адрес</div>
          <Input
            onChange={handleAddress}
            value={address}
            placeholder="Если есть"
            className={style.inputItem}
          />
        </div>
        <button onClick={handleSubmit} className={style.btn}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

const LkSetting = connect(mapStateToProps)(LkSettingContainer);
export default LkSetting;

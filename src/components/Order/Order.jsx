import React, { useEffect, useState } from "react";
import style from "./Order.module.scss";
import BasketSidebar from "../BasketSidebar/BasketSidebar.jsx";
import OrderPay from "./OrderPay.jsx";
import OrderDelivery from "./OrderDelivery.jsx";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Title from "../Title/Title.jsx";
import Product from "../Product/Product.jsx";
import truck from "../../assets/svg/truck.svg";
import mail from "../../assets/svg/mailSend.svg";
import marker from "../../assets/svg/marker.svg";
import delivery from "../../assets/svg/delivery-parcel.svg";
import OrderProductItem from "./OrderProductItem.jsx";
import { AllProductsBasket } from "../../api/basket";
import { connect } from "react-redux";
import { GetPersonInfo } from "../../store/slice/personInfoSlice.js";
import { Api } from "../../api/api";
import { Input } from "antd";

const data = [
  {
    id: 1,
    icon: marker,
    text: "Пункт AgregatEKB",
    description:
      "Россия, Санкт-Петербург, Наб. Обводного канала, д. 138, к. 6, лит. А",
  },
  {
    id: 2,
    icon: mail,
    text: "Почта России",
    description: "Выберите, чтобы ввести адрес",
  },
  {
    id: 3,
    icon: delivery,
    text: "Самовывоз",
    description: "Выберите, чтобы ввести адрес",
  },
  {
    id: 4,
    icon: truck,
    text: "Доставка",
    description: "Выберите, чтобы ввести адрес",
  },
];

const OrderContainer = (props) => {
  const navigate = useNavigate();
  const [basketProduct, setBasketProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chosenDelivery, setchosenDelivery] = useState(data[0].id);

  const [firstname, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);

  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNum, setHouseNum] = useState("");
  const [aptNum, setAptNum] = useState("");

  useEffect(() => {
    setFirstName(props.personInfo.firstname ?? "");
    setSurname(props.personInfo.surname ?? "");
    setPhone(props.personInfo.phone ?? "");
  }, [props.personInfo]);

  const handleChangeFirstName = (e) => setFirstName(e.target.value);
  const handleChangeSurname = (e) => setSurname(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangeChecked = (e) => setChecked(e.target.checked);
  const handleOrder = () => {
    const token = localStorage.token;
    const address = city + " " + street + " " + houseNum + " " + aptNum;
    Api.post(
      "api/purchase/",
      {
        products: basketProduct.map(basket => {
          return {
            count: basket.count,
            productId: basket.product.id
          }
        }),
        name: firstname,
        surname: surname,
        phone: phone,
        address: chosenDelivery === 4 ? address : " ",
        deliveryService: chosenDelivery,
      },
      { headers: { apiKey: token } }
    ).then((res) => {
      if (res.status === 200) {
        // navigate("/lk/order/");
      }
    });
  };

  const handleChangeCity = (e) => setCity(e.target.value);
  const handleChangeStreet = (e) => setStreet(e.target.value);
  const handleChangeHouseNum = (e) => setHouseNum(e.target.value);
  const handleChangeAptNum = (e) => setAptNum(e.target.value);

  useEffect(() => {
    setLoading(true);
    AllProductsBasket().then((res) => {
      setBasketProduct(res.data);
      setLoading(false);
    });
    props.GetPersonInfo();
  }, []);

  const sum = basketProduct.reduce(
    (acc, cur) => acc + cur.product.price * cur.count,
    0
  );

  const handleChangeDelivery = (e) => {
    setchosenDelivery(e.target.value);
  };

  return (
    <>
      <div className={style.content}>
        <div className={style.block}>
          <OrderPay
            firstname={firstname}
            surname={surname}
            phone={phone}
            checked={checked}
            onChangeFirstName={handleChangeFirstName}
            onChangeSurname={handleChangeSurname}
            onChangePhone={handleChangePhone}
            onChangeChecked={handleChangeChecked}
          />
          <OrderDelivery
            currentDelivery={chosenDelivery}
            onChangeDelivery={handleChangeDelivery}
            data={data}
          />
          {chosenDelivery === 4 && (
            <div className={style.inputOrder}>
              <Input
                placeholder="Город"
                style={{ marginBottom: "16px" }}
                onChange={handleChangeCity}
                value={city}
              />
              <Input
                placeholder="Улица"
                style={{ marginBottom: "16px" }}
                onChange={handleChangeStreet}
                value={street}
              />
              <Input
                placeholder="Дом"
                style={{ marginBottom: "16px" }}
                onChange={handleChangeHouseNum}
                value={houseNum}
              />
              <Input
                placeholder="Квартира"
                style={{ marginBottom: "16px" }}
                onChange={handleChangeAptNum}
                value={aptNum}
              />
            </div>
          )}
          <div className={style.flex}>
            <NavLink to="/howToBuy/payment" className={style.nav}>
              Условия оплаты
            </NavLink>
            <NavLink to="/howToBuy/delivery" className={style.nav}>
              Условия доставки
            </NavLink>
            <NavLink to="/howToBuy/guarantee" className={style.nav}>
              Гарантия на товар
            </NavLink>
          </div>
          {props.product && <OrderProductItem product={props.product[0]} />}
        </div>
        <div className={style.sidebar}>
          <BasketSidebar
            onOrder={handleOrder}
            sum={sum}
            count={basketProduct.length}
          />
        </div>
      </div>
      <Title arrow={true} title={"Продолжить покупки"} link="/catalog" />
      {props.popular && <Product product={props.popular} slice={5} />}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    personInfo: state.personInfoReducer.personInfo,
  };
};
const Order = connect(mapStateToProps, { GetPersonInfo })(OrderContainer);

export default Order;

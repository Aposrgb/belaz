import React, { useEffect, useState } from "react";
import LkDeliveryItem from "./LkDeliveryItem.jsx";
import style from "./LkDelivery.module.scss";
import { Api } from "../../../api/api.js";

const LkDelivery = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.token;
    Api.get("/api/purchase", { headers: { apiKey: token } }).then(res => {

      setOrders(res.data.data)
    })
  }, []);

  console.log('====================================');
  console.log(orders);
  console.log('====================================');

  let item = orders.map((e) => (
    <LkDeliveryItem
      id={e.id}
      key={e.id}
      statusDelivery={e.statusDelivery}
      dateDelivery={e.dateDelivery}
      img={e.img}
      nameProduct={e.nameProduct}
      productOrder={e.productOrder}
      dateRegistration={e.dateRegistration}
      paymentState={e.paymentState}
      address={e.address}
      receiverName={e.receiverName}
      receiverSurname={e.receiverSurname}
      phoneNumber={e.phoneNumber}
      addressDelivery={e.addressDelivery}
      deliveryService={e.deliveryService}
    />
  ));
  return (
    <div className="block">
      <div className={style.title}>Мои заказы</div>
      {item}
    </div>
  );
};

export default LkDelivery;

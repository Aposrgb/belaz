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

  let item = orders.map((e) => (
    <LkDeliveryItem
      id={e.id}
      key={e.id}
      statusDelivery={e.deliveryStatus}
      dateDelivery={e.dateArrive}
      img={e.product.img}
      nameProduct={e.product.title}
      productOrder={e.price}
      dateRegistration={e.datePurchase}
      paymentState={e.purchaseStatusName}
      address={e.deliveryAddress}
      receiverName={e.name}
      receiverSurname={e.surname}
      phoneNumber={e.phone}
      addressDelivery={e.deliveryAddress}
      deliveryService={e.deliveryServiceName}
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

import React, { useEffect, useState } from "react";
import { Checkbox, Input } from "antd";
import style from "./Basket.module.scss";
import star from "../../assets/svg/star.svg";
import Counter from "../Counter/Counter.jsx";
import { Api } from "../../api/api";

const BasketItem = (props) => {
  const [count, setCount] = useState(props.count);

  const isNeedUpdateCount = props.count !== count;

  useEffect(() => {
    const token = localStorage.token;
    if (isNeedUpdateCount) {
      Api.patch(
        "api/basket/" + props.product.id,
        { count },
        { headers: { apiKey: token } }
      );
      window.location.reload();
    }
  }, [isNeedUpdateCount]);

  const handleRemove = () => {
    const token = localStorage.token;
    Api.delete("api/basket/" + props.product.id, {
      headers: { apiKey: token },
    });
    window.location.reload();
  };

  const handleAddFavorite = () => {
    const token = localStorage.token;
    Api.put(
      "api/favorite/" + props.product.id,
      {},
      { headers: { apiKey: token } }
    );
  };

  const handleCountUpdate = () => {
    const token = localStorage.token;
    Api.put(
      "api/basket/" + props.id,
      { count },
      { headers: { apiKey: token } }
    );
  };

  return (
    <div className={style.card}>
      {/* <Checkbox className={style.checkbox} /> */}
      <img src={props.product.img} className={style.img} />
      <div className={style.info}>
        <div className={style.top}>
          <div className={style.item}>
            <div className={style.productName}>{props.product.title}</div>
            <div className={style.grabe}>
              <img src={star} className={style.star} />({props.product.rating}{" "}
              отзывов)
            </div>
          </div>
          <div className={style.setting}>
            <div onClick={handleRemove} className={style.settingText}>
              Удалить
            </div>
            <div onClick={handleAddFavorite} className={style.settingText}>
              В избранное
            </div>
          </div>
        </div>
        <div className={style.under}>
          <div className={style.count}>
            <div className={style.counterText}>Количество:</div>
            <Counter count={count} setCount={setCount} />
          </div>
          <div className={style.end}>
            <div className={style.total}>Итог</div>
            <div className={style.prise}>
              {props.product.price * count} руб.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;

import React from "react";
import { Select } from "antd";
import style from "./LkHistory.module.scss";
import ProductItemLine from "../../Product/ProductItemLine.jsx";

const { Option } = Select;
const LkHistory = (props) => {
  let products = props.product?.map((e) => (
    <ProductItemLine
      id={e.id}
      key={e.id}
      title={e.title}
      special={e.special}
      img={e.img}
      grabe={e.grabe}
      totalGrabe={e.totalGrabe}
      price={e.price}
      description={e.description}
    />
  )) ?? []
  return (
    <div className="block">
      <div className={style.flex}>
        <div className={style.title}>История просмотров</div>
        {!!products.lengts && <Select defaultValue="new" className={style.select}>
          <Select.Option value="new">Новое</Select.Option>
          <Select.Option value="favorite">Часто просматривалось</Select.Option>
        </Select>}
      </div>
      {!!products.lengts && <div className={style.card}>{products}</div>}
    </div>
  );
};

export default LkHistory;

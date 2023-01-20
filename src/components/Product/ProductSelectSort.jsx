import React from "react";
import { Select } from "antd";
import style from "./ProductSelece.module.scss";
const { Option } = Select;
const ProductSelectSort = (props) => {
  return (
    <div className={style.productSelect}>
      <Select defaultValue="default" className={style.select}>
        <Select.Option value="default">По популярности</Select.Option>
      </Select>
      <Select defaultValue="default" className={style.select}>
        <Select.Option value="default">По возрастанию</Select.Option>
      </Select>
    </div>
  );
};

export default ProductSelectSort;

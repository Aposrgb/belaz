import React from "react";
import { Select } from "antd";
import style from "./ProductSelece.module.scss";
const { Option } = Select;
const ProductSelectSort = (props) => {
  return (
    <div className={style.productSelect}>
      <Select
        onChange={props.onChangePopular}
        defaultValue="popular"
        className={style.select}
      >
        <Select.Option value="popular">По популярности</Select.Option>
        <Select.Option value="not popular">По не популярности</Select.Option>
      </Select>
      <Select onChange={props.onChangePrice} defaultValue="asc" className={style.select}>
        <Select.Option value="asc">По возрастанию</Select.Option>
        <Select.Option value="desc">По уменьшению</Select.Option>
      </Select>
    </div>
  );
};

export default ProductSelectSort;

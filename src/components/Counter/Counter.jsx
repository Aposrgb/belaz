import React from "react";
import style from "./Counter.module.scss";

const Counter = (props) => {
  const handleMinusOne = () => {
    if (props.count > 1) {
      props.setCount(props.count - 1);
    }
  };

  const handlePlusOne = () => {
    const maxCount = props?.maxCount || 1000;
    if (props.count < maxCount) {
      props.setCount(props.count + 1);
    }
  };

  return (
    <div className={style.flex}>
      <div
        className={
          props.count <= 0
            ? `${style.button}  ${style.none}`
            : `${style.button}`
        }
        onClick={handleMinusOne}
      >
        -
      </div>
      <div className={style.input}>{props.count}</div>
      <div className={style.button} onClick={handlePlusOne}>
        +
      </div>
    </div>
  );
};

export default Counter;

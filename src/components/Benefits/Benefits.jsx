import React from "react";
import style from "./Benefits.module.scss";
import BenefitsItem from "./BenefitsItem";

export default function Benefits(props) {
  let item = props.benefits.map((e) => (
    <BenefitsItem
      id={e.id}
      key={e.id}
      icon={e.icon}
      title={e.title}
      text={e.text}
    />
  ));
  return (
    <div className={style.container}>
      <div className={style.img} />
      <div className={style.content}>
        <div className={style.title}>Наши преимущества</div>
        <div className={style.subtitle} />
        <div className={style.item}> {item}</div>
      </div>
    </div>
  );
}

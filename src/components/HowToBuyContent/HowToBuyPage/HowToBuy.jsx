import React from "react";
import HowToBuyItem from "./HowToBuyItem.jsx";

const HowToBuy = (props) => {
  let buyItem = props.helpsAll?.map((e, index) => (
    <HowToBuyItem
      id={e.id}
      key={`${e.id} ${index}`}
      title={e.title}
      description={e.description}
    />
  ));
  return <div>{buyItem}</div>;
};

export default HowToBuy;

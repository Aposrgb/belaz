import React, { useEffect, useState } from "react";
import style from "./Product.module.scss";
import { Checkbox } from "antd";
import { Slider } from "antd";
import filter from "../../assets/svg/filter.svg";

const ProductFilter = (props) => {
  const [inputValue, setInputValue] = useState([1, 447031]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);

  function useDebounce(inputValue, category, brand, delay) {
    const [debouncedValue, setDebouncedValue] = useState(inputValue, category, brand);

    useEffect(() => {
      const timer = setTimeout(
        () => setDebouncedValue(inputValue, category, brand),
        delay || 500
      );

      return () => {
        clearTimeout(timer);
      };
    }, [inputValue, category, brand, delay]);

    return debouncedValue;
  }
  const debouncedValue = useDebounce(inputValue, category, brand,  700);

  useEffect(() => {
    props.getFilter(props.current, 60, inputValue[0], inputValue[1], category, brand);
  }, [debouncedValue, props.current, category, brand]);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };

  return (
    <div className={style.filter}>
      <div className={style.filterTop}>
        <div className={style.filterText}>Фильтр</div>
        <img className={style.filterIcon} src={filter} />
      </div>
      <div className={style.titleFilter}>Цена</div>
      <Slider
        range={{
          draggableTrack: true,
        }}
        min={props.filter?.minPrice}
        max={props.filter?.maxPrice}
        defaultValue={[1, 447031]}
        onChange={onChange}
      />
      {(props?.isUseSubCategory === undefined ? props?.filter?.categories : props.filter?.subCategories)?.map((e) => (
        <Checkbox
          id={e.id}
          key={e.id}
          onClick={(value) => {
            setCategory((category) =>
              !!value.target.checked
                ? [...category, e.id]
                : category.filter((category) => category !== e.id)
            );
          }}
        >
          {e.title}
        </Checkbox>
      ))}
      <hr/>
      <p>Бренды</p>
      {(props?.filter?.brands)?.map((e) => (
        <Checkbox
          id={e.id}
          key={e.id}
          onClick={(value) => {
            setBrand((brand) =>
              !!value.target.checked
                ? [...brand, e.id]
                : brand.filter((brand) => brand !== e.id)
            );
          }}
        >
          {e.name}
        </Checkbox>
      ))}
    </div>
  );
};

export default ProductFilter;

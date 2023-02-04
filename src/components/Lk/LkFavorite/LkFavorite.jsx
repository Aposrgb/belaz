import React, { useEffect, useState } from "react";
import ProductItemLine from "../../Product/ProductItemLine.jsx";
import style from "../LkHistory/LkHistory.module.scss";
import { Select } from "antd";
import ProductItem from "../../Product/ProductItem.jsx";
import LineOrBlock from "../../LineOrBlock/LineOrBlock.jsx";
import { AllProductsFavorite } from "../../../api/favorite.js";

const LkFavorite = (props) => {
  const [line, setLine] = useState(false);
  const [loading, setloading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    AllProductsFavorite(1, 10).then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const handleAddFavorite = (id) => {
    const newFavoriteList = [...favorites, { id }];
    setFavorites(newFavoriteList);
  };

  const handleRemoveFavorite = (id) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== id
    );
    setFavorites(newFavoriteList);
  };

  let products = favorites?.map((e) =>
    line ? (
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
        isFavorite
        onAdd={handleAddFavorite}
        onRemove={handleRemoveFavorite}
      />
    ) : (
      <ProductItem
        id={e.id}
        key={e.id}
        title={e.title}
        special={e.special}
        img={e.img}
        grabe={e.grabe}
        totalGrabe={e.totalGrabe}
        price={e.price}
        isFavorite
        onAdd={handleAddFavorite}
        onRemove={handleRemoveFavorite}
      />
    )
  );

  return (
    <div className="block">
      <div className={style.flex}>
        <div className={style.title}>Избранное</div>
        {!!products && (
          <div className={style.flexSort}>
            <Select defaultValue="new" className={style.select}>
              <Select.Option value="new">Новое</Select.Option>
              <Select.Option value="favorite">
                Часто просматривалось
              </Select.Option>
            </Select>
            <LineOrBlock line={line} setLine={setLine} />
          </div>
        )}
      </div>
      <div className={style.cardFavorite}>{products}</div>
    </div>
  );
};

export default LkFavorite;

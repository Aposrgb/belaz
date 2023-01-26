import React, { useEffect, useState } from "react";
import style from "./Search.module.scss";
import search from "../../assets/svg/search.svg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.state) {
      setSearchText(location.state.search);
    }
  }, [location.state]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate("/search/" + searchText, { state: { search: searchText } });
      props.GetSearch(1, 20, searchText);
    }
  };

  return (
    <div className={style.flex}>
      <input
        onKeyDown={handleSearch}
        placeholder="Искать товары и категории"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        className={style.input}
      />

      <NavLink
        state={{ search: searchText }}
        className={style.button}
        to={"/search/" + searchText}
        onClick={() => {
          props.GetSearch(1, 20, searchText);
        }}
      >
        <img src={search} className={style.icon} />
      </NavLink>
    </div>
  );
};

export default Search;

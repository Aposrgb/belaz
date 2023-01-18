import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import Nav from "../Nav/Nav.jsx";
import NavUnder from "../Nav/NavUnder.jsx";
import Navigation from "../Nav/Navigation/Navigation";
import { useState, useEffect } from "react";

const Header = (props) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const items = localStorage.token;
    if (items) {
      setToken(items);
    }
  }, [token]);

  return (
    <>
      <div className={style.header}>
        <div className={style.headerContainer}>
          <NavLink to="/">
            <img src={logo} alt="logo" className={style.logo} />
          </NavLink>
          <Nav token={token}/>
        </div>
      </div>
      <Navigation className={style.column_nav} token={token} />
      <div className={style.headerUnder}>
        <NavUnder />
      </div>
    </>
  );
};

export default Header;

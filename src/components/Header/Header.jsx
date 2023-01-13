import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import Nav from "../Nav/Nav.jsx";
import NavUnder from "../Nav/NavUnder.jsx";

const Header = (props) => {
  return (
    <>
      <div className={ style.header }>
        <div className={ style.headerContainer }>
          <NavLink to="/">
            <img src={ logo } alt="logo" className={ style.logo }/>
          </NavLink>
          <Nav/>
        </div>
      </div>
      <div className={ style.headerUnder }>
        <NavUnder/>
      </div>
    </>
  );
};

export default Header;

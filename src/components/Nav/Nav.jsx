
import React, { useState, useEffect } from "react";
import style from "./Nav.module.scss";
import ModalItem from "../Modal/ModalItem";
import NavIcon from "./NavIcon";
import Navigation from "./Navigation/Navigation";


const Nav = ({token}) => {
 

  return (
      <div className={style.nav}>
        <Navigation className={style.row_nav} token={token} />
        {token ? <NavIcon /> : ""}
        {token ? (
          ""
        ) : (
          <>
            <ModalItem />
          </>
        )}
      </div>
  );
};

export default Nav;

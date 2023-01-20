import React from "react";
import style from "./LkBlock.module.scss";
import { NavLink } from "react-router-dom";
const LkBlockSetting = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className={style.blockNav}>
      <p className={style.title}>Аккаунт</p>
      <div className={style.links}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="setting/"
        >
          Изменить профиль
        </NavLink>
        {/* На текущий момент не реализована страница уведомлений
        <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.active}` : `${style.link} `
        }
        to="notification/"
      >
        Уведомления
      </NavLink> */}
        <NavLink
          onClick={handleLogout}
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
          to="/"
        >
          Выход
        </NavLink>
      </div>
    </div>
  );
};

export default LkBlockSetting;

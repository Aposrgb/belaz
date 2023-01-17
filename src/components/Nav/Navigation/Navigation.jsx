import style from "./Navigation.module.scss";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Navigation = ({ className, token }) => (
  <ul className={clsx(style.navigation, className)}>
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.active}` : `${style.link} `
        }
        to=""
      >
        Главная
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.active}` : `${style.link} `
        }
        to="catalog"
      >
        Каталог
      </NavLink>
    </li>

    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.active}` : `${style.link} `
        }
        to="news"
      >
        Новости
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.link} ${style.active}` : `${style.link} `
        }
        to="contact"
      >
        Контакты
      </NavLink>
    </li>
    {token && (
      <li>
        <NavLink
          to="/lk"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link} `
          }
        >
          Кабинет
        </NavLink>
      </li>
    )}
  </ul>
);

export default Navigation;

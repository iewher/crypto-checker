import React from "react";
import "../../scss/header/header.scss";
import { Link } from "react-scroll";
import logo from "../../svg/logo-header.svg";

function Header() {
  return (
    <div className="header" id="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__search">
          <input placeholder="Найди криптовалюту" />
        </div>
        <div className="header__menu">
          <a href="#present">Презент</a>
          <a href="#table">Таблица</a>
          <a href="#plus">Преимущества</a>
          <a href="#plans">Планы</a>
          <Link to="contacts">
            <button>Контакты</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

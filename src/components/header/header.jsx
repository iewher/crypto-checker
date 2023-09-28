import React, { useState } from "react";
import "../../scss/header/header.scss";
import { Link } from "react-scroll";
import Search from "../search/search";
import logo from "../../svg/logo-header.svg";
import logo_dark from "../../svg/logo-header-dark.svg";
import ButtonTheme from "../button-theme/button-theme";
import UserMenu from "../user-menu/user-menu";

function Header() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <div className="header" id="header">
      <div className="header__container">
        <div className="header__logo">
          {isLightTheme ? (
            <img src={logo} alt="logo" />
          ) : (
            <img src={logo_dark} alt="logo-dark" />
          )}
        </div>
        <Search />
        <div className="header__menu">
          <a href="#present">Презент</a>
          <a href="#table">Таблица</a>
          <a href="#plus">Преимущества</a>
          <a href="#plans">Планы</a>
          <Link to="contacts">
            <button>Контакты</button>
          </Link>
        </div>
        <ButtonTheme
          isLightTheme={isLightTheme}
          setIsLightTheme={setIsLightTheme}
        />
        <UserMenu />
      </div>
    </div>
  );
}

export default Header;

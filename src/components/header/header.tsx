import React, { useState } from "react";
import "../../scss/header/header.scss";
import { Link } from "react-scroll";
import Search from "../search/search";
import ButtonTheme from "../button-theme/button-theme";
import UserMenu from "../user-menu/user-menu";
import { Button } from "antd";

// interface HeaderProps {}

const Header: React.FunctionComponent = () => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
  const logo = require("../../svg/logo-header.svg") as string;
  const logo_dark = require("../../svg/logo-header-dark.svg") as string;

  return (
    <div className="header" id="header">
      <div className="header__container">
        <div className="header__logo">
          {isLightTheme ? (
            <img src={logo} alt="logo" />
          ) : (
            <img src={logo_dark} alt="logo_dark" />
          )}
        </div>
        <Search />
        <div className="header__menu">
          <a href="#present">Презент</a>
          <a href="#table">Таблица</a>
          <a href="#plus">Преимущества</a>
          <a href="#plans">Планы</a>
          <Link to="contacts">
            <Button type="primary">Контакты</Button>
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
};

export default Header;

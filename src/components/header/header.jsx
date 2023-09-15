import React, { useState } from "react";
import "../../scss/header/header.scss";
import { Link } from "react-scroll";
import Search from "../search/search";
import logo from "../../svg/logo-header.svg";
import logo_dark from "../../svg/logo-header-dark.svg";
import { BsFillMoonFill } from "react-icons/bs"; //moon
import { BsFillSunFill } from "react-icons/bs"; //sun

function Header() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const root = document.getElementById("root");

  const switchTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
    if (isLightTheme === true) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };

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
        <button onClick={switchTheme} className="switch-theme">
          {isLightTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </div>
    </div>
  );
}

export default Header;

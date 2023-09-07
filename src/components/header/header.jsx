import React from "react";
import "../../scss/header/header.scss";
// import logo from "../../svg/logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          {/* <img src={logo} alt="" /> */}
          <p>logo here</p>
        </div>
        <div className="header__search">
          <input placeholder="поиск" />
        </div>
        <div className="header__menu">
          <button>1</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

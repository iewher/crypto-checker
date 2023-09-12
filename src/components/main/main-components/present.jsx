import React from "react";
import logo from "../../../svg/logo-main.svg";

export default function Present() {
  return (
    <div className="main-container__present" id="present">
      <img src={logo} alt="logo" />
      <p>
        <a href="https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0">
          Криптовалюта
        </a>{" "}
        — разновидность цифровой валюты, учёт внутренних расчётных единиц
        которой обеспечивает децентрализованная платёжная система, работающая в
        полностью автоматическом режиме.
      </p>
    </div>
  );
}

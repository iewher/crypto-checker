import React, { useEffect, useState } from "react";
import logo from "../../../svg/logo-main.svg";
import logo_dark from "../../../svg/logo-main-dark.svg";

//TODO: заменить чем-нибудь текст в этом блоке, мб какой-нибудь popover из mui?

export default function Present() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const root = document.getElementById("root");

  useEffect(() => {
    const checkTheme = () => {
      if (root.classList.contains("light")) {
        setIsLightTheme(true);
      } else {
        setIsLightTheme(false);
      }
    };
    const observer = new MutationObserver(checkTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    checkTheme();
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="main-container__present" id="present">
      {isLightTheme ? (
        <img src={logo} alt="logo" />
      ) : (
        <img src={logo_dark} alt="logo_dark" />
      )}
      <div className="text">
        <p>
          <a href="https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%D0%B0">
            Криптовалюта
          </a>{" "}
          — разновидность цифровой валюты, учёт внутренних расчётных единиц
          которой обеспечивает децентрализованная платёжная система, работающая
          в полностью автоматическом режиме.
        </p>
      </div>
    </div>
  );
}

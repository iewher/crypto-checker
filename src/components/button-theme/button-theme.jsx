import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Switch } from "antd";

export default function ButtonTheme({ isLightTheme, setIsLightTheme }) {
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
    <Switch
      checkedChildren={<BsFillSunFill />}
      unCheckedChildren={<BsFillMoonFill />}
      onClick={switchTheme}
      className="switch-theme"
    />
  );
}

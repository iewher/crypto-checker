import React, { useEffect } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { Switch } from "antd";
import Cookies from "js-cookie";

export default function ButtonTheme({ isLightTheme, setIsLightTheme }) {
  const root = document.getElementById("root");

  const switchTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
    Cookies.set("isLightTheme", !isLightTheme ? "1" : "0");

    if (isLightTheme === true) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };

  useEffect(() => {
    const savedTheme = Cookies.get("isLightTheme");

    if (savedTheme === "1") {
      setIsLightTheme(true);
      root.classList.remove("dark");
      root.classList.add("light");
    } else if (savedTheme === "0") {
      setIsLightTheme(false);
      root.classList.remove("light");
      root.classList.add("dark");
    }
  }, []);

  return (
    <Switch
      checkedChildren={<BsFillSunFill />}
      unCheckedChildren={<BsFillMoonFill />}
      onClick={switchTheme}
      className="switch-theme"
    />
  );
}

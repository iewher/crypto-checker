import React, { useState } from "react";
import { BsTelegram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Contacts() {
  const [active, setActive] = useState(false);

  const handleSetActive = (value) => {
    if (value !== active) {
      setActive(value);
    }
  };

//   console.log(active);

  return (
    <div className="main-container__contacts" id="contacts">
      <h1>Контакты</h1>
      <div className="list">
        <p
          className={active ? "active" : ""}
          onClick={() => handleSetActive(true)}
        >
          Telegram
        </p>
        <p
          className={!active ? "active" : ""}
          onClick={() => handleSetActive(false)}
        >
          Github
        </p>
      </div>
      <div className="link">
        {active ? (
          <a href="https://t.me/iewher">
            <BsTelegram />
          </a>
        ) : (
          <a href="https://github.com/iewher/crypto-checker">
            <BsGithub />
          </a>
        )}
      </div>
    </div>
  );
}

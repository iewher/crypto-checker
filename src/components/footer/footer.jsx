import React from "react";
import "../../scss/footer/footer.scss";

//TODO: footer смотрится очень просто, добавить фич

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <p>2023 - Crypto checker</p>
        <div className="block" id="contacts">
          <h3>Контакты</h3>
          <a href="https://t.me/iewher">Telegram</a>
          <a href="https://github.com/iewher/crypto-checker">Github</a>
        </div>
        <div className="block" id="contacts">
          <h3>Навигация</h3>
          <a href="#present">Презент</a>
          <a href="#table">Таблица</a>
          <a href="#plus">Преимущества</a>
          <a href="#plans">Планы</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

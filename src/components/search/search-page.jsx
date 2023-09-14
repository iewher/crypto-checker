import React, { useState, useEffect } from "react";
import "../../scss/page-search/page-search.scss";

import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";

export default function PageSearch({ data, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, [data]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 350);
  };

  return (
    <div className={`page-search ${visible ? "visible" : ""}`}>
      <h1>Кратко о монете:</h1>
      <p>Название: {data.name}</p>
      <p>
        Символ:&nbsp; <span className="symbol">{data.symbol}</span>
      </p>
      <p>
        Логотип:{" "}
        <img
          src={data.image.small || data.image.thumb || data.image.large}
          alt="coin-logo"
        />
      </p>
      {data.contract_address && <p>Контракт: {data.contract_address}</p>}

      <h1>Категории:</h1>
      {data.categories.map((item, index) => (
        <p>
          {index + 1}. {item}
        </p>
      ))}

      <h1>Цена:</h1>
      <p>Текущая: {data.market_data.current_price.usd} $</p>
      <p>
        Изменения за 1 ч:{" "}
        {data.market_data.price_change_percentage_1h_in_currency.usd} %{" "}
        {data.market_data.price_change_percentage_1h_in_currency.usd > 0 ? (
          <BiSolidUpArrow color="green" className="icon" />
        ) : (
          <BiSolidDownArrow color="red" className="icon" />
        )}
      </p>
      <p>
        Изменения за 24 ч: {data.market_data.price_change_24h_in_currency.usd} %{" "}
        {data.market_data.price_change_24h_in_currency.usd > 0 ? (
          <BiSolidUpArrow color="green" className="icon" />
        ) : (
          <BiSolidDownArrow color="red" className="icon" />
        )}
      </p>
      <p>
        Изменения за 7 д:{" "}
        {data.market_data.price_change_percentage_7d_in_currency.usd} %{" "}
        {data.market_data.price_change_percentage_7d_in_currency.usd > 0 ? (
          <BiSolidUpArrow color="green" className="icon" />
        ) : (
          <BiSolidDownArrow color="red" className="icon" />
        )}
      </p>
      <p>
        Изменения за 30 д:{" "}
        {data.market_data.price_change_percentage_30d_in_currency.usd} %{" "}
        {data.market_data.price_change_percentage_30d_in_currency.usd > 0 ? (
          <BiSolidUpArrow color="green" className="icon" />
        ) : (
          <BiSolidDownArrow color="red" className="icon" />
        )}
      </p>
      <h1>Ссылки:</h1>
      {data.links.blockchain_site.map((item, index) =>
        item !== "" ? (
          <a href={item}>
            {index + 1}. {item}
          </a>
        ) : null
      )}
      <button className="close" onClick={handleClose}>
        Закрыть
      </button>
    </div>
  );
}

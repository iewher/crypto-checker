import React, { useState, useEffect } from "react";
import "../../scss/page-search/page-search.scss";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { Modal } from "antd";

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
    <Modal
      title={`Вы искали ${data.id}, вот что мы нашли:`}
      centered
      open={visible}
      onOk={handleClose}
      onCancel={handleClose}
    >
      <h2>Кратко о монете:</h2>
      <p>Название: {data.name}</p>{" "}
      <p>
        Символ:&nbsp; <span className="symbol">{data.symbol}</span>{" "}
      </p>{" "}
      <p>
        Логотип:{" "}
        <img
          src={data.image.small || data.image.thumb || data.image.large}
          alt="coin-logo"
        />
      </p>
      {data.contract_address && <p>Контракт: {data.contract_address}</p>}
      <h2>Категории:</h2>
      {data.categories.map((item, index) => (
        <p>
          {index + 1}. {item}
        </p>
      ))}
      <h2>Цена:</h2>
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
      <div className="page-search__links">
        <div className="page-search__links-header">
          <h2>Ссылки:</h2>
        </div>
        <div className="page-search__links-body">
          {data.links.blockchain_site.map((item, index) =>
            item !== "" ? (
              <a href={item}>
                {index + 1}. {item}
              </a>
            ) : null
          )}
        </div>
      </div>
    </Modal>
  );
}

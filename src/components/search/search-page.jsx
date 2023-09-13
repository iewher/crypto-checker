import React from "react";
import "../../scss/page-search/page-search.scss";

export default function PageSearch({ data }) {
  return (
    <div className="page-search">
      <h1>Кратко о монете:</h1>
      <p>Название: {data.name}</p>
      <p>Символ: {data.symbol}</p>
      <p>
        Логотип:{" "}
        <img src={data.image.small || data.image.thumb || data.image.large} />
      </p>
      {data.contract_address && <p>Контракт: {data.contract_address}</p>}

      <h1>Категории:</h1>
      {data.categories.map((item, index) => (
        <p>{index + 1}. {item}</p>
      ))}

      <h1>Цена:</h1>
      <p>Текущая: {data.market_data.current_price.usd} $</p>
      <p>
        Изменения за 1 ч:{" "}
        {data.market_data.price_change_percentage_1h_in_currency.usd} %
      </p>
      <p>
        Изменения за 24 ч: {data.market_data.price_change_24h_in_currency.usd} %
      </p>
      <p>
        Изменения за 7 д:{" "}
        {data.market_data.price_change_percentage_7d_in_currency.usd} %
      </p>
      <p>
        Изменения за 30 д:{" "}
        {data.market_data.price_change_percentage_30d_in_currency.usd} %
      </p>
      <h1>Ссылки:</h1>
      {data.links.blockchain_site.map((item, index) =>
        item !== "" ? <a href={item}>{index + 1}. {item}</a> : null
      )}
    </div>
  );
}

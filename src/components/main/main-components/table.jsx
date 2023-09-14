import React, { useState, useEffect } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { Oval } from "react-loader-spinner";

export default function Table() {
  const currencies = ["RUB", "USD", "EUR", "JPY"];
  const [activeCurrency, setActiveCurrency] = useState(currencies[0]);
  const [data, setData] = useState({});

  const handleSetActive = (currency) => {
    setActiveCurrency(currency);
  };

  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=100&tsym=${activeCurrency}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.Data);
      });
  }, [activeCurrency]);

  return (
    <div className="main-container__table" id="table">
      <h1>Таблица</h1>
      <div className="list">
        {currencies.map((currency) => (
          <p
            key={currency}
            className={activeCurrency === currency ? "active" : ""}
            onClick={() => handleSetActive(currency)}
          >
            {currency}
          </p>
        ))}
      </div>
      {data !== [] ? (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Название</th>
              <th>Цена</th>
              <th>1 ч</th>
              <th>24 ч</th>
              <th>Объем торгов за 24 часа</th>
              <th>Рыночная кап-ция</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).length > 0 &&
              data.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.CoinInfo.FullName}</td>
                  <td>{item.DISPLAY[activeCurrency]?.PRICE || "N/A"}</td>
                  <td>
                    {item.DISPLAY[activeCurrency]?.CHANGEPCTHOUR} %
                    {item.DISPLAY[activeCurrency]?.CHANGEPCTHOUR > 0 ? (
                      <BiSolidUpArrow color="green" className="icon" />
                    ) : (
                      <BiSolidDownArrow color="red" className="icon" />
                    )}
                  </td>
                  <td>
                    {item.DISPLAY[activeCurrency]?.CHANGEPCT24HOUR} %
                    {item.DISPLAY[activeCurrency]?.CHANGEPCTHOUR > 0 ? (
                      <BiSolidUpArrow color="green" className="icon" />
                    ) : (
                      <BiSolidDownArrow color="red" className="icon" />
                    )}
                  </td>
                  <td>{item.DISPLAY[activeCurrency]?.VOLUME24HOURTO}</td>
                  <td>{item.DISPLAY[activeCurrency]?.MKTCAP}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className={"no-table"}>
          <Oval color="white"
          height={'50px'}
          secondaryColor={'black'}
          />
        </div>
      )}
    </div>
  );
}

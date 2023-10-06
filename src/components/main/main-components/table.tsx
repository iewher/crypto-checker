import React, { useState, useEffect } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { Oval } from "react-loader-spinner";
import { Table } from "antd";

// interface TableProps {}

interface Data {
  DISPLAY: any;
  CoinInfo: {
    FullName: string;
  };
}

const TableMain: React.FunctionComponent = () => {
  const currencies = ["RUB", "USD", "EUR", "JPY"];
  const [activeCurrency, setActiveCurrency] = useState<string>(currencies[0]);
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSetActive = (currency: string) => {
    setActiveCurrency(currency);
  };

  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=100&tsym=${activeCurrency}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.Data);
        setLoading(false);
      });
  }, [activeCurrency]);

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Цена",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "1 ч",
      dataIndex: "change1h",
      key: "change1h",
      render: (change1h: number) => (
        <>
          {`${change1h}% `}
          {change1h > 0 ? (
            <BiSolidUpArrow color="green" className="icon" />
          ) : (
            <BiSolidDownArrow color="red" className="icon" />
          )}
        </>
      ),
    },
    {
      title: "24 ч",
      dataIndex: "change24h",
      key: "change24h",
      render: (change24h: number) => (
        <>
          {`${change24h}% `}
          {change24h > 0 ? (
            <BiSolidUpArrow color="green" className="icon" />
          ) : (
            <BiSolidDownArrow color="red" className="icon" />
          )}
        </>
      ),
    },
    {
      title: "Объем торгов за 24 часа",
      dataIndex: "volume24h",
      key: "volume24h",
    },
    {
      title: "Рыночная кап-ция",
      dataIndex: "marketCap",
      key: "marketCap",
    },
  ];

  const dataSource =
    Object.keys(data).length > 0
      ? data.map((item, index) => {
          return {
            key: index,
            index: index + 1,
            name: item.CoinInfo.FullName,
            price: item.DISPLAY[activeCurrency]?.PRICE || "Грузим...",
            change1h:
              item.DISPLAY[activeCurrency]?.CHANGEPCTHOUR || "Грузим...",
            change24h:
              item.DISPLAY[activeCurrency]?.CHANGEPCT24HOUR || "Грузим...",
            volume24h:
              item.DISPLAY[activeCurrency]?.VOLUME24HOURTO || "Грузим...",
            marketCap: item.DISPLAY[activeCurrency]?.MKTCAP || "Грузим...",
          };
        })
      : [];

  return (
    <>
      {loading ? (
        <div className={"no-table"}>
          <Oval color="white" height={"50px"} secondaryColor={"black"} />
        </div>
      ) : (
        <div className="main-container__table" id="table">
          <h1>Таблица</h1>
          <div className="list">
            {currencies.map((currency: string) => (
              <p
                key={currency}
                className={activeCurrency === currency ? "active" : ""}
                onClick={() => handleSetActive(currency)}
              >
                {currency}
              </p>
            ))}
          </div>
          <Table
            columns={columns}
            dataSource={dataSource}
            style={{ background: "#fff" }}
          />
        </div>
      )}
    </>
  );
};

export default TableMain;

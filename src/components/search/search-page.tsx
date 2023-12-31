import React, { useState, useEffect } from "react";
import "../../scss/page-search/page-search.scss";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { Modal } from "antd";

interface PageSearchProps {
  data: any;
  onClose: () => void;
}

const PageSearch: React.FunctionComponent<PageSearchProps> = ({
  data,
  onClose,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);
  }, [data]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 350);
  };

  return data && !data.error ? (
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
          src={data.image.large || data.image.small || data.image.thumb}
          alt="coin-logo"
        />
      </p>
      {data.contract_address && <p>Контракт: {data.contract_address}</p>}
      <h2>Категории:</h2>
      {data.categories.map((item: any, index: number) => (
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
          {data.links.blockchain_site.map((item: any, index: number) =>
            item !== "" ? (
              <a href={item}>
                {index + 1}. {item}
              </a>
            ) : null
          )}
        </div>
      </div>
    </Modal>
  ) : data && data.error ? (
    <Modal
      title="Ошибка"
      centered
      open={visible}
      onOk={handleClose}
      onCancel={handleClose}
    >
      <p>
        Приносим извинения, случилась ошибка с выводом данных об этой монете, мы
        уже пытаемся это исправить!
      </p>
    </Modal>
  ) : null;
};

export default PageSearch;

"use client";

import { useState, useEffect } from "react";
import "swiper/swiper.min.css";
import styles from "./index.module.scss";

interface CoinProps {
    CoinInfo: {
        FullName: string;
        ImageUrl: string;
    }

}

const Slider: React.FunctionComponent = () => {
  const [coin, setCoin] = useState<CoinProps[]>([]);

  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=100&tsym=USD`,
    )
      .then((response) => response.json())
      .then((data) => {
        setCoin(data.Data);
      });
  }, []);

  console.log(coin)

  if (coin === undefined) return <div>Загрузка...</div>;

  return (
    <div className={styles.Slider}>
      <div className={styles.Title}>
        <h1>Список криптовалют на нашем сайте</h1>
      </div>
      <div className={styles.Body}>
        {coin.map((item) => (
          <div className={styles.Slide} key={item.CoinInfo.FullName}>
            <img
              src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`}
              alt={item.CoinInfo.FullName}
            />
            <p>{item.CoinInfo.FullName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

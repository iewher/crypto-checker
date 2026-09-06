"use client";

import Image from "next/image";
import { useCryptoSlider } from "@/hooks/useCryptocompare";
import styles from "./index.module.scss";

const Slider: React.FC = () => {
  const { data: coins, loading, error } = useCryptoSlider();

  if (loading) {
    return (
      <section className={styles.Slider}>
        <div className={styles.Title}>
          <h1 className={styles.TitleText}>Список криптовалют</h1>
        </div>
        <div className={styles.Loading}>
          <p>Загрузка криптовалют...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.Slider}>
        <div className={styles.Title}>
          <h1 className={styles.TitleText}>Список криптовалют</h1>
        </div>
        <div className={styles.Error}>
          <p>Ошибка загрузки: {error}</p>
        </div>
      </section>
    );
  }

  if (!coins || coins.length === 0) {
    return (
      <section className={styles.Slider}>
        <div className={styles.Title}>
          <h1 className={styles.TitleText}>Список криптовалют</h1>
        </div>
        <div className={styles.Empty}>
          <p>Нет данных для отображения</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.Slider}>
      <div className={styles.Title}>
        <h1 className={styles.TitleText}>Список криптовалют на нашем сайте</h1>
      </div>
      <div className={styles.Body}>
        {coins.map((item) => (
          <div className={styles.Slide} key={item.CoinInfo.FullName}>
            <Image
              src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`}
              alt={item.CoinInfo.FullName}
              width={80}
              height={80}
              loading="lazy"
            />
            <p>{item.CoinInfo.FullName}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;

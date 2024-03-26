import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Container}>
        <p>2023 - Crypto checker</p>
        <div className={styles.colums} id="contacts">
          <h3>Контакты</h3>
          <a href="https://t.me/iewher">Telegram</a>
          <a href="https://github.com/iewher/crypto-checker">Github</a>
        </div>
        <div className={styles.colums} id="contacts">
          <h3>Навигация</h3>
          <a href="#present">Презент</a>
          <a href="#table">Таблица</a>
          <a href="#plus">Преимущества</a>
          <a href="#plans">Планы</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

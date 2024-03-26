import Image from "next/image";
import logo from "../../public/logo-header.svg";
import Search from "../search";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Container}>
        <div className={styles.Logo}>
          <Image src={logo} alt="logo" />
        </div>
        <Search />
        <div className={styles.Actions}>
          <a href="#present">Презент</a>
          <a href="#table">Таблица</a>
          <a href="#plus">Преимущества</a>
          <a href="#plans">Планы</a>
        </div>
      </div>
    </div>
  );
};

export default Header;

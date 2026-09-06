"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-header.svg";
import Search from "../search";
import styles from "./index.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <Link href="/" className={styles.LogoLink}>
          <div className={styles.Logo}>
            <Image
              src={logo}
              alt="Crypto checker — главная"
              width={100}
              height={50}
              priority
            />
          </div>
        </Link>
        <Search />
        <nav className={styles.Actions} aria-label="Основная навигация">
          <Link href="/#present" scroll>
            Презент
          </Link>
          <Link href="/#table" scroll>
            Таблица
          </Link>
          <Link href="/#plus" scroll>
            Преимущества
          </Link>
          <Link href="/#plans" scroll>
            Планы
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

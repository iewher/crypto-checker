"use client";

import Link from "next/link";
import styles from "./index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <p className={styles.Copyright}>
          © 2023 — {new Date().getFullYear()} Crypto checker
        </p>
        <div className={styles.Columns} id="contacts">
          <h3 className={styles.ColumnTitle}>Контакты</h3>
          <a
            href="https://t.me/iewher"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a
            href="https://github.com/iewher/crypto-checker"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <nav aria-label="Навигация в футере">
          <h3 className={styles.ColumnTitle}>Навигация</h3>
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
    </footer>
  );
};

export default Footer;

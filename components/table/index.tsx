"use client";

import { useState, useMemo } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useCryptoTable, type CoinData } from "@/hooks/useCryptocompare";
import {
  formatPrice,
  formatNumber,
  formatChange,
  getChangeDirection,
} from "@/utils/format";
import styles from "./index.module.scss";

interface TableMainProps {
  initialCurrency?: string;
}

interface TableRow {
  key: string;
  index: number;
  name: string;
  price: string;
  priceNum: number;
  change1h: number;
  change1hNum: number;
  change24h: number;
  change24hNum: number;
  volume24h: string;
  volume24hNum: number;
  marketCap: string;
  marketCapNum: number;
}

const CURRENCIES = [
  { code: "RUB", label: "RUB" },
  { code: "USD", label: "USD" },
  { code: "EUR", label: "EUR" },
  { code: "JPY", label: "JPY" },
] as const;

const TableMain: React.FC<TableMainProps> = ({ initialCurrency = "RUB" }) => {
  const [activeCurrency, setActiveCurrency] = useState<string>(initialCurrency);
  const { data, loading, error, refetch } = useCryptoTable(activeCurrency);

  const columns: ColumnsType<TableRow> = useMemo(
    () => [
      {
        title: "#",
        dataIndex: "index",
        key: "index",
        width: 60,
        className: styles.IndexColumn,
      },
      {
        title: "Название",
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: "Цена",
        dataIndex: "price",
        key: "price",
        sorter: (a, b) => a.priceNum - b.priceNum,
      },
      {
        title: "1 ч",
        dataIndex: "change1h",
        key: "change1h",
        sorter: (a, b) => a.change1hNum - b.change1hNum,
        render: (change1h: number) => {
          const direction = getChangeDirection(change1h);
          return (
            <span>
              {formatChange(change1h)}%{" "}
              {direction === "up" ? (
                <BiSolidUpArrow color="green" className={styles.Icon} />
              ) : direction === "down" ? (
                <BiSolidDownArrow color="red" className={styles.Icon} />
              ) : null}
            </span>
          );
        },
      },
      {
        title: "24 ч",
        dataIndex: "change24h",
        key: "change24h",
        sorter: (a, b) => a.change24hNum - b.change24hNum,
        render: (change24h: number) => {
          const direction = getChangeDirection(change24h);
          return (
            <span>
              {formatChange(change24h)}%{" "}
              {direction === "up" ? (
                <BiSolidUpArrow color="green" className={styles.Icon} />
              ) : direction === "down" ? (
                <BiSolidDownArrow color="red" className={styles.Icon} />
              ) : null}
            </span>
          );
        },
      },
      {
        title: "Объём 24ч",
        dataIndex: "volume24h",
        key: "volume24h",
        sorter: (a, b) => a.volume24hNum - b.volume24hNum,
      },
      {
        title: "Капитализация",
        dataIndex: "marketCap",
        key: "marketCap",
        sorter: (a, b) => a.marketCapNum - b.marketCapNum,
      },
    ],
    [],
  );

  const dataSource: TableRow[] = useMemo(() => {
    if (!data) return [];

    return data.map((item: CoinData, index: number) => {
      const display = item.DISPLAY[activeCurrency];

      const price = display?.PRICE ?? 0;
      const change1h = display?.CHANGEPCTHOUR ?? 0;
      const change24h = display?.CHANGEPCT24HOUR ?? 0;
      const volume24h = display?.VOLUME24HOURTO ?? 0;
      const marketCap = display?.MKTCAP ?? 0;

      return {
        key: item.CoinInfo.CoinName || `coin-${index}`,
        index: index + 1,
        name: item.CoinInfo.FullName,
        price: formatPrice(price),
        priceNum: price,
        change1h,
        change1hNum: change1h,
        change24h,
        change24hNum: change24h,
        volume24h: formatNumber(volume24h),
        volume24hNum: volume24h,
        marketCap: formatNumber(marketCap),
        marketCapNum: marketCap,
      };
    });
  }, [data, activeCurrency]);

  return (
    <section className={styles.Table} id="table">
      <h1 className={styles.Title}>Таблица криптовалют</h1>

      <div className={styles.List}>
        {CURRENCIES.map((currency) => (
          <button
            key={currency.code}
            type="button"
            className={`${styles.CurrencyButton} ${
              activeCurrency === currency.code ? styles.Active : ""
            }`}
            onClick={() => setActiveCurrency(currency.code)}
          >
            {currency.label}
          </button>
        ))}
      </div>

      {error && (
        <div className={styles.Error}>
          <p>Ошибка загрузки данных: {error}</p>
          <button
            type="button"
            className={styles.RetryButton}
            onClick={refetch}
          >
            Попробовать снова
          </button>
        </div>
      )}

      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        pagination={{
          pageSize: 20,
          showSizeChanger: true,
          showTotal: (total) => `Всего ${total} криптовалют`,
          pageSizeOptions: ["10", "20", "50", "100"],
        }}
        size="middle"
      />
    </section>
  );
};

export default TableMain;

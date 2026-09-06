"use client";

import { useState, useCallback } from "react";
import { Input, Button, Tooltip } from "antd";
import { FiSearch, FiX } from "react-icons/fi";
import styles from "./index.module.scss";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [query, setQuery] = useState<string>("");

  const handleClear = useCallback(() => {
    setQuery("");
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (query.trim()) {
        // TODO: Добавить логику поиска криптовалют
        console.log("Поиск:", query);
      }
    },
    [query],
  );

  return (
    <form className={styles.Search} onSubmit={handleSubmit} role="search">
      <Input
        placeholder="Найди криптовалюту..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        prefix={<FiSearch className={styles.SearchIcon} />}
        suffix={
          query ? (
            <Tooltip title="Очистить">
              <button
                type="button"
                className={styles.ClearButton}
                onClick={handleClear}
                aria-label="Очистить поиск"
              >
                <FiX />
              </button>
            </Tooltip>
          ) : null
        }
        allowClear={false}
        size="large"
        className={styles.Input}
      />
      <Button
        type="primary"
        size="large"
        htmlType="submit"
        className={styles.Button}
      >
        <FiSearch />
      </Button>
    </form>
  );
};

export default Search;

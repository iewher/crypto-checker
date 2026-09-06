"use client";

import { useState, useEffect, useCallback } from "react";

// Типы данных CryptoCompare API
export interface CoinInfo {
  FullName: string;
  ImageUrl: string;
  CoinName: string;
}

export interface DisplayData {
  PRICE: number;
  CHANGEPCTHOUR: number;
  CHANGEPCT24HOUR: number;
  VOLUME24HOURTO: number;
  MKTCAP: number;
  HIGHDAY?: number;
  LOWDAY?: number;
  SUPPLY?: number;
  TOTALVOLUME24H?: number;
  TOTALVOLUME24HTO?: number;
  ALLTIMEHIGH?: number;
  CHANGEPCTYEAR?: number;
}

export interface CoinData {
  CoinInfo: CoinInfo;
  DISPLAY: Record<string, DisplayData>;
}

export interface SliderCoinData {
  CoinInfo: {
    FullName: string;
    ImageUrl: string;
  };
}

export interface UseCryptoCompareResult<T> {
  data: T;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const API_BASE = "https://min-api.cryptocompare.com/data";

/**
 * Хук для работы с CryptoCompare API
 */
export function useCryptoCompare<T>(
  url: string,
  options: { immediate?: boolean } = {},
): UseCryptoCompareResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(options.immediate !== false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Проверка на ошибки API
      if (result.Response === "Error") {
        throw new Error(result.Message || "Ошибка при получении данных");
      }

      setData(result);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Неизвестная ошибка";
      setError(message);
      console.error("useCryptoCompare error:", err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (options.immediate !== false) {
      fetchData();
    }
  }, [fetchData]);

  return { data: data as T, loading, error, refetch: fetchData };
}

/**
 * Хук для получения данных таблицы криптовалют
 */
export function useCryptoTable(
  currency: string = "USD",
): UseCryptoCompareResult<CoinData[]> {
  const url = `${API_BASE}/top/totaltoptiervolfull?limit=100&tsym=${currency}`;
  return useCryptoCompare<CoinData[]>(url, { immediate: true });
}

/**
 * Хук для получения данных слайдера криптовалют
 */
export function useCryptoSlider(): UseCryptoCompareResult<SliderCoinData[]> {
  const url = `${API_BASE}/top/totaltoptiervolfull?limit=100&tsym=USD`;
  return useCryptoCompare<SliderCoinData[]>(url, { immediate: true });
}

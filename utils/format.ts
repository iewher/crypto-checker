/**
 * Утилиты для форматирования данных
 */

/**
 * Форматирует число в строку с разделителями
 */
export function formatNumber(
  num: number | string | undefined | null,
  decimals: number = 2,
): string {
  if (num === undefined || num === null) {
    return "—";
  }

  const number = typeof num === "string" ? parseFloat(num) : num;

  if (isNaN(number)) {
    return "—";
  }

  // Для больших чисел (рыночная капитализация, объёмы)
  if (number >= 1_000_000_000_000) {
    return `${(number / 1_000_000_000_000).toFixed(decimals)}T`;
  }
  if (number >= 1_000_000_000) {
    return `${(number / 1_000_000_000).toFixed(decimals)}B`;
  }
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(decimals)}M`;
  }
  if (number >= 1_000) {
    return number.toLocaleString("ru-RU", {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimals,
    });
  }

  // Для малых чисел
  return number.toLocaleString("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
}

/**
 * Форматирует цену в строку с валютой
 */
export function formatPrice(
  price: number | string | undefined | null,
  currency: string = "USD",
): string {
  if (price === undefined || price === null) {
    return "—";
  }

  const number = typeof price === "string" ? parseFloat(price) : price;

  if (isNaN(number)) {
    return "—";
  }

  // Для очень маленьких цен (меньше 0.01)
  if (number < 0.01 && number > 0) {
    return number.toLocaleString("ru-RU", {
      minimumFractionDigits: 6,
      maximumFractionDigits: 8,
    });
  }

  return number.toLocaleString("ru-RU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Форматирует изменение в процентах
 */
export function formatChange(
  change: number | string | undefined | null,
): string {
  if (change === undefined || change === null) {
    return "—";
  }

  const number = typeof change === "string" ? parseFloat(change) : change;

  if (isNaN(number)) {
    return "—";
  }

  return number.toFixed(2);
}

/**
 * Определяет направление изменения (рост/падение)
 */
export function getChangeDirection(
  change: number | undefined | null,
): "up" | "down" | "neutral" {
  if (change === undefined || change === null) return "neutral";
  if (change > 0) return "up";
  if (change < 0) return "down";
  return "neutral";
}

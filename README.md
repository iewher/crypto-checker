![logo](public/logo.png)

# Crypto checker

Сайт для отслеживания курсов криптовалют в реальном времени. Поиск, сравнение и просмотр статистики цифровых активов.

## Стек технологий

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Ant Design** — UI-компоненты
- **Material UI** — Stepper
- **SCSS Modules** — стили

## API

- [CryptoCompare](https://min-api.cryptocompare.com/) — данные о криптовалютах

## Запуск проекта

1. Установите зависимости:

```bash
npm install
```

2. Запустите dev-сервер:

```bash
npm run dev
```

3. Откройте [http://localhost:3000](http://localhost:3000)

## Команды

| Команда         | Описание                     |
| --------------- | ---------------------------- |
| `npm run dev`   | Запуск dev-сервера           |
| `npm run build` | Сборка для продакшена        |
| `npm start`     | Запуск собранного приложения |
| `npm run lint`  | Проверка кода ESLint         |

## Структура проекта

```
├── app/              # Страницы и layout
├── components/       # UI-компоненты
├── hooks/            # Кастомные хуки (API)
├── styles/           # Общие стили
├── utils/            # Утилиты (форматирование)
└── public/           # Статические файлы
```

import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Crypto checker — отслеживание криптовалют",
    template: "%s | Crypto checker",
  },
  description:
    "Удобный сайт для отслеживания криптовалют, поиска и сравнения цифровых активов в реальном времени.",
  keywords: [
    "криптовалюта",
    "блокчейн",
    "трекинг",
    "курс криптовалют",
    "Bitcoin",
    "Ethereum",
  ],
  openGraph: {
    title: "Crypto checker",
    description:
      "Удобный сайт для отслеживания криптовалют в реальном времени.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

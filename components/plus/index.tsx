"use client";

import { Tabs, ConfigProvider } from "antd";
import type { TabsProps } from "antd";
import styles from "./index.module.scss";

interface PlusProps {}

interface TabItem {
  key: string;
  label: string;
  children: React.ReactNode;
}

const Plus: React.FC<PlusProps> = () => {
  const items: TabItem[] = [
    {
      key: "1",
      label: "Информативность",
      children:
        "Наш сайт обладает богатым контентом и предоставляет полезную информацию, которая интересна посетителям.",
    },
    {
      key: "2",
      label: "Дизайн",
      children:
        "Наш сайт имеет привлекательный дизайн, который привлекает внимание посетителей и делает визуальное впечатление.",
    },
    {
      key: "3",
      label: "Коммуникация",
      children:
        "На нашем сайте есть способы связи, они обеспечивают эффективное взаимодействие с посетителями, что способствует установлению контакта и обмену информацией.",
    },
    {
      key: "4",
      label: "Скорость",
      children:
        "Наш сайт быстро загружается, что способствует удовлетворению пользовательского опыта и уменьшению отказов.",
    },
    {
      key: "5",
      label: "Контент",
      children:
        "Наш сайт регулярно обновляется новым и интересным контентом, это может привлекать и удерживать посетителей, а также улучшать его позиции в поисковых системах.",
    },
  ];

  const tabProps: TabsProps = {
    defaultActiveKey: "1",
    items,
    size: "large",
    tabPosition: "left",
  };

  return (
    <section className={styles.Plus} id="plus">
      <h1 className={styles.Title}>Преимущества</h1>
      <div className={styles.Content}>
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                itemActiveColor: "#000",
              },
            },
          }}
        >
          <Tabs {...tabProps} />
        </ConfigProvider>
      </div>
    </section>
  );
};

export default Plus;

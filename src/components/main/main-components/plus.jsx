import React from "react";
import { Tabs, ConfigProvider } from "antd";
import { useThemeDetection } from "../../theme-utils/theme-utils";

export default function Plus() {
  const isLightTheme = useThemeDetection();
  const itemColor = isLightTheme ? "#000" : "#fff";

  const items = [
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
        "На нашем сайте есть способы связи, они обеспечивает эффективное взаимодействие с посетителями, что способствует установлению контакта и обмену информацией.",
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
        "Наш сайт регулярно обновляется новым иинтересным контентом, это может привлекать и удерживать посетителей, а также улучшать его позиции в поисковых системах.",
    },
  ];

  return (
    <div className="main-container__plus" id="plus">
      <div className="spans">
        <h1>Преимущества</h1>
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                itemColor: itemColor,
                itemActiveColor: 50,
              },
            },
          }}
        >
          <Tabs
            defaultActiveKey="1"
            items={items}
            size="large"
            tabPosition="left"
            style={{
              color: itemColor,
            }}
          />
        </ConfigProvider>
      </div>
    </div>
  );
}

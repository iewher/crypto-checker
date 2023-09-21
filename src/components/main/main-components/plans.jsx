import React from "react";
import { Tabs, ConfigProvider } from "antd";
import { useThemeDetection } from "../../theme-utils/theme-utils";

export default function Plans() {
  const isLightTheme = useThemeDetection();
  const itemColor = isLightTheme ? "#000" : "#fff";

  const items = [
    {
      key: "1",
      label: "Технологии",
      children:
        "Улучшение безопасности и масштабируемости блокчейна или криптовалюты.",
    },
    {
      key: "2",
      label: "Партнерства и сотрудничество",
      children:
        "Поиск партнеров для расширения использования вашей криптовалюты или блокчейна.",
    },
    {
      key: "3",
      label: "Продвижение",
      children:
        "Разработка маркетинговой стратегии для привлечения новых пользователей и инвесторов.",
    },
    {
      key: "4",
      label: "Образование и информирование",
      children:
        "Проведение образовательных мероприятий и вебинаров для сообщества и потенциальных пользователей.",
    },
    {
      key: "5",
      label: "Ответственность",
      children:
        "Реализация проектов или программ, связанных с социальной и экологической ответственностью, чтобы укрепить репутацию проекта.",
    },
  ];

  return (
    <div className="main-container__plans" id="plans">
      <div className="spans">
        <h1>Планы на будущее</h1>
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                itemColor: itemColor,
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

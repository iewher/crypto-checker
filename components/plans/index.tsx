"use client";

import { Tabs, ConfigProvider } from "antd";
import type { TabsProps } from "antd";
import styles from "./index.module.scss";

interface PlansProps {}

interface TabItem {
  key: string;
  label: string;
  children: React.ReactNode;
}

const Plans: React.FC<PlansProps> = () => {
  const items: TabItem[] = [
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

  const tabProps: TabsProps = {
    defaultActiveKey: "1",
    items,
    size: "large",
    tabPosition: "left",
  };

  return (
    <section className={styles.Plans} id="plans">
      <h1 className={styles.Title}>Планы на будущее</h1>
      <div className={styles.Content}>
        <ConfigProvider
          theme={{
            components: {
              Tabs: {},
            },
          }}
        >
          <Tabs {...tabProps} />
        </ConfigProvider>
      </div>
    </section>
  );
};

export default Plans;

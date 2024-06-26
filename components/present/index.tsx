import { Collapse } from "antd";
import Image from "next/image";
import logo from "../../public/logo-main.svg";
import styles from "./index.module.scss";

const Present = () => {
  const items = [
    {
      key: "1",
      label: "Что такое криптовалюта?",
      children: (
        <p>
          Криптовалюта - это цифровая или виртуальная форма денег, которая
          использует криптографию для обеспечения безопасности и контроля
          создания новых единиц. Криптовалюты не существуют в физической форме,
          они хранятся и передаются электронным путем. Важной особенностью
          криптовалют является то, что они обычно работают на технологии
          блокчейн, которая является децентрализованной и распределенной базой
          данных, содержащей записи обо всех транзакциях.
        </p>
      ),
    },
    {
      key: "2",
      label: "Что такое блокчейн?",
      children: (
        <p>
          Блокчейн (или блок цепочек) - это децентрализованная и распределенная
          база данных, используемая для записи транзакций и хранения информации
          в цепочке блоков. Каждый блок в цепочке содержит набор транзакций и
          ссылку на предыдущий блок, создавая таким образом цепочку блоков. Эта
          структура данных обеспечивает надежность, безопасность и прозрачность
          данных.
        </p>
      ),
    },
    {
      key: "3",
      label: "Что такое стейблкоин?",
      children: (
        <p>
          Стейблкоин (или стабильная монета) - это вид криптовалюты, который
          призван обеспечивать стабильность стоимости путем привязки к
          определенным активам или механизмам контроля цены. Основная идея
          стейблкоина заключается в том, чтобы уменьшить волатильность, которая
          характерна для большинства других криптовалют, таких как биткоин или
          эфириум.
        </p>
      ),
    },
  ];

  return (
    <div className={styles.Present} id="present">
      <Image src={logo} alt="logo" />
      <div className={styles.Text}>
        <Collapse items={items} defaultActiveKey={["1", "2", "3"]} />
      </div>
    </div>
  );
};

export default Present;

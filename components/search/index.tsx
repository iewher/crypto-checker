import Input from "antd/es/input/Input";
import styles from "./index.module.scss";

const Search = () => {
  return (
    <div className={styles.Search}>
      <Input placeholder="Найди криптовалюту" />
    </div>
  );
};

export default Search;

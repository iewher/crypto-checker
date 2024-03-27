import { Button, Input } from "antd";
import { FiSearch } from "react-icons/fi";
import styles from "./index.module.scss";

const Search = () => {
  return (
    <div className={styles.Search}>
      <Input placeholder="Найди криптовалюту" />
      <Button>
        <FiSearch />
      </Button>
    </div>
  );
};

export default Search;

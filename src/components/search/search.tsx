import React, { useEffect, useState } from "react";
import PageSearch from "./search-page";
import { Input } from "antd";

// interface SearchProps {}

interface Data {
  data: {
    id: string;
  };
}

const Search: React.FunctionComponent = () => {
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<Data[]>([]);
  const [check, setCheck] = useState<boolean>(false);

  const { Search } = Input;

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleSearch = () => {
    if (value) {
      fetch(`https://api.coingecko.com/api/v3/coins/${value}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  };

  useEffect(() => {
    if (data.length > 0 && value === data[0].data.id) {
      setCheck(true);
    }
  }, [value, data]);

  const handleClose = () => {
    setValue("");
    setData([]);
    setCheck(false);
  };

  return (
    <div className="header__search">
      <Search
        placeholder="Найди криптовалюту"
        value={value}
        onChange={handleInputChange}
        onSearch={handleSearch}
      />
      {check && <PageSearch data={data} onClose={handleClose} />}
    </div>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import PageSearch from "./search-page";
import { Input } from "antd";

export default function Search() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);

  const { Search } = Input;

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    if (value) {
      fetch(`https://api.coingecko.com/api/v3/coins/${value}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    }
  };

  useEffect(() => {
    if (value === data.id) {
      setCheck(true);
    }
  }, [value, data.id]);

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
}

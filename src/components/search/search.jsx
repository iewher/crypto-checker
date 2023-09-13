import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import PageSearch from "./search-page";

export default function Search() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);

  const handleInputChange = (event) => {
    setValue(event.target.value);
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
    if (value === data.id) {
      setCheck(true);
    }
  });

  const handleClose = () => {
    setValue("");
    setCheck(false);
  };

  return (
    <div className="header__search">
      <input
        placeholder="Найди криптовалюту"
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>
        <AiOutlineSearch />
      </button>
      {check && <PageSearch data={data} onClose={handleClose} />}
    </div>
  );
}

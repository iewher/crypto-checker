import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PageSearch from "../../search/search-page";

export default function SliderMain() {
  const [coin, setCoin] = useState([]);
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=100&tsym=USD`
    )
      .then((response) => response.json())
      .then((data) => {
        setCoin(data.Data);
      });
  }, [coin]);

  const goModal = (value) => {
    const valueLowerCase = value.toLowerCase();
    fetch(`https://api.coingecko.com/api/v3/coins/${valueLowerCase}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setCheck(true);
      });
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const handleClose = () => {
    setData([]);
    setCheck(false);
  };

  return (
    <div className="main-container__slider">
      <div className="main-container__slider-header">
        <h1>Список криптовалют на нашем сайте</h1>
      </div>
      <div className="main-container__slider-content">
        <Swiper spaceBetween={50} slidesPerView={6}>
          {coin.map((item) => (
            <SwiperSlide onClick={() => goModal(item.CoinInfo.FullName)}>
              <div className="slide">
                <img
                  src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`}
                  alt={item.CoinInfo.FullName}
                />
                <p>{item.CoinInfo.FullName}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {check && <PageSearch data={data} onClose={handleClose} />}
    </div>
  );
}

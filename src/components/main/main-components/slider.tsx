import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PageSearch from "../../search/search-page";

// interface SliderProps {}

interface Coin {
  FullName: string;
  ImageUrl: string;
}

const Slider: React.FunctionComponent = () => {
  const [coin, setCoin] = useState<Coin[]>([]);
  const [data, setData] = useState<any>([]);
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=100&tsym=USD`
    )
      .then((response) => response.json())
      .then((data) => {
        setCoin(data.Data);
      });
  }, [coin]);

  const goModal = (value: string) => {
    const valueLowerCase = value.toLowerCase();
    fetch(`https://api.coingecko.com/api/v3/coins/${valueLowerCase}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setCheck(true);
      });
  };
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
            <SwiperSlide onClick={() => goModal(item.FullName)}>
              <div className="slide">
                <img
                  src={`https://www.cryptocompare.com${item.ImageUrl}`}
                  alt={item.FullName}
                />
                <p>{item.FullName}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {check && <PageSearch data={data} onClose={handleClose} />}
    </div>
  );
};

export default Slider;

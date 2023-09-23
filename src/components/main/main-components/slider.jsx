import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SliderMain() {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    fetch(
      `https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=100&tsym=USD`
    )
      .then((response) => response.json())
      .then((data) => {
        setCoin(data.Data);
      });
  }, []);

  console.log(coin);

  return (
    <div className="main-container__slider">
      <div className="main-container__slider-header">
        <h1>Список криптовалют на нашем сайте</h1>
      </div>
      <div className="main-container__slider-content">
        <Swiper spaceBetween={50} slidesPerView={6}>
          {coin.map((item) => (
            <SwiperSlide>
              <div className="slide">
                <img
                  src={`https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`}
                  alt={item.CoinInfo.FullName}
                />
                <p>{item.CoinInfo.FullName}</p>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide></SwiperSlide>
          {/* <SwiperSlide>
            <div className="slide">В разработке</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">В разработке</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">В разработке</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">В разработке</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">В разработке</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">В разработке</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">В разработке</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">В разработке</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">В разработке</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">В разработке</div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

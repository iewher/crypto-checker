import React from "react";

//TODO: разбить на компоненты

export default function Plus() {
  return (
    <div className="main-container__plus" id="plus">
      <h1>Преимущества</h1>
      <div className="spans">
        <p>
          <span>Информативность:</span>&nbsp;наш сайт обладает богатым контентом
          и предоставляет полезную информацию, которая интересна посетителям.
        </p>
        <p>
          <span>Дизайн:</span>&nbsp;наш сайт имеет привлекательный дизайн,
          который привлекает внимание посетителей и делает визуальное
          впечатление.
        </p>
        <p>
          <span>Коммуникация:</span>&nbsp;на нашем сайте есть способы связи, они
          обеспечивает эффективное взаимодействие с посетителями, что
          способствует установлению контакта и обмену информацией.
        </p>
        <p>
          <span>Скорость:</span>&nbsp;наш сайт быстро загружается, что
          способствует удовлетворению пользовательского опыта и уменьшению
          отказов.
        </p>
        <p>
          <span>Контент:</span>&nbsp;наш сайт регулярно обновляется новым и
          интересным контентом, это может привлекать и удерживать посетителей, а
          также улучшать его позиции в поисковых системах.
        </p>
      </div>
    </div>
  );
}

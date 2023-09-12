import React from "react";
import Card from "./card";

export default function Clients() {
  return (
    <div className="main-container__clients" id="clients">
      <h1>Клиенты</h1>
      <div className="list">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

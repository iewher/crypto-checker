import React from "react";
import "../../scss/main/main.scss";
import PageLayout from "../page-layout/page-layout";
import Present from "./main-components/present";
import Table from "./main-components/table";
import ButtonUp from "../button-up/button-up";
import Plus from "./main-components/plus";
import Clients from "./main-components/clients";
import Contacts from "./main-components/contacts";

function Main() {
  return (
    <PageLayout>
      <div className="main">
        <div className="main-container">
          <Present />
          <Table />
          <Plus />
          <Clients />
          <Contacts />
        </div>
        <ButtonUp />
      </div>
    </PageLayout>
  );
}

export default Main;

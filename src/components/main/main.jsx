import React from "react";
import "../../scss/main/main.scss";
import PageLayout from "../page-layout/page-layout";
import Present from "./main-components/present";
import Table from "./main-components/table";
import ButtonUp from "../button-up/button-up";
import Plus from "./main-components/plus";
import Contacts from "./main-components/contacts";
import Plans from "./main-components/plans";

function Main() {
  return (
    <PageLayout>
      <div className="main">
        <div className="main-container">
          <Present />
          <Table />
          <Plus />
          <Plans />
          <Contacts />
        </div>
        <ButtonUp />
      </div>
    </PageLayout>
  );
}

export default Main;

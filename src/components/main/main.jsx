import React from "react";
import "../../scss/main/main.scss";
import PageLayout from "../page-layout/page-layout";
import Present from "./main-components/present";
import ButtonUp from "../button-up/button-up";
import Plus from "./main-components/plus";
import Plans from "./main-components/plans";
import TableMain from "./main-components/table";
import StepsMain from "./main-components/steps";
import SliderMain from "./main-components/slider";

function Main() {
  return (
    <PageLayout>
      <div className="main">
        <div className="main-container">
          <Present />
          <TableMain />
          <Plus />
          <StepsMain />
          <SliderMain />
          <Plans />
        </div>
        <ButtonUp />
      </div>
    </PageLayout>
  );
}

export default Main;

import React, { useState, useEffect } from "react";
import "../../scss/main/main.scss";
import PageLayout from "../page-layout/page-layout";
import Present from "./main-components/present";
import ButtonUp from "../button-up/button-up";
import Plus from "./main-components/plus";
import Plans from "./main-components/plans";
import TableMain from "./main-components/table";
import StepsMain from "./main-components/steps";
import SliderMain from "./main-components/slider";
import { Modal } from "antd";
import Cookies from "js-cookie";

// interface MainProps {}

const Main: React.FunctionComponent = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(true);

  useEffect(() => {
    const savedState: string | undefined = Cookies.get("modalState");

    if (savedState === "1") {
      setModalVisible(false);
    }
  }, []);

  const handleModalClose = () => {
    setModalVisible(false);

    Cookies.set("modalState", "1");
  };

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
      <Modal
        title={`Сайт использует файлы cookie`}
        centered
        visible={modalVisible}
        onOk={handleModalClose}
        onCancel={handleModalClose}
      />
    </PageLayout>
  );
};

export default Main;

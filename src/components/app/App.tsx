import React from "react";
import "../../scss/app.scss";
import "../../scss/dark-theme/dark.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../main/main";

// interface AppProps {}

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

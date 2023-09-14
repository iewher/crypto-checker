import React from "react";
import "../../scss/app.scss";
import '../../scss/dark-theme/dark.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../main/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

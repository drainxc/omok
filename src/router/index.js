import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../components/pages/mainPage";
import Board from "../components/pages/board";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/singleGame" element={<Board single={true} />} />
          <Route path="/localGame" element={<Board single={false} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

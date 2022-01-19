import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav/Nav";
import Main from "./Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

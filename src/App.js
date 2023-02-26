/* eslint-disable import/no-cycle */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Routers from "./routers";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Routers />} />
    </Routes>
  );
}

export default App;

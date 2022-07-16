import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavbarComp";
import TablesComp from "./components/TablesComp";
import Edit from "./components/Edit";

import "./App.css";
import RegisterComp from "./components/RegisterComp";
import Details from "./components/Details";
const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<TablesComp />} />
          <Route path="/register" element={<RegisterComp />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <div
        className="navbar-component"
        style={{ position: "fixed", width: "100%", zIndex: "1" }}
      >
        <Navbar />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

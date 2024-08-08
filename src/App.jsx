import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./components/common/Partners"

const App = () => {
  let [showSideBar, setShowSidebar] = React.useState(false);
  return (
    <BrowserRouter>
      <Header setShowSidebar={setShowSidebar} />
      <SideBar showSideBar={showSideBar} setShowSidebar={setShowSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Partners />
    </BrowserRouter>
  );
};

export default App;

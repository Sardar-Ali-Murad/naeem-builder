import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  let [showSideBar, setShowSidebar] = React.useState(false);
  return (
    <BrowserRouter>
      <Header setShowSidebar={setShowSidebar} />
      <SideBar showSideBar={showSideBar} setShowSidebar={setShowSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

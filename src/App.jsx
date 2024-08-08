import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/common/Sidebar";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./components/common/Partners";
import Contact from "./pages/Contact";
import Listing from "./pages/Listing";
import ViewProperty from "./pages/SingleProperty";

const App = () => {
  let [showSideBar, setShowSidebar] = React.useState(false);
  return (
    <BrowserRouter>
      <Header setShowSidebar={setShowSidebar} />
      <SideBar showSideBar={showSideBar} setShowSidebar={setShowSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/view-property" element={<ViewProperty />} />
      </Routes>
      <Partners />
    </BrowserRouter>
  );
};

export default App;

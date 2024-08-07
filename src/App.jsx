import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import SideBar from "./components/Sidebar";

const App = () => {
  let [showSideBar, setShowSidebar] = React.useState(false);
  return (
    <>
      <SideBar showSideBar={showSideBar} setShowSidebar={setShowSidebar} />
      <Header setShowSidebar={setShowSidebar} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Partners />
      <Footer />
    </>
  );
};

export default App;

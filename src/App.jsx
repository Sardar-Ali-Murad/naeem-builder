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

const App = () => {
  return (
    <>
      <Header />
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

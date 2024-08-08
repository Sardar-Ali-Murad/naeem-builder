import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Pricing from "../components/home/Pricing";
import Contact from "../components/home/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
    </>
  );
};

export default HomePage;

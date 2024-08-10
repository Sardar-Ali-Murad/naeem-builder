import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Pricing from "../components/home/Pricing";
import Contact from "../components/home/Contact";
import Offers from "../components/home/Offers";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Offers />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
    </>
  );
};

export default HomePage;

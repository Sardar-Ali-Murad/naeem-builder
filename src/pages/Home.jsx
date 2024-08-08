import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Partners />
    </>
  );
};

export default Home;

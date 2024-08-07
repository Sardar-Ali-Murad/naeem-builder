import React from "react";

const Header = ({ setShowSidebar }) => {
  return (
    <header className="header">
      <section className="flex">
        <a href="#" className="logo">
          Naeem<span>Builders</span>
        </a>

        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#projects">projects</a>
          <a href="#pricing">pricing</a>
          <a href="#contact">contact</a>
        </nav>

        <div className="icons">
          <div onClick={() => setShowSidebar(true)}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

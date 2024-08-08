import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setShowSidebar }) => {
  return (
    <header className="header">
      <section className="flex">
        <Link to="/" className="logo">
          Naeem<span>Builders</span>
        </Link>

        <nav className="navbar">
          <Link to="/">home</Link>
          <Link to="about">about</Link>
          <Link to="contact">contact</Link>
          <Link to="listing">listing</Link>
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

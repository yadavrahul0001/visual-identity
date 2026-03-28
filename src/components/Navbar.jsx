import React from "react";
import { useRef } from "react";

const Navbar = () => {
  const navContainerRef = useRef(null);
  const navbarRef = useRef(null);

  return (
    <>
      <div className="move">
        <h1>* Admission Open for the 2025-26 Academic Year *</h1>
      </div>
      <div className="navContainer" ref={navContainerRef}>
        <div className="navbar" ref={navbarRef}>
          <div className="logo">
            <img src="/images/logo.jpeg" alt="Logo" />
          </div>

          <div className="links">
            <a href="#about">HOME</a>
            <a href="#services">ABOUT US</a>
            <a href="#portfolio">COURSES</a>
            <a href="#test">TEST SERIES</a>
            <a href="#selection">OUR SELECTION</a>
            <a href="#blog">BLOG</a>
            <a href="#contact">CONTACT US</a>
          </div>
          <div className="sound">...</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

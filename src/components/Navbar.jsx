import React from "react";

const Navbar = () => {
  const handleNavToggle = () => {
    // Menu toggle logic here if needed
  };

  return (
    <>
      <div className="navbar">
        <div className="bg ">
          <div className="logo">
            <img src="/images/logo.jpeg" alt="Logo" />
          </div>
          <div className="links">
            <a href="#" className="bg-link">
            Home
          </a>
          <a href="#" className="bg-link">
            About
          </a>
          <a href="#" className="bg-link">
            Courses
          </a>
          <a href="#" className="bg-link">
            Test Series
          </a>
          <a href="#" className="bg-link">
            Our Selections
          </a>
          <a href="#" className="bg-link">
            Contact Us
          </a>
          <a href="#" className="bg-link">
            Blog
          </a>
          <a href="#" className="bg-link">
            Download App
          </a>
          </div>
          
        </div>
      </div>

      <div className="move">
        <h1>* Admission Open for the 2025-26 Academic Year *</h1>
      </div>
    </>
  );
};

export default Navbar;

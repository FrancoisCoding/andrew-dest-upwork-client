import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <img
        src="https://i.imgur.com/d4Qc139.png"
        alt="Visalite"
        className="navbar-logo"
      />
      <a href="#" className="blog-link">
        Blog
      </a>
    </div>
  );
};

export default Navbar;

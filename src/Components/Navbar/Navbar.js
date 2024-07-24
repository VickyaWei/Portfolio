import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="#services">Projects</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

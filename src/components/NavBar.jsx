import React from "react";
import "../css/styles.css";
import "../css/utilities.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Loruki</h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="features.html">Features</a>
            </li>
            <li>
              <a href="docs.html">Docs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

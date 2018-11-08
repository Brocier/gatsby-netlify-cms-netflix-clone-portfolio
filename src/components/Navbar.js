import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import favicon from "../../static/img/icons/favicon.ico";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img
              src={favicon}
              alt="JSchoenfeld Logo"
              style={{
                width: "100%",
                maxHeight: "100%"
              }}
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/pets">
          Pets
        </Link>
        <Link className="navbar-item" to="/resume">
          Resume
        </Link>
        <Link className="navbar-item" to="/based-on">
          Based On
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/Brocier/JSchoenfeld-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;

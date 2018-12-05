import React from "react";
import { Link } from "gatsby";
import github from "../../../static/img/github-icon-white.png";
import logo from "../../../static/img/js-netflix-red.png";

const Navbar = () => (
  <nav className="navbar navbar-dark is-transparent">
    <div className="d-flex align-items-center">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image m-0">
            <img
              src={logo}
              alt="JSchoenfeld Logo"
              style={{
                width: "44px",
                maxHeight: "44px"
              }}
            />
          </figure>
        </Link>
      </div>

      <div className="navbar-nav" style={{ flexDirection: "row" }}>
        <Link className="nav-link active px-2" to="/">
          Projects
        </Link>
        <Link className="nav-link px-2" to="/about">
          About
        </Link>
        <Link className="nav-link px-2" to="/pets">
          Pets
        </Link>
        <Link className="nav-link px-2" to="/resume">
          Resume
        </Link>
        <Link className="nav-link px-2" to="/based-on">
          Based On
        </Link>
      </div>
    </div>
    <a
      className="navbar-item"
      href="https://github.com/Brocier/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon">
        <img
          src={github}
          alt="Github"
          style={{ maxHeight: "44px", maxWidth: "44px" }}
        />
      </span>
    </a>
  </nav>
);

export default Navbar;

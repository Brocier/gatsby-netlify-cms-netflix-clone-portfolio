import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="footer-container">
    <nav className="navbar navbar-light bg-faded">
      <Link className="navbar-brand text-danger font-weight-bold" to="/resume">
        JSchoenfeld
      </Link>
      <p className="text-muted lead" href="#">
        &copy;2018. All Rights Reserved by JSchoenfeld.
      </p>
      <a
        className="navbar-brand text-muted"
        href="https://github.com/Brocier/JSchoenfeld-Portfolio"
      >
        github
      </a>
    </nav>
  </footer>
);

export default Footer;

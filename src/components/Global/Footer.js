import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="footer-container">
    <nav className="navbar navbar-light flex-nowrap bg-faded flex-md-row flex-sm-column ">
      <Link
        className="p-0 m-0 navbar-brand text-danger font-weight-bold"
        to="/resume"
      >
        JSchoenfeld
      </Link>
      <p className="p-0 m-0 text-muted lead" href="#">
        &copy;2018. All Rights Reserved by JSchoenfeld.
      </p>
      <Link
        className="p-0 m-0 navbar-brand text-muted"
        href="https://github.com/Brocier/JSchoenfeld-Portfolio"
      >
        github
      </Link>
    </nav>
  </footer>
);

export default Footer;

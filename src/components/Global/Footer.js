import React from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Footer = () => (
  <footer className="footer-container">
    <nav className="navbar navbar-light bg-faded">
      <Link className="navbar-brand text-danger font-weight-bold" to="/resume">
        JSchoenfeld
      </Link>
      <p className="text-muted lead" href="#">
        &copy;2018. All Rights Reserved by JSchoenfeld.
      </p>
      <OutboundLink
        className="navbar-brand text-muted"
        href="https://github.com/Brocier/JSchoenfeld-Portfolio"
      >
        github
      </OutboundLink>
    </nav>
  </footer>
);

export default Footer;

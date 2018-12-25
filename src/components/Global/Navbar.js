import React, { Component } from "react";
import { Link } from "gatsby";
import github from "../../../static/img/github-icon-white.png";
import myBrand from "../../../static/img/js-netflix-red.png";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar
        color="faded"
        dark
        expand="md"
        transparent="true"
        className=""
        style={{ flexDirection: "row" }}
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <figure className="image m-0">
              <img
                src={myBrand}
                alt="JSchoenfeld Logo"
                style={{
                  width: "44px",
                  maxHeight: "44px"
                }}
              />
            </figure>
          </Link>
        </div>

        <div className="d-flex flex-md-grow-1 flex-md-row-reverse justify-content-between">
          <OutboundLink
            className="nav-link navbar-item d-md-block d-none  "
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
          </OutboundLink>

          <Collapse isOpen={this.state.isOpen} navbar className="fadeInRight">
            <Nav navbar>
              <NavItem>
                <Link className="nav-link px-2" to="/">
                  Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link px-2" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link px-2" to="/pets">
                  Pets
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link px-2" to="/resume">
                  Resume
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link px-2" to="/based-on">
                  Based On
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarToggler onClick={this.toggle} />
        </div>
      </Navbar>
    );
  }
}

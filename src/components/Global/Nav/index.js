import React from "react";
import { NavLink } from "react-router-dom";

import SearchInput from "./SearchInput";
import netflixLogo from "../../../assets/img/Netflix-logo.png";

const Nav = () => (
  <>
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/netflix-clone" className="logo navItem">
            <img
              style={{
                width: 110,
                height: 30
              }}
              src={netflixLogo}
              alt="img"
            />
          </NavLink>
        </li>
      </ul>

      <ul>
        <SearchInput />
      </ul>
    </nav>
  </>
);

export default Nav;
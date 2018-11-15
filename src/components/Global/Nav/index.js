import React from "react";
import { Link } from "gatsby";

import SearchInput from "./SearchInput";
import netflixLogo from "../../../../static/img/Netflix-logo.png";

const Nav = () => (
  <>
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/netflixclone" className="logo navItem">
            <img
              style={{
                width: 110,
                height: 30
              }}
              src={netflixLogo}
              alt="img"
            />
          </Link>
        </li>
      </ul>

      <ul>
        <SearchInput />
      </ul>
    </nav>
  </>
);

export default Nav;

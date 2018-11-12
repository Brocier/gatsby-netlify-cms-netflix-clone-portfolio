import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.scss";
import favicon from "../../static/img/icons/favicon.ico";

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet
      title="Projects | Josh's Portfolio"
      link={[
        {
          rel: "shortcut icon",
          type: "image/png",
          href: `${favicon}`
        }
      ]}
    />
    <Navbar />
    <>{children}</>
  </>
);

export default TemplateWrapper;

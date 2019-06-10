import React from "react";
import Helmet from "react-helmet";

import Navbar from "./Navbar";
import Footer from "./Footer";
import favicon from "../../../static/img/js-netflix-red.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const TemplateWrapper = ({ children }) => (
  <div className="layout-container">
    <Helmet
      title="Josh's Portfolio"
      link={[
        {
          rel: "shortcut icon",
          type: "image/png",
          href: `${favicon}`
        }
      ]}
      lang="en"
    >
      <noscript>{`This site needs javascript to load. Thanks!`}</noscript>
    </Helmet>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default TemplateWrapper;

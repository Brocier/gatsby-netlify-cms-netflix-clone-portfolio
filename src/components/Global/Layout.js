import React from "react";
import Helmet from "react-helmet";

import Navbar from "./Navbar";
import Footer from "./Footer";
import favicon from "../../../static/img/icons/favicon.ico";

const TemplateWrapper = ({ children }) => (
  <div className="layout-container">
    <Helmet
      title="Projects | Josh's Portfolio"
      link={[
        {
          rel: "shortcut icon",
          type: "image/png",
          href: `${favicon}`
        }
      ]}
      lang="en"
      noscript="This site needs javascript to load. Thanks!"
    />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default TemplateWrapper;

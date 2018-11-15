import React from "react";
import Helmet from "react-helmet";

import { Slider } from "../../components/LandingPage/presentations";
import HomeList from "../../components/LandingPage/HomeList";
import { Nav, Footer } from "../../components/Global";
import "../../components/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import favicon from "../../../static/img/netflix-logo-32.png";

const LandingPage = () => (
  <div className="homepage-container">
    <Helmet
      title="Netflix-Clone | Josh's Portfolio"
      link={[
        {
          rel: "shortcut icon",
          type: "image/png",
          href: `${favicon}`
        }
      ]}
    />
    <Nav />
    <Slider />
    <HomeList />
    <Footer />
  </div>
);

export default LandingPage;

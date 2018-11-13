import React from "react";
import { Slider } from "../../components/LandingPage/presentations";
import HomeList from "../../components/LandingPage/HomeList";
import { Nav, Footer } from "../../components/Global";
import "../../components/index.scss";

const LandingPage = () => (
  <div className="homepage-container">
    <Nav />
    <Slider />
    <HomeList />
    <Footer />
  </div>
);

export default LandingPage;

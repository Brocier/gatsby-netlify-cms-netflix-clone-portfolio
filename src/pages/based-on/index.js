import React, { Component } from "react";
import Layout from "../../components/Global/Layout";
import Slider from "../../components/Slider";
import HomeList from "../../components/LandingPage/HomeList";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export default class BasedOnIndexPage extends Component {
  render() {
    return (
      <Layout>
        <Slider />
        <HomeList />
        <div className="container align-text-bottom">
          <h1>Based On:</h1>
          <OutboundLink
            className="display-3"
            href="https://github.com/yuchiu/netflix-clone"
          >
            Yuchiu's NetflixClone
          </OutboundLink>
          <br />
          &amp;
          <OutboundLink
            className="display-4"
            href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
          >
            The Gatsby + Netlify CMS Starter
          </OutboundLink>
        </div>
      </Layout>
    );
  }
}

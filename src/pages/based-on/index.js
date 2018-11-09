import React, { Component } from "react";
import Layout from "../../components/Layout";

class index extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <h1>Based On:</h1>
          <ul>
            <li>
              <a href="https://github.com/yuchiu/netflix-clone">
                Netflix Clone
              </a>
            </li>
            <li>
              <img
                src="https://github.com/yuchiu/Netflix-clone/blob/master/demo2.gif?raw=true"
                alt="pic"
                width="200"
              />
            </li>

            <li />
            <li>
              <a href="https://github.com/netlify-templates/gatsby-starter-netlify-cms">
                Gatsby Starter Netlify CMS
              </a>
            </li>
            <li>
              <img
                src="https://duaw26jehqd4r.cloudfront.net/items/430y431y2g1U3l0R1p3i/Image%202018-11-09%20at%203.48.40%20PM.png?v=e093e736"
                alt="pic"
                width="200"
              />
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default index;

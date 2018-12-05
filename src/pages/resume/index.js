import React from "react";
import Layout from "../../components/Global/Layout";
import resume from "../../../static/Joshua Schoenfeld Resume.pdf";

const Resume = () => (
  <Layout>
    <div className="container" id="resume">
      <object width="100%" height="1000px" data={resume}>
        Resume Object
      </object>
    </div>
  </Layout>
);

export default Resume;

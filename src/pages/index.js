import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Layout, Slider } from "../components";
import { HomeList } from "../components/LandingPage";
import {
  ProjectList,
  ListHeader
} from "../components/LandingPage/presentations";

import "bootstrap/dist/css/bootstrap.min.css";
import "../components/index.scss";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <Slider />

        <ListHeader header="My Projects" />
        <ProjectList projectList={posts} />

        <HomeList />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({ edges: PropTypes.array })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            thumbnail
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

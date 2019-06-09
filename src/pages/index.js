import React, { Component } from "react";
import Helmet from "react-helmet";

import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Global/Layout";
import ProjectCarousel from "../components/ProjectCarousel";
import {
  ProjectList,
  ListHeader
} from "../components/LandingPage/presentations";

export default class IndexPage extends Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { group }
      }
    } = this.props;

    return (
      <Layout>
        <Helmet title="Projects | Josh's Portfolio" />
        <ProjectCarousel />
        {group
          .sort(function(a, b) {
            return b.totalCount - a.totalCount;
          })
          .map(tag => (
            <div key={tag.fieldValue}>
              <ListHeader header={tag.fieldValue} />
              <ProjectList projectList={tag.edges} />
            </div>
          ))}
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
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
    ) {
      group(field: frontmatter___tags) {
        totalCount
        fieldValue
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
  }
`;

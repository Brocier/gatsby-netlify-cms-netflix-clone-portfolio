import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Global/Layout";
import Slider from "../components/Slider";
import HomeList from "../components/LandingPage/HomeList";
import {
  ProjectList,
  ListHeader
} from "../components/LandingPage/presentations";

export default class IndexPage extends React.Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { group }
      }
    } = this.props;

    return (
      <Layout>
        <Slider />
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

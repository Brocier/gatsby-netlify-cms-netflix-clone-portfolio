import React from "react";
import Proptypes from "prop-types";
import { findDOMNode } from "react-dom";
import $ from "jquery";
import ProjectListItem from "./ProjectListItem";

class ProjectList extends React.Component {
  state = {
    margin: 0
  };

  renderProjectList = projectList =>
    projectList.map(({ node: project }) => (
      <ProjectListItem key={project.id} project={project} />
    ));

  handleLeftClick = e => {
    e.preventDefault();
    if (this.state.margin < 350) {
      this.setState({
        margin: this.state.margin + 350
      });
      // eslint-disable-next-line
      const el = findDOMNode(this.refs.content);
      $(el).animate(
        {
          marginLeft: "+=350px"
        },
        "fast"
      );
    }
  };

  handleRightClick = e => {
    e.preventDefault();
    if (this.state.margin > -4200) {
      this.setState({
        margin: this.state.margin - 350
      });
      // eslint-disable-next-line
      const el = findDOMNode(this.refs.content);
      $(el).animate(
        {
          marginLeft: "-=350px"
        },
        "fast"
      );
    }
  };

  render() {
    const { projectList } = this.props;
    return (
      <div className="list-container">
        <span
          onClick={this.handleLeftClick}
          className="list-controls left-controls"
          role="button"
        />

        <div className="module-section clearfix">
          {/* eslint-disable-next-line react/no-string-refs */}
          <ul id="content" ref="content">
            <div className="listRow">{this.renderProjectList(projectList)}</div>
          </ul>
        </div>

        <span
          onClick={this.handleRightClick}
          className="list-controls right-controls"
          role="button"
        />
      </div>
    );
  }
}

ProjectList.propTypes = {
  projectList: Proptypes.array
};
export default ProjectList;
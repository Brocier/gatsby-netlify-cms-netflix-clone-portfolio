import React, { Component } from "react";
import Proptypes from "prop-types";
import { Link } from "gatsby";

export default class ProjectListItem extends Component {
  constructor(props) {
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderDesc = this.renderDesc.bind(this);
    this.renderPic = this.renderPic.bind(this);
  }

  renderTitle = title => {
    if (title.length < 20) {
      return <h5 className="search-tile-title">{title}</h5>;
    }
    if (title.length < 35) {
      return <h5 className="search-tile-title long-title">{title}</h5>;
    }
    return <h5 className="search-tile-title longer-title">{title}</h5>;
  };

  renderDesc = desc => {
    if (desc.length > 150) {
      // eslint-disable-next-line no-param-reassign
      desc = desc.substring(0, 135);
      return <p className="tile-desc">{desc} ... read more</p>;
    }
    return <p className="tile-desc">{desc}</p>;
  };

  renderPic = pictureLink => {
    if (pictureLink !== null) {
      return (
        <img
          className="tile-img"
          alt={pictureLink + " Thumbnail"}
          src={`${pictureLink}`}
        />
      );
    }
    return (
      <img
        alt="Placeholder Thumbnail"
        className="tile-img"
        src="https://via.placeholder.com/280x160"
      />
    );
  };

  render() {
    const { project } = this.props;
    return (
      <Link className="tile" to={`${project.fields.slug}`}>
        <div className="tile-img">
          {this.renderPic(project.frontmatter.thumbnail)}
        </div>
        <div className=" photo-overlay">
          <div className="tile-text-container">
            <div className="playbtn-container">
              <button className="playBtn ">▶</button>
            </div>
            {this.renderTitle(project.frontmatter.title)}
            {this.renderDesc(project.excerpt)}
          </div>
        </div>
      </Link>
    );
  }
}

ProjectListItem.propTypes = {
  project: Proptypes.object
};

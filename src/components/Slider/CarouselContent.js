import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./_Slider.scss";

library.add(faPlus);

const CarouselContent = ({ item }) => {
  return (
    <div className="text">
      <h3 className="title">{item.title}</h3>
      <div className="sub-title">
        <b> {item.subtitle}</b>
        <br />
        <p className="sub-title description"> {item.description}</p>
      </div>
      <p className="sub-title">
        Cast:
        <br />
      </p>
      <p className="castGenreList">{item.castList} </p>
      <p className="sub-title">
        Genres:
        <br />
      </p>
      <p className="castGenreList">{item.genreList}</p>
      <button type="button" className="addListBtn">
        <FontAwesomeIcon icon="plus" />
      </button>
      MY LIST
    </div>
  );
};

export default CarouselContent;

import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import "./_Slider.scss";

const items = [
  {
    src: "https://i.imgur.com/6A3M2xf.jpg",
    altText: "Stranger Things Picture",
    title: `Stranger Things`,
    description: `
    Phasellus a nulla vitae augue convallis efficitur.
    Nam gravida viverra velit venenatis elementum.
    Phasellus egestas volutpa`
  },
  {
    src: "https://i.imgur.com/Q3FK1Oh.jpg",
    altText: "Blade Runner 2047 Picture",
    title: "Blade Runner 2047",
    description: `
    Phasellus a nulla vitae augue convallis efficitur.
    Nam gravida viverra velit venenatis elementum.
    Phasellus egestas volutpa`
  },
  {
    src: "https://i.imgur.com/PvmmqW6.jpg",
    altText: "Gravity Picture",
    title: "Gravity",
    description: `
    Phasellus a nulla vitae augue convallis efficitur.
    Nam gravida viverra velit venenatis elementum.
    Phasellus egestas volutpa`
  }
];

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }
  onExited() {
    this.animating = false;
  }
  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render(props) {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption
            className="text"
            captionHeader={item.title}
            captionText={item.description}
          />
        </CarouselItem>
      );
    });

    return (
      <div className="slider">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

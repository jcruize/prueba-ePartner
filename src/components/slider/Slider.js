import React from "react";
import Carousel from "react-elastic-carousel";
import Slide from "./Slide";
import "./Slider.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Slider = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel breakPoints={breakPoints}>
        {Slide}
      </Carousel>
    </div>
  );
};

export default Slider;

import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import html from "./html.png";
import css from "./css.png";
import javascript from "./javascript.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const SlideShowContainer = styled.div`
//   height: 100%;
//   width: 100%;
// `;
const ActualSlides = styled.img`
  height: 62vh;
  width: 80%;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="slides-container">
        <ActualSlides className="images" src={html} />
        <ActualSlides className="images" src={css} />
        <ActualSlides className="images" src={javascript} />
      </Slider>
    );
  }
}

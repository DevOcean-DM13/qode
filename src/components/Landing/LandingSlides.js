import React, { Component } from "react";
import Slider from "react-slick";
import testing from "./testing.png";
import goodboi from "./grimreaper.jpg";
import styled from "styled-components";

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
        <ActualSlides className="images" src={testing} />
        <ActualSlides className="images" src={goodboi} />
        <h3>hihi</h3>
      </Slider>
    );
  }
}

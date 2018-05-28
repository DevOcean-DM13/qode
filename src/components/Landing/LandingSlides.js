import React, { Component } from "react";
import Slider from "react-slick";
// import "./Slide.css";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = styled.div``;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings} className="slides-container">
          <div>
            <img
              className="images"
              src="https://images.unsplash.com/photo-1426287658398-5a912ce1ed0a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d2ca73a2ef25eff85533a5efb4860f36&auto=format&fit=crop&w=1352&q=80"
            />
          </div>
          <div>
            <img
              className="images"
              src="https://images.unsplash.com/photo-1489440543286-a69330151c0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ee90b19b1ca7935b2e49e5b4f0b61c0b&auto=format&fit=crop&w=1350&q=80"
            />
          </div>
          <div>
            <h3>hihi</h3>
          </div>
          <div>
            <h3>hihi</h3>
          </div>
          <div>
            <h3>hihi</h3>
          </div>
          <div>
            <h3>hihi</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

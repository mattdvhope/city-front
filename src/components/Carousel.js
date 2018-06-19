import React from "react";
import Link from "gatsby-link";
import { Carousel } from 'react-bootstrap';
import Img from "gatsby-image";

import '../css/carousel.css'
import pic1 from '../img/1Home-Page-Pic.jpg'
import pic2 from '../img/2YouCanSpeakAd.jpg'
import pic3 from '../img/3FreeClass.jpg'
import pic4 from '../img/4AtYourOffice.jpg'

export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      // direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        // activeIndex={index}
        // direction={direction}
        onSelect={this.handleSelect}
        interval={7000}
      >
        <Carousel.Item>
          <Link to="/about">
            <Img
              alt="Home page picture"
              sizes={this.props.carouselImage1.sizes}
            />
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/products">
            <Img
              alt="Home page picture"
              sizes={this.props.carouselImage2.sizes}
            />
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/about">
            <Img
              alt="Home page picture"
              sizes={this.props.carouselImage3.sizes}
            />
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/products">
            <Img
              alt="Home page picture"
              sizes={this.props.carouselImage4.sizes}
            />
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}




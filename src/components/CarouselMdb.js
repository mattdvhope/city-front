import React, { Component } from 'react';
import Img from "gatsby-image";
import styles from "../css/team.module.css";

export default class CarouselMdb extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      window: undefined
    };
  }

  componentDidMount() {
    this.setState({ window: window });
    try {
      const mdbreact = require("mdbreact");
      this.setState({ mdbreact: mdbreact });
    } catch (e) {
      console.error(e);
    }
  }

  render(){
    if (this.state.window) {

      const { Container, Carousel, CarouselInner, CarouselItem, View } = this.state.mdbreact;

      return(
        <Container>
          <Carousel
            activeItem={1}
            length={4}
            showControls={true}
            showIndicators={false}
            className="z-depth-1">
            <CarouselInner>
              <CarouselItem itemId="1">
                <View>
                  <Img
                    alt="Vol picture 1"
                    className={styles.volunteerAvatars}
                    sizes={this.props.picture1}
                  />
                </View>
              </CarouselItem>
              <CarouselItem itemId="2">
                <View>
                  <Img
                    alt="Vol picture 1"
                    className={styles.volunteerAvatars}
                    sizes={this.props.picture2}
                  />
                </View>
              </CarouselItem>
              <CarouselItem itemId="3">
                <View>
                  <Img
                    alt="Vol picture 1"
                    className={styles.volunteerAvatars}
                    sizes={this.props.picture3}
                  />
                </View>
              </CarouselItem>
              <CarouselItem itemId="4">
                <View>
                  <Img
                    alt="Vol picture 1"
                    className={styles.volunteerAvatars}
                    sizes={this.props.picture4}
                  />
                </View>
              </CarouselItem>
            </CarouselInner>
          </Carousel>
        </Container>
      );
    } else {
      return <span />
    }
  }
}
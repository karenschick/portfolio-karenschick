import React from "react";
import { Carousel } from "react-bootstrap";
import lizardImg from "../../img/lizard.jpg";
import loonImg from "../../img/loon.jpg";
import deerImg from "../../img/deer.jpg";
function AboutCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={loonImg}
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            color: "black",
            textAlign: "left",
            padding: "0",
            marginLeft: "-100px",
          }}
        ></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={deerImg}
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            color: "black",
            textAlign: "left",
            padding: "0",
            marginLeft: "-100px",
          }}
        ></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={lizardImg}
          alt="First slide"
        />
        <Carousel.Caption
          style={{
            color: "black",
            textAlign: "left",
            padding: "0",
            marginLeft: "-100px",
          }}
        ></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutCarousel;

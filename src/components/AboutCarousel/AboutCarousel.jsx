import React from "react";
import { Carousel } from "react-bootstrap";
import lizardImg from "../../img/lizard.jpg";
import loonImg from "../../img/loon.jpg";
import deerImg from "../../img/deer.jpg";
import fogImg from "../../img/fog.jpg"
import flowerImg from "../../img/flower.jpg"

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
          alt="Second slide"
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
          alt="Third slide"
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
          src={fogImg}
          alt="Fourth slide"
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
          src={flowerImg}
          alt="Fifth slide"
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

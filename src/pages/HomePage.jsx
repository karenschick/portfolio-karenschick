import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
import fall2023Image from "../img/fall2023.jpg";
import "../app.css";

const HomePage = () => {
  return (
    <>
      <Container className="container">
        <div className="homePage">
          <Col className="homePageContent">
            <h1 className="title">
              <span>Hi!</span> <br />
              <span>I'm Karen,</span><br />
              <span>web developer.</span>
            </h1>
            <p className="homePageDescription">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Dolorum, quas. Amet soluta assumenda cum?
            </p>
          </Col>
        </div>
        <Col className="homePageImage">
          <Image src={fall2023Image} alt="HomePage Photo" />
        </Col>
      </Container>
    </>
  );
};
export default HomePage;

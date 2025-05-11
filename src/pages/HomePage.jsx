import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import { Technologies } from "../components";
import FadeInSection from "../utils/FadeInSection";
import "../app.css";


const HomePage = () => {
  // Animation variant for the container fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  // Slide-in animation for text content
  const contentVariants = {
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  // Slide-in animation for image content
  const imageVariants = {
    hidden: { x: "100vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <>
      {/* Animated container for homepage intro section */}
      <motion.div
        className="py-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Container className="home-container p-2">
          <Row className="align-items-center text-center text-md-start">
            <Col xs={12} md={6}>
              <Link to="/Portfolio">
                <motion.div
                  variants={contentVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h1 className="display-4 fw-bold">
                    Hi!
                    <br />
                    I'm Karen
                    <br />
                    Software Engineer
                  </h1>
                  <h3 className="lead">
                    JAVASCRIPT / HTML / CSS / MERN / PYTHON / C++
                  </h3>
                </motion.div>
              </Link>
            </Col>
            <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
              <Link to="/AboutMe">
                <motion.div
                  variants={imageVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    style={{ maxWidth: "550px" }}
                    src="/portfolio-karenschick/10.jpg"
                    alt="Karen"
                    fluid
                    rounded
                    className="profile-img"
                  />
                </motion.div>
              </Link>
            </Col>
          </Row>
        </Container>
      </motion.div>
      
      <div className="section-spacing">
        <FadeInSection>
          <AboutMe />
        </FadeInSection>
      </div>
      <div className="section-spacing">
        <FadeInSection>
          <Technologies />
        </FadeInSection>
      </div>
      
        <FadeInSection>
          <Portfolio />
        </FadeInSection>
      
      
    </>
  );
};

export default HomePage;

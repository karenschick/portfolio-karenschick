import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
import fall2023Image from "../img/fall2023.jpg";
import "../app.css";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import { Link } from "react-router-dom";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const contentVariants = {
    hidden: { x: "-100vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };

  const imageVariants = {
    hidden: { x: "100vw" },
    visible: { x: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <>
      <motion.div
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/Portfolio">
          <motion.div className="home-content" variants={contentVariants}>
            <h1 className="home-title">
              <span>Hi!</span> <br />
              <span>I'm Karen</span>
              <br />
              <span>Web developer</span>
            </h1>
            <h3 className="home-subtitle">JAVASCRIPT / HTML / CSS / MERN</h3>
          </motion.div>
        </Link>
        <Link to="/AboutMe">
          <motion.div className="home-img" variants={imageVariants}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <Image
                style={{ width: "400px" }}
                src={fall2023Image}
                alt="HomePage Photo"
              />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
      <AboutMe />
      <Portfolio />
    </>
  );
};

export default HomePage;

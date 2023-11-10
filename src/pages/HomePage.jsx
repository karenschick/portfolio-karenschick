import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
import fall2023Image from "../img/fall2023.jpg";
import "../app.css";
import { motion } from 'framer-motion';


const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const contentVariants = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 120 } },
  };

  const imageVariants = {
    hidden: { x: '100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 120 } },
  };

  return (
    <motion.div
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="homePage">
        <motion.div
          className="homePageContent"
          variants={contentVariants}
        >
          <h1 className="title">
            <span>Hi!</span> <br />
            <span>I'm Karen,</span>
            <br />
            <span>web developer.</span>
          </h1>
          <p className="homePageDescription">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </motion.div>
      </div>
      <motion.div className="homePageImage" variants={imageVariants}>
        <Image src={fall2023Image} alt="HomePage Photo" />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;


import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import lizardImg from "../img/lizard.jpg";
import { InstagramFollow } from "../components";
import { Link } from "react-router-dom";

const AboutMe = () => {
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
      <div className="about-page">
        <motion.div
          className="about-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="about-img">
            <motion.div variants={contentVariants}>
              <a
                href="https://www.instagram.com/picsbyschick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  <Image
                    style={{ width: "95%" }}
                    src={lizardImg}
                    alt="Lizard"
                  />
                </motion.div>
              </a>
            </motion.div>
          </div>
          <div className="about-content">
            <motion.div variants={imageVariants} className="about-font">
              <div style={{ width: "95%", fontSize: "smaller" }}>
                When I'm not furiously debugging code or crafting elegant web
                solutions, you'll likely find me out in the wild, hiking trails
                and photographing elusive wildlife. Or perhaps I'll be indoors,
                brushing strokes onto a canvas or meticulously organizing my
                space – because even code wizards need a bit of tidiness in
                their lives. Armed with a{" "}
                <Link to="/Portfolio">
                  Full Stack Web Development Certificate (MERN)
                </Link>{" "}
                and a knack for problem-solving, I thrive on the balance between
                creativity and logic. From navigating through HTML and CSS to
                orchestrating the symphony of Node.js and React, I revel in the
                artistry of coding. But don't let the digital world fool you;
                I'm just as adept at collaborating with teams and resolving
                conflicts as I am at debugging lines of code. With a passion for
                innovation and an eye for detail, I'm on a quest for new
                challenges in the ever-evolving realm of web development.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;

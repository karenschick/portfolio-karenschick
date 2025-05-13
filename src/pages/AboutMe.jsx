import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AboutCarousel from "../components/AboutCarousel/AboutCarousel";
import "../app.css";
import { useTheme } from "../providers/ThemeProvider";

const AboutMe = ({ openContactForm, isContactOpen }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
    <motion.div
      className="about-page motion-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Row className="align-items-center" style={{ overflowX: "hidden" }}>
          {/* Carousel Column */}
          <Col xs={12} sm={12} md={12} lg={6} className="mb-4 mb-md-0">
            <motion.div
              variants={contentVariants}
              className="about-carousel-wrapper"
            >
              <a
                href="https://www.instagram.com/picsbyschick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 50 }}
                  className="carousel-container"
                  style={{ overflow: "hidden" }}
                >
                  <AboutCarousel />
                </motion.div>
              </a>
            </motion.div>
          </Col>

          {/* Text Content Column */}
          <Col xs={12} sm={12} md={12} lg={6}>
            <motion.div variants={imageVariants}>
              <div className="about-text">
                <div>
                  I’m a Computer Science student at Southern New Hampshire
                  University and a full stack developer with a background in{" "}
                  technical support and administrative operations. I help teams
                  work smarter with both code and communication.
                </div>

                <div style={{ marginTop: "1rem" }}>
                  My recent training in theMERN stack taught me to build
                  responsive, scalable apps using React, Node.js, Express, and
                  MongoDB. I also use tools like Git, Postman, and Jest to write
                  and test clean, maintainable code.
                </div>

                <div style={{ marginTop: "1rem" }}>
                  I’m especially drawn to roles that blend development with{" "}
                  testing, analysis, or security. I love solving real problems
                  with code and collaborating to build better systems.
                </div>

                <div style={{ marginTop: "1rem" }}>
                  Outside of tech, I’m a nature photographer and lifelong
                  learner who enjoys organizing, exploring, and improving
                  everything I work on.
                </div>

                <div style={{ marginTop: "1rem" }}>
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    className="d-inline-block custom-link"
                  >
                    <Link to="/Portfolio">See my work</Link>{" "}
                  </motion.span>{" "}
                  or{" "}
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    className="d-inline-block custom-link"
                    onClick={openContactForm}
                    style={{ cursor: "pointer" }}
                  >
                    get in touch!
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default AboutMe;

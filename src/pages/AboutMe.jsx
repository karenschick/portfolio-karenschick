import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AboutCarousel from "../components/AboutCarousel/AboutCarousel";
import "../app.css";
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
    <motion.div
      className="about-page "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container className="px-3 py-4"
        style={{
          height: "80vh",
          alignContent: "center",
        }}
      >
        <Row className="align-items-center">
          {/* Carousel Column */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <motion.div variants={contentVariants}>
              <a
                href="https://www.instagram.com/picsbyschick"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 50 }}
                >
                  <AboutCarousel />
                </motion.div>
              </a>
            </motion.div>
          </Col>

          {/* Text Content Column */}
          <Col xs={12} md={6}>
            <motion.div variants={imageVariants}>
              <div className="about-text">
                <p>
                  I’m a Computer Science
                  student at Southern New Hampshire University and a full stack
                  web developer. I combine a strong technical foundation with
                  experience in <strong>technical support</strong> and{" "}
                  <strong>administrative operations</strong>, helping teams work
                  better together.
                </p>
                <p>
                  I recently trained in the <strong>MERN stack</strong>,
                  building responsive, scalable apps using React, Node.js,
                  Express, and MongoDB. I also work with tools like{" "}
                  <strong>Git</strong>, <strong>Postman</strong>, and{" "}
                  <strong>Jest</strong> for version control, API testing, and
                  ensuring quality code.
                </p>
                <p>
                  I'm especially interested in roles that blend development with{" "}
                  <strong>analysis, testing, or security</strong>. Whether I’m
                  writing clean code or collaborating with a team, I care about
                  solving problems that make a difference.
                </p>
                <p>
                  Outside of tech, I’m a <strong>nature photographer</strong>{" "}
                  and lifelong learner who enjoys building organized, efficient
                  systems. I'm currently looking for opportunities where I can
                  grow as a developer or analyst.
                </p>
                <p>
                  <Link to="/Portfolio">Check out my work</Link> or{" "}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="d-inline-block"
                    
                  >
                    <Link to="/ContactForm" className="custom-link">
                      let’s connect
                    </Link>
                  </motion.div>
                  !
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default AboutMe;

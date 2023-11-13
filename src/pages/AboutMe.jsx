import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import lizardImg from "../img/lizard.jpg";
import { InstagramFollow } from "../components";

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
      <div
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
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
                    style={{ width: "100%" }}
                    src={lizardImg}
                    alt="Lizard"
                  />
                </motion.div>
              </a>
            </motion.div>
          </div>
          <div className="about-content">
            <motion.div variants={imageVariants} className="about-font">
              <div style={{ width: "100%" }}>
                blah blah blah
                <br />
                edumacation and inspiration
                <br />
                when not banging my head against the wall coding you'll find me
                hiking, photographing wildlife, painting, or cleaning.
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;

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
      <div className="mt-5 " style={{ height: "100px" }}>
        <Container>
          <Row style={{ width: "100%" }}>
            <Col>
              <h1>About Me</h1>
            </Col>
            <Col>
              <InstagramFollow />
            </Col>
          </Row>
        </Container>
      </div>

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="about-img" variants={contentVariants}>
          <a 
           href="https://www.instagram.com/picsbyschick"
           target="_blank"
           rel="noopener noreferrer"
         >
          <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <Image style={{ width: "90%" }} src={lizardImg} />
          </motion.div>
          </a>
        </motion.div>

        <motion.div className="about-content" variants={imageVariants}>
          <Card style={{ width: "100%" }}>
            blah blah blah <br />
            when not banging my head against the wall coding you'll find me
            hiking, taking photos of wildlife, painting, or cleaning.
          </Card>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutMe;

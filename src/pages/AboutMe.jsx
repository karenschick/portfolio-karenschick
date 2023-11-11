import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import lizardImg from "../img/lizard.jpg";
import { InstagramFollow } from "../components";

const AboutMe = () => {
  return (
    <>
    <div className="mt-5 " style={{height:"100px"}}>
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
      <Container>
      <Row className="justify-content-between">
        <Col md={6}>
          <Image style={{ width: "100%" }} src={lizardImg} />
        </Col>
        <Col md={6}>
          <Card style={{ width: "100%" }}>
            blah blah blah <br />
            when not banging my head against the wall coding you'll find me
            hiking, taking photos of wildlife, painting, or cleaning.
          </Card>
          
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default AboutMe;

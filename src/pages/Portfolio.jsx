import React, { useState } from "react";
import { LinkedInFollow } from "../components";
import GitHubFollow from "../components/GitHubFollow/GitHubFollow";
import { Card, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      title: "Project One",
      description: "Project One description",
      img: "",
      link: "",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Project Two description",
      img: "",
      link: "",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Project Three description",
      img: "",
      link: "",
    },
  ]);

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  




  return (
    <>
      <div className="mt-5 mb-5" style={{height:"100px"}}>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col>
              <h1>Header</h1>
            </Col>
            <Col>
              <LinkedInFollow />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="justify-content-between">
          {portfolios.map((portfolio) => (
            <Col key={portfolio.id} md={4} className="mb-1">
              <motion.div
                className="portfolio-card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              >
                <Card style={{ width: "100%" }}>
                  <h3>{portfolio.title}</h3>
                  <p>{portfolio.description}</p>
                  <GitHubFollow />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};




export default Portfolio;

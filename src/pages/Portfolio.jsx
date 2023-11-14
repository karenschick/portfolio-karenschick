import React, { useState } from "react";
import { LinkedInFollow } from "../components";
import GitHubFollow from "../components/GitHubFollow/GitHubFollow";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "../app.css";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      title: "Project One",
      description: "Project One description",
      img: "src/img/projectone.png",
      link: "https://www.github.com/karenschick",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Project Two description",
      img: "src/img/projecttwo.png",
      link: "https://www.github.com/karenschick",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Project Three description",
      img: "src/img/projectthree.png",
      link: "https://www.github.com/karenschick",
    },
  ]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Container className="portfolio-container">
        <Row className="portfolio-row">
          {portfolios.map((portfolio) => (
            <Col key={portfolio.id} md={4} className="mb-1">
              <motion.div
                className="portfolio-card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  href={portfolio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card style={{ width: "100%", padding: "15px" }}>
                    <Image
                      style={{ width: "100%", height: "200px" }}
                      src={portfolio.img}
                    />
                    <div className="mt-4">
                      <h3>{portfolio.title}</h3>
                      <p>{portfolio.description}</p>
                    </div>
                  </Card>
                </a>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;

import React, { useState } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion"; // For animations
import "../app.css"; // Custom styles

const Portfolio = () => {
  // State to hold portfolio projects
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      title: "Vinyl Village",
      description: "A groovy place",
      img: "/portfolio-karenschick/logo1.jpg",
      link: "https://www.github.com/karenschick/vinyl-village/",
    },
    {
      id: 2,
      title: "picsbyschick",
      description: "Photographer website",
      img: "/portfolio-karenschick/picsbyschickblackstill.png",
      link: "https://www.github.com/karenschick/picsbyschick",
    },
    {
      id: 3,
      title: "Spot",
      description: "Capstone collaboration",
      img: "/portfolio-karenschick/dogs1.jpg",
      link: "https://www.github.com/karenschick/spotApp",
    },
  ]);
  // Animation variants for the motion card
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Initial hidden state
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }, // Smooth entrance
    },
  };

  return (
    <>
      <Container className="portfolio-container">
        <Row className="g-4">
          {portfolios.map((portfolio) => (
            <Col key={portfolio.id} xs={12} sm={6} md={4}>
              <motion.div
                className="portfolio-card-wrapper h-100"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                overflow="hidden"
              >
                <a
                  href={portfolio.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  <Card className="h-100 p-3 shadow-sm">
                    <Image
                      src={portfolio.img}
                      alt={portfolio.title}
                      fluid
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "200px",
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{portfolio.title}</Card.Title>
                      <Card.Text>{portfolio.description}</Card.Text>
                    </Card.Body>
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

import React, { useState } from "react";
import { LinkedInFollow } from "../components";
import GitHubFollow from "../components/GitHubFollow/GitHubFollow";
import { Card, Container, Row } from "react-bootstrap";

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

  return (
    <>
      <div>
        {portfolios.map((portfolio) => (
          <Card key={portfolio.id} className="portfolio-card">
            <h3>{portfolio.title}</h3>
            <p>{portfolio.description}</p>
          </Card>
        ))}
      </div>
      <div>
        <LinkedInFollow />
        <GitHubFollow />
      </div>
    </>
  );
};

export default Portfolio;

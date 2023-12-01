import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./Navigation.css";

function Navigation() {
  return (
    <>
      <Navbar
        expand="lg"
        bg="transparent"
        variant="light"
        className="home-navbar"
      >
        <Nav className="mx-auto mt-5">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/AboutMe">
            About Me
          </Nav.Link>
          <Nav.Link as={Link} to="/Portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link href="mailto:karen.schick6@gmail.com">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;

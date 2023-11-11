
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Nav className="me-auto">
      </Nav>
      <Nav>
      <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/AboutMe">
          About Me
        </Nav.Link>
        <Nav.Link as={Link} to="/Portfolio">
          Portfolio
        </Nav.Link>
        <a href="mailto:karen.schick6@gmail.com">Email!</a>
      </Nav>
    </Navbar>
  );
}

export default Navigation;

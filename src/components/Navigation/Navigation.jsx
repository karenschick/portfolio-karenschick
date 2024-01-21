import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Modal } from "react-bootstrap";
import ContactForm from "../Contact/ContactForm";
//import "./Navigation.css";

function Navigation() {
  const [modalShow, setModalShow] = useState(false);

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
          <Button variant="secondary" onClick={() => setModalShow(true)}>
            Contact
          </Button>
          {/* <Nav.Link href="mailto:karen.schick6@gmail.com">Contact</Nav.Link> */}
        </Nav>
      </Navbar>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="sm"
        centered
      >
       <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm onClose={() => setModalShow(false)} />
        </Modal.Body>

      </Modal>
    </>
  );
}

export default Navigation;

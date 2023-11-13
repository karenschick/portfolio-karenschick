import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import GitHubFollow from '../GitHubFollow/GitHubFollow';
import LinkedInFollow from '../LinkedInFollow/LinkedInFollow';
import InstagramFollow from '../InstagramFollow/InstagramFollow';
import Resume from '../Resume/Resume';

function Footer() {
  
  return (
    <>
      <Navbar expand="lg" bg="transparent" variant="light">
        <Nav className="navbar mx-auto mt-5">
          <Nav.Link>
            <GitHubFollow />
          </Nav.Link>
          <Nav.Link>
            <LinkedInFollow />
          </Nav.Link>
          <Nav.Link>
            <InstagramFollow />
          </Nav.Link>
          <Resume/>
        </Nav>

      </Navbar>
    </>
  );
}

export default Footer
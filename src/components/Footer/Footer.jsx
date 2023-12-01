import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import GitHubFollow from "../GitHubFollow/GitHubFollow";
import LinkedInFollow from "../LinkedInFollow/LinkedInFollow";
import InstagramFollow from "../InstagramFollow/InstagramFollow";
import Resume from "../Resume/Resume";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Navbar bg="transparent" variant="light">
        <Nav className=" mx-auto mt-5">
          <div>
            <GitHubFollow />
          </div>
          <div>
            <LinkedInFollow />
          </div>
          <div>
            <InstagramFollow />
          </div>
          <Resume />
        </Nav>
      </Navbar>
    </>
  );
}

export default Footer;

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
      <Navbar  bg="transparent" variant="light">
        <Nav className="navbar mx-auto mt-5">
          <div className="pr-5">
            <GitHubFollow />
          </div>
          <div className="pr-5">
          <LinkedInFollow />
          </div>
          <InstagramFollow className="mr-3" />
          <Resume />
        </Nav>
      </Navbar>
    </>
  );
}

export default Footer;

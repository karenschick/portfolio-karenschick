import React from "react";
import { Container } from "react-bootstrap";
import GitHubFollow from "../GitHubFollow/GitHubFollow";
import LinkedInFollow from "../LinkedInFollow/LinkedInFollow";
import InstagramFollow from "../InstagramFollow/InstagramFollow";
import { useTheme } from "../../providers/ThemeProvider";
import Resume from "../Resume/Resume";
import "./Footer.css";

function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className={`footer-wrapper ${isDark ? 'dark' : ''}`}>
      <Container className="d-flex justify-content-center align-items-center flex-wrap gap-4 py-4">
        <GitHubFollow />
        <LinkedInFollow />
        <InstagramFollow />
        {/* <Resume /> */}
      </Container>
    </footer>
  );
}

export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./LinkedInFollow.css";

function LinkedInFollow() {
  return (
    <div className="linkedin-container">
      <a
        href="https://www.linkedin.com/in/karenschick"
        className="linkedin social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}

export default LinkedInFollow;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./LinkedInFollow.css";

function LinkedInFollow() {
  return (
    <div className="linkedin-container follow-icon">
      <a
        href="https://www.linkedin.com/in/karenschick"
        className="follow-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2x"
          style={{ color: "inherit" }} // Color will be inherited from the theme
        />
      </a>
    </div>
  );
}

export default LinkedInFollow;

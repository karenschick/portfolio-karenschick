import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./InstagramFollow.css";

function InstagramFollow() {
  return (
    <div className="instagram-container">
      <a
        href="https://www.instagram.com/picsbyschick"
        className="instagram social"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default InstagramFollow;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./InstagramFollow.css";

function InstagramFollow() {
  return (
    <div class="instagram-container">
      <a
        href="https://www.instagram.com/picsbyschick"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

export default InstagramFollow;

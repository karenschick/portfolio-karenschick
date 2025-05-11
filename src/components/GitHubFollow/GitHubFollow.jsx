import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./GitHubFollow.css";

function GitHubFollow() {
  return (
    <div className="gitHub-container">
      <a
        href="https://www.github.com/karenschick"
        className="gitHub social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" /> 
      </a>
    </div>
  )
}

export default GitHubFollow
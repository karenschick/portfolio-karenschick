import React from "react";
import resume from "./KarenSchickResume.pdf";

function Resume() {
  return (
    <>
      <div>
        <a href={resume} target="_blank" rel="noreferrer">
          CV
        </a>
      </div>
    </>
  );
}

export default Resume;

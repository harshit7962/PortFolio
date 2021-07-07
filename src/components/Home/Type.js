import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Computer Science Student ",
          "Full Stack Web Developer ",
          "Machine Learning Enthusiast ",
          "Open Source Contributor ...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

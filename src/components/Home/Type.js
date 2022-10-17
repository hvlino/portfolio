import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Junior Front-End Developer",
          "Electromechanical Engineer",
        ],
        autoStart: true,
        loop: false,
        deleteSpeed: 0,
        delay: 0
      }}
    />
  );
}

export default Type;

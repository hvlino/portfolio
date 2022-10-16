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
        loop: true,
        deleteSpeed: 40,
        delay: 40
      }}
    />
  );
}

export default Type;

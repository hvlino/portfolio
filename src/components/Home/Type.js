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
        deleteSpeed: 30,
        delay: 50
      }}
    />
  );
}

export default Type;

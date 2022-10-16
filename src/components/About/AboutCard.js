import React from "react";
import Card from "react-bootstrap/Card";
import gamingImg  from "../../Assets/hobbies/gaming.png";
import runningImg from "../../Assets/hobbies/running.png";
import speakingImg from "../../Assets/hobbies/speaking.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I am <span className="purple">Henrique Lino </span>
            from <span className="purple"> Brazil </span> currently living in Portugal.
            <br /><br />I am a junior front-end developer focusing on React library and JavaScript projects.
            I'm also familiar with SQL, REST API and python.
            <br />
            <br />
            Besides coding, I also love:
          </p>
          <ul className="hobbies-container">
            <li className="hobbies-png-caption">
              <img src={speakingImg} className="hobby-png" alt="brand" />
              <div className="hobby-caption">Learning foreign languages</div>
            </li>
            <li className="hobbies-png-caption">
              <img src={runningImg} className="hobby-png" alt="brand" />
              <div className="hobby-caption">Running</div>
            </li>
            <li className="hobbies-png-caption">
              <img src={gamingImg} className="hobby-png" alt="brand" />
              <div className="hobby-caption">Gaming</div>
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

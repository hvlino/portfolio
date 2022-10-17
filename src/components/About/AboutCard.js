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
            Hi there! I am <span className="orange">Henrique Lino </span>
            from <span className="orange"> Brazil </span> currently living in Portugal.
            <br /><br />I am a junior front-end developer focusing on <span className="orange">React</span> library and  <span className="orange">JavaScript</span> projects.
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
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

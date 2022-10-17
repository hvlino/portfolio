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
            from <span className="orange"> Brazil </span> currently living in <span className="orange"> Portugal </span> .
            <br /><br />I am a junior front-end developer that have finished many React and JavaScript projects while applying <span className="orange"> Jira </span> and <span className="orange"> SCRUM agile methodologies</span>.
            <br /><br />After graduating in electromechanical engineering I found out what my passion truly was:
            working with <span className="orange"> technology and computation </span> . I want to become a full-stack developer always seeking knowledge and acquiring experience on my journey.
            <br />
            <br />
            Besides coding, those are my main hobbies:
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

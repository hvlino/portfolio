import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";
// import 2 from "../../Assets/Projects/emotion.png";
// import 3 from "../../Assets/Projects/codeEditor.png";
// import 4 from "../../Assets/Projects/chatify.png";
// import 5 from "../../Assets/Projects/suicide.png";
// import 6 from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="I am very proud of this project as I have developed the AI to actively try to win against the player at the hard difficulty. It is fully playable!"
              ghLink="https://github.com/hvlino/reactjs-tic-tac-toe"
              demoLink="https://hvlino.github.io/reactjs-tic-tac-toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              isBlog={false}
              title="2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              ghLink="https://github.com"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              isBlog={false}
              title="3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              ghLink="https://github.com/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              ghLink="https://github.com/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="5"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              ghLink="https://github.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="6"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
              ghLink="https://github.com/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

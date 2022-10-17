import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know who I am...
            </h1>
            <Aboutcard />
          </Col>

        </Row>
        <h1 className="project-heading">
          My professional <strong className="orange">skill set: </strong>
        </h1>
        <h6>
          Move your <strong className="orange">mouse cursor </strong>over the icons to show its names.
        </h6>

        <Techstack />

        <h1 className="project-heading">
          The <strong className="orange">tools</strong> I use:
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;

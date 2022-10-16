import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiNodejs,
  DiGit,
  DiScrum,
} from "react-icons/di";
import {
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiReact,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact title="React"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML5"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 title="CSS3"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript title="JavaScript"/>
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql title="MySQL"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython title="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="NodeJS"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum title="Scrum"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="GIT"/>
      </Col>
    </Row>
  );
}

export default Techstack;

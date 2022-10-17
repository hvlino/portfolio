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
  SiJest,
  SiBootstrap,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-test">
        <SiReact className="tech-icons" title="React"/>
      </Col>
      <Col xs={4} md={2} >
        <SiHtml5 className="tech-icons" title="HTML5"/>
      </Col>
      <Col xs={4} md={2} >
        <SiCss3 className="tech-icons" title="CSS3"/>
      </Col>
      <Col xs={4} md={2} >
        <SiJavascript className="tech-icons" title="JavaScript"/>
      </Col>
     <Col xs={4} md={2} >
        <SiTypescript className="tech-icons" title="TypeScript"/>
      </Col>
      <Col xs={4} md={2} >
        <SiMysql className="tech-icons" title="MySQL"/>
      </Col>
      <Col xs={4} md={2} >
        <SiPython className="tech-icons" title="Python"/>
      </Col>
      <Col xs={4} md={2} >
        <DiNodejs className="tech-icons" title="NodeJS"/>
      </Col>
      <Col xs={4} md={2} >
        <DiScrum className="tech-icons" title="Scrum"/>
      </Col>
      <Col xs={4} md={2} >
        <DiGit className="tech-icons" title="GIT"/>
      </Col>
      <Col xs={4} md={2} >
        <SiJest className="tech-icons" title="Jest"/>
      </Col>
      <Col xs={4} md={2} >
        <SiBootstrap className="tech-icons" title="Bootstrap"/>
      </Col>
    </Row>
  );
}

export default Techstack;

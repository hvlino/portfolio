import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPycharm,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux title="Linux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm title="pyCharm"/>
      </Col>
    </Row>
  );
}

export default Toolstack;

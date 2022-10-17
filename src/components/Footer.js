import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col md="4" className="footer-by">
          <p>Portfolio by Henrique Lino</p>
        </Col>
        <Col md="4" className="footer-copyright">
          <p> © 2022</p>
        </Col>
        <Col md="4" className="footer-icons">
              <a
                href="https://github.com/hvlino"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/hvlino/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.twitter.com/hvlino"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
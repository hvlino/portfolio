import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            <span className="orange">INTRODUCING </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming while in college and I have learnt
              a lot since I began this journey in 2020.
              <br />
              <br />I am focusing in front-end development and I have built many projects in
              <i>
                <b className="orange"> HTML, CSS, JavaScript and React. </b>
              </i>
              I also apply my passion for developing in back end
              with <i><b className="orange">Python</b></i> and its framework 
              <i>
                <b className="orange"> Django.
                </b>
              </i>
              &nbsp; using
              <i>
                <b className="orange"> MySQL </b>for database management.
              </i>
              <br />
              <br />
                Go to the <i><b className="orange"> About me </b></i> tab and the <i><b className="orange">My projects</b></i> tab in the upper right corner of this page to see more.
              </p>
            <i>
            </i>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="orange">CONTACT </span>ME</h1>
            <p>
              Feel free to <span className="orange">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hvlino"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hvlino/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/hvlino"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTwitter />
                </a>
              </li>
            </ul>
            <div>
            <AiOutlinePhone />
            <span> </span>
            <a href="tel:+351931853163">
              +351 931853163 <br/>
            </a>
            <AiOutlineMail /><span> </span>
              hvlino007@gmail.com
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

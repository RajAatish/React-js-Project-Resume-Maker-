import React from "react";
import { Col, Nav, Navbar, Row } from "react-bootstrap";
import "./Style.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsTextareaResize } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { MdTravelExplore } from "react-icons/md";

const Footer = (p) => {
  // console.log("footer" + p.UserName)

  return (
    <>
      <div>
        <Row className="bg-footer">
          {/* Column 1 */}
          <Col xs={1}></Col>
          <Col className="brand">
            <Row className="mt-3">
              <BsTextareaResize className="color1 logo-m" />
            </Row>
            <Row className="mt-2">
              <h1>Resume Maker</h1>
              <hr className="mt-2" />
              <hr />
              <h2>Hello {p.UserName}..... !</h2>
            </Row>
            
          </Col>
          {/* Column 2 */}
          <Col className="mt-5">
            <h2>Contact Us </h2>
            <Navbar>
              <Nav>
                <Col className="mt-4">
                  <Nav.Link as={Link} to="/About">
                    {" "}
                    <h3> About</h3>{" "}
                  </Nav.Link>
                </Col>
              </Nav>
            </Navbar>
            <hr />
            <Navbar>
              <Nav>
                <Col className="mt-4">
                  <Nav.Link as={Link} to="/Acount">
                    {" "}
                    <h3> Account</h3>
                  </Nav.Link>
                </Col>
              </Nav>
            </Navbar>
            <hr />
          </Col>
          {/* Column 3 */}
          <Col className="mt-5">
            {" "}
            <h2>Explore</h2>
            <Navbar>
              <Nav>
                <Row>
                  <Col className="mt-4">
                    <Nav.Link as={Link} to="/NewsApi">
                      <AiOutlineCoffee className="icon-size" />
                      <h3>Blog</h3>{" "}
                    </Nav.Link>{" "}
                  </Col>
                </Row>
              </Nav>
            </Navbar>
            <hr />
          </Col>

          {/* Social Media Icon */}

          <Row className="social-media mb-5 mt-5">
            <hr />
            <Col></Col>
            <Col>
              <a
                style={{ color: "#091353" }}
                href="https://www.facebook.com/raj.atish.338"
              >
                <FaFacebookSquare />
              </a>
            </Col>
            <Col>
              <a
                style={{ color: "#091353" }}
                href="https://www.instagram.com/raj_aatish_/"
              >
                <BsInstagram />
              </a>
            </Col>
            <Col>
              <a
                style={{ color: "#091353" }}
                href="https://twitter.com/raj_Aatish_"
              >
                <BsTwitter />
              </a>
            </Col>
            <Col>
              <a
                style={{ color: "#091353" }}
                href="https://www.linkedin.com/in/r%C3%A6j-%C3%A6%C3%A5t%C3%AEsh-8b54241b2/"
              >
                <BsLinkedin />
              </a>
            </Col>
            <Col>
              <a
                style={{ color: "#091353" }}
                href="https://github.com/RajAatish"
              >
                <BsGithub />
              </a>
            </Col>
            <Col>
              <a
                style={{ color: "#091353" }}
                href="mailto:max.katish332@gmail.com"
              >
                <SiGmail />
              </a>
            </Col>
            <Col></Col>
          </Row>
          <hr />
        </Row>
      </div>
    </>
  );
};
export default Footer;

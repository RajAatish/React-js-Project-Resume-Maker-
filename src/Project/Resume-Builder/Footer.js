import React, { useState } from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Style.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsTextareaResize } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { MdTravelExplore } from "react-icons/md";
import Resume from "../Image/Resume.png";
import { NavLink } from "react-router-dom";

const Footer = (p) => {
  const [privacy, setPrivacy] = useState(false);

  return (
    <>
      <Container
        style={{ backgroundColor: "#536162" }}
        className="pt-5 pb-3 "
        fluid
      >
        <Row>
          {/* First Column */}

          <Col lg={3} className="center">
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
               <NavLink as={Link} to="/home">
               <img
                  src={Resume}
                  alt="logo"
                  style={{ width: "80%", borderRadius: 30 }}
                />
               </NavLink>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>2022 © Resume Maker</Col>
            </Row>
          </Col>
          {/* Second Column */}
          <Col lg={3}>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col xs={2}></Col>
              <Col>
                <NavLink as={Link} className="footer-text" to="/home">
                  <h3>Home</h3>{" "}
                </NavLink>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs={2}></Col>
              <Col>
                <NavLink as={Link} className="footer-text" to="/blog">
                  <h3>Blog</h3>{" "}
                </NavLink>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs={2}></Col>
              <Col>
                <NavLink as={Link} className="footer-text" to="/imagegallery">
                  <h3>Image finder</h3>{" "}
                </NavLink>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs={2}></Col>
              <Col>
                <NavLink as={Link} className="footer-text" to="/contact">
                  <h3>Contact Us</h3>{" "}
                </NavLink>
              </Col>
            </Row>
          </Col>
          {/* Theird Column */}
          {/* Social Media */}
          <Col lg={3}>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col xs={2}></Col>
              <Col>
                <a
                  style={{ color: "#091353", textDecoration: "none" }}
                  href="https://www.facebook.com/raj.atish.338"
                >
                  <Row>
                    <Col>
                      <FaFacebookSquare style={{ fontSize: 50 }} />
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={2}></Col>
              <Col>
                <a
                  style={{ color: "#091353" }}
                  href="https://www.instagram.com/raj_aatish_/"
                >
                  <Row>
                    <Col className="mt-3">
                      <BsInstagram style={{ fontSize: 50, color: "darkred" }} />
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={2}></Col>
              <Col>
                <a
                  style={{ color: "#091353" }}
                  href="https://twitter.com/raj_Aatish_"
                >
                  <Row className="mt-3">
                    <Col>
                      <BsTwitter style={{ fontSize: 50, color: "#426cd5" }} />
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={2}></Col>
              <Col>
                <a
                  style={{ color: "#091353" }}
                  href="https://www.linkedin.com/in/r%C3%A6j-%C3%A6%C3%A5t%C3%AEsh-8b54241b2/"
                >
                  <Row className="mt-3">
                    <Col>
                      <BsLinkedin style={{ fontSize: 50, color: "225aa9" }} />
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={2}></Col>
              <Col>
                <a
                  style={{ color: "#091353" }}
                  href="https://github.com/RajAatish"
                >
                  <Row className="mt-3">
                    <Col>
                      <BsGithub style={{ fontSize: 50, color: "392626" }} />
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={2}></Col>
              <Col>
                <a
                  style={{ color: "#091353" }}
                  href="mailto:max.aatish6287@gmail.com"
                >
                  <Row className="mt-3">
                    <Col>
                      <SiGmail style={{ fontSize: 50, color: "darkgreen" }} />
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
          </Col>
          {/* Fourth Column */}
          <Col lg={3}>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col xs={2}></Col>
              {privacy ? (
                <Col>
                  <p></p>
                  <p>
                    Your data is perfectly safe with us. But you need to know
                    how your data is processed and what can you do with it as a
                    user.</p>
                    <p>We constantly improve CraftCv system, we do it to give our users the best Resume builder in the Internet. We want you to feel safe using our service</p>
                    <p> Some of the terms used below may turn out to be a bit
                    complicated, but we have done our best to present them to
                    you in a simple manner.{" "}
                  </p>
                  <p>
                    While registering on CraftCv, you agree to provide us with
                    certain pieces of information about you. Information like:
                    your name, surname, e-mail address, phone number, gender,
                    age, place of residence, date of birth, information on the
                    education, achieved degrees, courses attended, lectures,
                    certificates or licenses, information on the membership in
                    associations or organisations, language skills, information
                    on former professional experience or practice, hobbies,
                    picture, other data provided by you. If you decide to
                    purchase a paid bundle, we will receive info on the payment,
                    including your personal data (name, surname, place of
                    residence, and phone number), as well as detailed
                    information about the transaction itself.{" "}
                  </p>
                  <button onClick={() => {setPrivacy(false)}} className="cancel-btn">Cancel</button>
                </Col>
              ) : (
                <Col >
                  <button
                  className="privacy-text"
                    onClick={() => {
                      setPrivacy(true);
                    }}
                  >
                    Privacy & Policy
                  </button>
                </Col>
              )}
              <Col xs={1}></Col>
            </Row>
            <Row>
              <Col xs={2}></Col>
              <Col className="mt-4">
                <NavLink as={Link} className="footer-text" to="/test">
                  <h3>Testing</h3>{" "}
                </NavLink>
              </Col>
            </Row>
          </Col>
          <hr className="mt-5" />
        </Row>
      </Container>
    </>
  );
};
export default Footer;

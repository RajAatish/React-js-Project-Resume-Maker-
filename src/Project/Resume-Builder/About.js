import React from "react";
import { Row, Col } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import "./Style.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import {SiGmail} from "react-icons/si"
import Ritu from "../Image/Ritu.jpeg"
import Aatish from "../Image/Aatish.png"

const About = () => {
  return (
    <>
      <Row>
        <Navigation />
      </Row>
      <Row>
        <Col className="about-background mt-3 ">
          <Row className="pt-3">
          <Row><img style={{width:200 , borderRadius: 500}} alt="aatish" src={Aatish} /> </Row>
            <Row> Name - Aatish</Row>
            <Row>Contact Us:</Row>
            <Row>
              <Col>
                <FaFacebookSquare />
              </Col>
              <Col>
                <BsInstagram />
              </Col>
              <Col>
                <BsTwitter />
              </Col>
              <Col>
                <BsLinkedin />
              </Col>
              <Col>
                <BsGithub />
              </Col>
              <Col><SiGmail/></Col>
            </Row>
          </Row>
        </Col>
        <Col className="about-background-ritu mt-3">
            <Row className="pt-3">
              <Row><img style={{width:200 , borderRadius: 100}} alt="ritu" src={Ritu} /> </Row>
          <Row> Name - Ritu Kumari</Row>
          <Row>Contact Us:</Row>
          <Row>
            <Col>
              <FaFacebookSquare />
            </Col>
            <Col>
              <BsInstagram />
            </Col>
            <Col>
              <BsTwitter />
            </Col>
            <Col>
              <BsLinkedin />
            </Col>
            <Col>
              <BsGithub />
            </Col>
            <Col><SiGmail/></Col>
          </Row>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default About;

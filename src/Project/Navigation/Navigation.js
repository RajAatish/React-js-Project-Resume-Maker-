import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import {
  Navbar,
  Nav,
  Offcanvas,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
// import { Row,Col } from "react-bootstrap";
import { MdOutlineContactMail } from "react-icons/md";
import "../Resume-Builder/Style.css";
import { SiGooglenews, SiMinetest } from "react-icons/si";
import { MdOutlineImageSearch } from "react-icons/md";
import Resume from "../Image/Resume.png";
import { Col, Row, Alert, Container } from "react-bootstrap";
// import { Alert } from "bootstrap";
import { AiFillHome } from "react-icons/ai";
import MediaQuery from "react-responsive";
import { Button } from "bootstrap";

const Navigation = (p) => {
  const name = localStorage.getItem("name");
  const data = JSON.parse(name);
  return (
    <>
      {/* Desktop View */}
      <MediaQuery minWidth={1000}>
        <Container fluid>
          <Row
            style={{ backgroundColor: "#DFDFDE" }}
            className="pt-4 pb-4 mb-2"
          >
            <Col xs={3}>
              <NavLink as={Link} to="/home">
                {" "}
                <img
                  alt="app-logo"
                  src={Resume}
                  style={{ width: "70%", borderRadius: 15 }}
                />{" "}
              </NavLink>{" "}
            </Col>

            <Col xs={1}></Col>
            <Col style={{ fontSize: 30 }} className="navigation-item" xs={2}>
              {p.UserName}
            </Col>
            <Col xs={1}>
              <NavLink className="navigation-item" as={Link} to="/home">
                {" "}
                <AiFillHome className="icon-size" />{" "}
              </NavLink>
            </Col>
            <Col xs={1}>
              <NavLink className="navigation-item" as={Link} to="/blog">
                <SiGooglenews className="icon-size" />{" "}
              </NavLink>{" "}
            </Col>
            <Col xs={1}>
              <NavLink className="navigation-item" as={Link} to="/imagegallery">
                <MdOutlineImageSearch className="icon-size" />{" "}
              </NavLink>
            </Col>
            <Col xs={1}>
              <NavLink className="navigation-item" as={Link} to="/test">
                <SiMinetest className="icon-size" />
              </NavLink>
            </Col>
            <Col xs={1}>
              <NavLink className="navigation-item" to="/contact">
                <MdOutlineContactMail className="icon-size" />
              </NavLink>{" "}
            </Col>
            <Col xs={1}>
              <NavLink className="navigation-item" as={Link} to="/acount">
                <Row>
                  <Col>
                    <BsFillPersonFill className="icon-size" />
                  </Col>
                </Row>{" "}
                <Row>
                  <Col xs={8}>{p.UserName}</Col>
                </Row>{" "}
              </NavLink>
            </Col>
          </Row>
        </Container>
      </MediaQuery>

      {/* Phone View */}
      <MediaQuery maxWidth={1000}>
        <Container style={{ backgroundColor: "#DFDFDE" }} fluid>
          {/* Responsive Navbar */}
          
          <Navbar collapseOnSelect expand="lg">
            <Container style={{display: "inline-block"}}>
              <NavLink  as={Link} to="/home"><img src={Resume} style={{ width: "45%" , marginRight: "35%"}} /></NavLink>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{ textAlign: "right" , marginRight:"7%" }}>
                  <NavLink
                    className="navigation-item mt-3"
                    as={Link}
                    to="/home"
                  >
                    <span> Home </span>
                    <AiFillHome className="icon-size" />
                    
                  </NavLink>
                  <NavLink
                    className="navigation-item mt-2"
                    as={Link}
                    to="/blog"
                  >
                    <span> Blog </span>
                    <SiGooglenews className="icon-size" />
                    
                  </NavLink>
                  <NavLink
                    className="navigation-item mt-2"
                    as={Link}
                    to="/imagegallery"
                  >
                    <span> Image Finder </span>
                    <MdOutlineImageSearch className="icon-size" />
                    
                  </NavLink>
                  <NavLink
                    className="navigation-item mt-2"
                    as={Link}
                    to="/test"
                  >
                    <span> Testing </span>
                    <SiMinetest className="icon-size" />
                    
                  </NavLink>
                  <NavLink
                    className="navigation-item mt-2"
                    as={Link}
                    to="/contact"
                  >
                    <span> Contact Us </span>
                    <MdOutlineContactMail className="icon-size" />
                    
                  </NavLink>
                  <NavLink
                    className="navigation-item mt-2"
                    as={Link}
                    to="/acount"
                  >
                    <span>{data} </span>
                    <BsFillPersonFill className="icon-size" />
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </MediaQuery>
    </>
  );
};

export default Navigation;

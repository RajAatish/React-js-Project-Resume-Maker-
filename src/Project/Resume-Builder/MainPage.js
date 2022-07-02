import React, { useState } from "react";
import { Container, Row , Col} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import "./Style.css";
import Footer from "./Footer";
import Resume from "./Resume";
import Sinup from "./Sinup";
import MediaQuery from "react-responsive";
import {SiGooglenews} from "react-icons/si"
import {MdOutlineImageSearch} from "react-icons/md"
import {NavLink,Link} from "react-router-dom"
import {MdTravelExplore} from 'react-icons/md'
import Home from "./Home";

const MainPage = () => {
  const [count, setCount] = useState(false);
  const [userName, setUserName] = useState("");
  console.log("user name", userName);
  return (
    <>
      <div>
        {/* Ternary Operator */}
        {!count ? (
          <Sinup data={setUserName} p={setCount} />
        ) : (
          <>
            <Row>
              <Navigation UserName={userName} />
            </Row>
          {/* First Home */}
            <Home />           
            {/* Desktop view */}
            <MediaQuery minWidth={1000}>
            <Resume />
             
            </MediaQuery>
             {/* Mobile view */}
             <MediaQuery maxWidth={1000} >
              <h1 style={{color: "darkgray"}} className="center mt-4 mb-4">
                    Resume Maker software is not supported in phone viewport<br /> Plese open in laptop
                  </h1>
                  <Container className="pt-5 pb-5 mb-5" style={{backgroundColor:"#e0f0f0" , borderRadius:30}}>
                    <Row>
                      <Row className="center mb-4"><Col>With mobile viewport you can only explor these features</Col></Row>
                      <Col style={{textAlign:"center"}}><NavLink className="navigation-item " as={Link} to="/blog"><SiGooglenews className="icon-size" /><h3>Blog</h3> </NavLink> </Col>
                      <Col className="center"><NavLink className="navigation-item" as={Link} to="/imagegallery"><MdOutlineImageSearch className="icon-size" /><h3>Image Gallery</h3> </NavLink></Col>
                      <Col className="center"><NavLink className="navigation-item" as={Link} to="/About"> <MdTravelExplore className="icon-size" /> <h3> About</h3> </NavLink></Col>
                    </Row>
                  </Container>
              </MediaQuery>
            <Footer UserName={userName} />
          </>
        )}
      </div>
    </>
  );
};

export default MainPage;

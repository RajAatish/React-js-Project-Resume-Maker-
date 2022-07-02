import React from "react";
import { Container, Row , Col} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import "./Style.css";
import Footer from "./Footer";
import Resume from "./Resume";
import MediaQuery from "react-responsive";
import {SiGooglenews} from "react-icons/si"
import {MdOutlineImageSearch} from "react-icons/md"
import {NavLink,Link} from "react-router-dom"
import {MdOutlineContactMail} from 'react-icons/md'
import {SiMinetest} from "react-icons/si"
import Home from "./Home";
import Resume2 from "./Resume2";
import ResumeTemp from "../Resume-Templet/ResumeTemp";

const HomeIconClick = () => {
    return(
        <>
        <Row><Navigation/></Row>
         <Home />           
            {/* Desktop view */}
            <MediaQuery minWidth={1000}>
            <Resume />
             <Resume2 />
             <ResumeTemp />
            </MediaQuery>
             {/* Mobile view */}
             <MediaQuery maxWidth={1000} >
              <h1 style={{color: "darkgray"}} className="center mt-4 mb-4">
                    Resume Maker software is not supported in phone viewport<br /> Plese open in laptop.
                  </h1>
                  <Container className="pt-5 pb-5 mb-5" style={{backgroundColor:"#e0f0f0" , borderRadius:30}}>
                  <Row className="center mb-4"><Col>With mobile viewport you can only explore these features</Col></Row>
                    <Row>
                      
                      <Col xs={6} style={{textAlign:"center"}}><NavLink className="navigation-item " as={Link} to="/blog"><SiGooglenews className="icon-size" /><h3>Blog</h3> </NavLink> </Col>
                      <Col xs={6} className="center"><NavLink className="navigation-item" as={Link} to="/imagegallery"><MdOutlineImageSearch className="icon-size" /><h3>Image Gallery</h3> </NavLink></Col>
                      <Col xs={6} className="center mt-4"><NavLink className="navigation-item" as={Link} to="/test"> <SiMinetest className="icon-size" /> <h3> Test</h3> </NavLink></Col>
                      <Col xs={6} className="center mt-4"><NavLink className="navigation-item" as={Link} to="/contact"> <MdOutlineContactMail className="icon-size" /> <h3> Contact</h3> </NavLink></Col>
                    </Row>
                  </Container>
              </MediaQuery>
            <Footer/>
        </>
    )
}
export default HomeIconClick
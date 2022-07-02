import React from "react";
import { Row , Col} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
// import { Button } from "react-bootstrap";
import {NavLink,Link} from "react-router-dom"

const Acount = () => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
  const data = JSON.parse(name);
  const data2 = JSON.parse(email);
    return(
        <>
        <Row><Navigation/></Row>
        {/* <Row> <Api /> </Row> */}
        <Row className="mt-5">
        <Col xs={1} ></Col>
        <Col>
        <Row style={{color:"#8D8DAA"}}  ><h2>Name: {data}</h2> </Row>
        <Row style={{color:"#8D8DAA"}}><h4>Email: {data2}</h4> </Row>
        <Row> </Row>
        <Row className="mt-4 mb-5"> <button  className="btn btn-dark">
         <NavLink style={{textDecoration: "none" }} as={Link} to="/"><h1 style={{color:"#fff"}}>Logout</h1></NavLink>
        </button>
        
        </Row>
        </Col>
        <Col xs={1}></Col>
        </Row>
        </>
    )
}
export default Acount
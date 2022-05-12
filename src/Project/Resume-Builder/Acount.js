import React from "react";
import { Row , Col} from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"

const Acount = () => {
    return(
        <>
        <Row><Navigation/></Row>
        {/* <Row> <Api /> </Row> */}
        <Row>
        <Col></Col>
        <Col>
        <Row className="mt-4 mb-5"> <button  className="btn btn-dark">
         <Link as={Link} to="/"><h1 style={{color:"#fff"}}>Logout</h1></Link>
        </button>
        
        </Row>
        </Col>
        <Col></Col>
        </Row>
        </>
    )
}
export default Acount
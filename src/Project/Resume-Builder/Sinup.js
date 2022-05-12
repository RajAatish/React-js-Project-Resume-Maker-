import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Resume from "../Image/Resume.png"

const Sinup = (props) => {

    const [count2 , setCount2] = useState(false);
    const [name , setName] = useState("")
    const [password , setPassword] = useState("")
   
    console.log(name , password);
  return (
    <>
      <Row className="bg-sinup2">
        <Col></Col>
        {/* Login Page */}
        <Col className="bg-sinup mt-5 mb-5 pb-5">
          <Row className="red center mt-4">
            <img src={Resume} style={{width:300, marginLeft:110}} />
          </Row>
          <h1 className="mt-5 mb-3 ml-5 ">Login Page</h1>
          <input
            type="text"
            placeholder="Username"
            className="email mt-2 mb-3 ml-4 mr-4"
            onChange={(e) => {props.data(e.target.value)}}
            nameData={name}
          />
          <input
            type="password"
            placeholder="Password"
            className="email mb-3 ml-4 mr-4"
            onChange={(e) => {setPassword(e.target.value)}}
          />
         
          <Row>
            <Col className="subbmit-align">
              <Button
                onClick={() => {
                  props.p(true);
                }}
                variant="outline-secondary"
              >
                Subbmit
              </Button>
            </Col>

            {/* Forgoat Part */}
            {!count2 ? (
              <Col className="forgoat-align">
                <Button
                  onClick={() => {
                    setCount2(true);
                  }}
                  variant="outline-secondary"
                >
                  Forgoat
                </Button>
              </Col>
            ) : (
              <Row className="mt-5 cantainer">
                <h1>Forgoat Password</h1>
                <input
                  type="email"
                  placeholder="Enter Your Register Email"
                  className="email ml-5"
                />
                <Col>
                  <button
                    onClick={() => {
                      setCount2(false);
                    }}
                    className="btn btn-dark center mt-3"
                  >
                    Subbmit
                  </button>
                </Col>
              </Row>
            )}
          </Row>
        </Col>
        <Col></Col>
      </Row>
      <Row className="hide-acount">
      
      
      </Row>
    </>
  );
};
export default Sinup
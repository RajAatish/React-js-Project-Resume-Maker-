import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
// import Footer from "./Footer";

const GetApi = () => {
  const [watch , setWatch] = useState(0)
  let timeInterval = undefined
  const startWatch = () =>{
   timeInterval =  setInterval(() => {
    setWatch((x) => x+1)
  }, 1000);
  } 
  const stopWatch =() =>{
    clearInterval(timeInterval)
    clearTimeout(timeInterval)
    console.log('stop')
  }
  const resetWatch = () =>{
    setWatch(0)
  }
  return (
    <>
      <Row>
        <Navigation />
      </Row>
      {/* Watch Code */}
      <Container style={{ hight: 500 }} className="center">
        <Row>
          <Col>
            <Row className="center">Start Stop Watch</Row> <br />
            <Row className="mt-1 center">
              <h1>{watch}</h1>
            </Row>
            <Row className="mt-2">
              <h3>
                <button onClick={startWatch}>Start</button>
                <button onClick={stopWatch}>Stop</button>
                <button onClick={resetWatch}>Reset</button>
              </h3>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <Row className="mt-5">
        <Footer />
      </Row> */}
    </>
  );
};
export default GetApi;

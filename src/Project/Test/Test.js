import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Footer from "../Resume-Builder/Footer"


// import Footer from "./Footer";
let timeInterval = undefined

const GetApi = () => {
  const [watch , setWatch] = useState(0)
  const [start , setStart] = useState(false)
  // Start Fun
  const startWatch = () =>{
   timeInterval =  setInterval(() => {
    setWatch((x) => x+1)
  }, 1000);
  setStart(true)
  } 
  // Stop Fun
  const stopWatch =() =>{
    clearInterval(timeInterval)
    setStart(false)
  }
  // Reset Fun
  const resetWatch = () =>{
    setWatch(0)
    clearInterval(timeInterval)
    setStart(false)
  }
  // // Login Function

  // const [name , setName] = useState("")
  // const [email , setEmail] = useState("")
  // const [reminder , setReminder] = useState(false)
 
  // function FormValidation()  {
  //   if (name.length == 0 || email.length == 0 )
  //   {
  //     setReminder(true)

  //   }}
    
   
  
  return (
    <>
      <Row>
        <Navigation />
      </Row>

      {/* Watch Code */}
      <Container style={{ hight: 500 }} className="center">
        <Row className="mt-5">
          <Col>
            <Row className="center"><h3>Start Stop Watch</h3> </Row>
            <Row className="mt-2 center">
              <h1 className="watch-color">{watch}</h1>
            </Row>
            <Row className="mt-5 center" >
              <Col xs={4}><button className="start" disabled={start} onClick={startWatch}>Start</button></Col>
              <Col xs={4}><button className="stop" onClick={stopWatch}>Stop</button></Col>
              <Col xs={4}> <button className="reset" onClick={resetWatch}>Reset</button></Col>    
            </Row>
          </Col>
        </Row>
      </Container>
      <Row className="mt-5">
        <Footer />
      </Row>
    </>
  );
};
export default GetApi;

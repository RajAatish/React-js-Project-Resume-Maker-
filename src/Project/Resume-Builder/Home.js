import React, { useState } from "react";
import { Row, Col, Container, Carousel, Alert } from "react-bootstrap";
import Resume_Maker_Ui from "../Image/Resum-Maker-UI.png";
import Resume_Feture from "../Image/Resume-fetures.jpg";
import Resume_Talk from "../Image/Resume-Talk.jpg";
import Aatish from "../Image/Aatish.png";
import Ritu from "../Image/Ritu.jpeg";
import Ritesh_sir from "../Image/Ritesh_Sir.jpg";
import Guru_sir from "../Image/Guru-Sir.jpg";

const Home = () => {
  // const data = JSON.stringify(localStorage.getItem('name'))
  const saved = localStorage.getItem("name");
  const data = JSON.parse(saved);
  return (
    <>
    <Row>
        <Col style={{padding:30 , backgroundColor:"#8D8DAA" , color:"#BAABDA" , margin: 15 , borderRadius:20}}>
          <h1>Hello... <span style={{color: "#676FA3"}} >{data}</span> ,</h1><h2> Welcome to resume maker</h2>
        </Col>
      </Row>
      <Container
        style={{ backgroundColor: "#f3f3f3", borderRadius: 40 }}
        className="pt-5 mt-1"
        id="home"
      >
        {/* First Home Row */}
        <Row >
          {/* First Column */}
          <Col lg={5} style={{ marginLeft: 20 }} className="mt-5">
            <Row className="mt-2">
              <Col style={{ color: "darkgray" }}>Free Software</Col>
            </Row>
            <Row>
              <Col xs={10} className="the-best-way mt-4 mb-4">
                The best way to creat your resume!
              </Col>
            </Row>
            <Row>
              <Col xs={10} style={{ color: "darkgray" }}>
                If you want to creat resume then only put the details and you
                should not worry about the format.
              </Col>
            </Row>
            <Row>
              <Col xs={4} className="try-for-free mt-4 mb-4">
                Try For Free
              </Col>
            </Row>
          </Col>
          {/* Second Column */}
          <Col lg={6} style={{ padding: 20 }}>
            <img
              src={Resume_Maker_Ui}
              alt="resume-templet"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>

        {/* Second Home Row */}
        <Row className="mt-5 pb-5">
          {/* First Column */}
          <Col lg={6}>
            <Row>
              <Col className="center mt-5">
                {" "}
                <img
                  style={{ width: "70%", borderRadius: 30 }}
                  src={Resume_Feture}
                  alt="resume-feture"
                />{" "}
              </Col>
            </Row>
          </Col>
          {/* Second Column */}
          <Col lg={6} className="mt-4">
            <Row>
              <Col></Col>
              <Col xs={11} className="value-of-feature ">
                Value of this feature
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={1}></Col>
              <Col xs={10} className="circle-text">
                {" "}
                <span className="circle">1</span>Download Anytime
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={1}></Col>
              <Col xs={10} className="circle-text">
                {" "}
                <span className="circle">2</span>Create a Resume in Minutes
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={1}></Col>
              <Col xs={10} className="circle-text">
                {" "}
                <span className="circle">3</span>Save your Time
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Theird Home Row */}
        <Row className="mt-5 pb-5">
          {/* First Col */}
          <Col lg={6}>
            <Row className="mt-4">
              <Col xs={1}></Col>
              <Col xs={10} className="value-of-feature ">
                Talk About Your Resume
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={2}></Col>
              <Col xs={10} className="circle-text">
                {" "}
                <span className="circle-2">1</span>Step
              </Col>
            </Row>
            <Row>
              <Col xs={3}></Col>
              <Col xs={8} className="circle-text-2">
                Enter Your Personal Details
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={2}></Col>
              <Col xs={10} className="circle-text">
                {" "}
                <span className="circle-2">2</span>Step{" "}
              </Col>
            </Row>
            <Row>
              <Col xs={3}></Col>
              <Col xs={8} className="circle-text-2">
                Check Your Personal Detail Again
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={2}></Col>
              <Col xs={10} className="circle-text">
                {" "}
                <span className="circle-2">3</span>Step
              </Col>
            </Row>
            <Row>
              <Col xs={4}></Col>
              <Col xs={7} className="download-your-resume mt-4">
                Download Your Resume
              </Col>
            </Row>
          </Col>
          {/* Second Col  */}
          <Col lg={6} className="mt-5">
            <Row className="mt-5 center">
              <Col>
                <img
                  style={{ width: "80%", borderRadius: 30 }}
                  src={Resume_Talk}
                  alt="resume-talk"
                />{" "}
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Forth Home Row */}
        <Row className="mt-5 pb-5">
          {/* First Column */}
          <Col lg={6} className="mt-5 mb-5">
            <Row>
              {/* Carousel */}

              <Row className="mt-5 mb-5">
                {/* <Col xs={2}></Col> */}
                <Col>
                  <Row>
                    <Col className="center team-member">Testimonials</Col>
                  </Row>
                  <Row>
                    <Col style={{ paddingBottom: 10 }} className="center">
                      Trusted by collage faculty.
                    </Col>
                  </Row>

                  <Carousel>
                    {/* First Slide */}
                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block center"
                        src={Guru_sir}
                        alt="First slide"
                        style={{ borderRadius: 30, width: "100%" }}
                      />
                      <Row>
                        <Col xs={1}></Col>
                        <Col>
                          <h3 className="mt-4" style={{ color: "darkgray" }}>
                            Mr. Guru Dutta Verma
                          </h3>
                          <p className="mb-5" style={{ color: "darkgray" }}>
                            Professor of NIT Jaipur
                          </p>
                        </Col>
                      </Row>
                    </Carousel.Item>
                    {/* Second Slide */}
                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block center"
                        src={Ritesh_sir}
                        alt="First slide"
                        style={{ borderRadius: 30, width: "100%" }}
                      />

                      <Row>
                        <Col xs={1}></Col>
                        <Col>
                          <h3 className="mt-4" style={{ color: "darkgray" }}>
                            Mr. Ritesh Kumar Ram
                          </h3>
                          <p className="mb-5" style={{ color: "darkgray" }}>
                            Lecturer of G. P. Purnea
                          </p>
                        </Col>
                      </Row>
                    </Carousel.Item>
                  </Carousel>
                </Col>
                {/* <Col xs={2}></Col> */}
              </Row>
            </Row>
          </Col>
          {/* Second Column */}
          <Col lg={6} className="mt-5">
            {/* Crousel */}
            <Row className="mt-5 mb-5">
              {/* <Col xs={2}></Col> */}
              <Col>
                <Row>
                  <Col className="team-member center pb-4">Team Member</Col>
                </Row>
                <Carousel>
                  {/* First Slide */}
                  <Carousel.Item interval={3000}>
                    <img
                      className="d-block center"
                      src={Aatish}
                      alt="First slide"
                      style={{ borderRadius: 30, width: "100%" }}
                    />
                    <Row>
                      <Col xs={1}></Col>
                      <Col>
                        <h3 className="mt-4" style={{ color: "darkgray" }}>
                          Aatish
                        </h3>
                        <p className="mb-5" style={{ color: "darkgray" }}>
                          G. P. Purnea
                        </p>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  {/* Second Slide */}
                  <Carousel.Item interval={3000}>
                    <img
                      className="d-block center"
                      src={Ritu}
                      alt="First slide"
                      style={{ borderRadius: 30, width: "100%" }}
                    />

                    <Row>
                      <Col xs={1}></Col>
                      <Col>
                        <h3 className="mt-4 " style={{ color: "darkgray" }}>
                          Ritu Raj
                        </h3>
                        <p className="mb-5 " style={{ color: "darkgray" }}>
                          G. P. Purnea
                        </p>
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </Col>
              {/* <Col xs={2}></Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;

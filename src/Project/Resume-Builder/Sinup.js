import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Resume_Maker_Ui from "../Image/Resum-Maker-UI.png";
import Resume_Logo from "../Image/Resume.png";
import emailjs from "emailjs-com";
import { useHistory } from "react-router-dom";
const Sinup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reminder, setReminder] = useState(false);
  let history = useHistory();
 
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
// Email Js Function 
  function send(e) {
    e.preventDefault();
    if (name.length <= 2 || email.length <= 10) {
      setReminder(true);
    } else {
      emailjs
        .sendForm(
          "service_e24pwon",
          "template_mxpej9g",
          e.target,
          "h8n8oNMkUvVmJIbRE"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("message send");
      // localStorage.setItem("name" , JSON.stringify(name))

      // props.p(true)
      history.push("/home");
      props.data(name);
    }
  }
  return (
    <>
      {/* Register Code */}

      <Container>
        <Row>
          {/* First Column */}
          <Col lg={6} className="mb-5">
            <Container>
              <Row>
                <Col style={{color:"darkgray"}}>Free Software</Col>
              </Row>
              <Row className="mt-5 mb-5 center">
                
                <Col className="the-best-way ">
                Create Your Resume Like Pro..!
              </Col>
              </Row>
              <Row>
                <Col ls={12}>
                  {" "}
                  <img
                    style={{ width: "90%" }}
                    src={Resume_Maker_Ui}
                    alt="eg-pic"
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={11} style={{ color: "#3c5e86", fontSize: 17 }}>
                  Generate your resume with few and simple steps. You have need
                  only your personal information don't worry about the format.
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={11} style={{ color: "#EEC4C4", fontSize: 17 }}>
                  Note: Software doesn't work on mobile view port
                </Col>
              </Row>
            </Container>
          </Col>
          {/* Second Column */}
          <Col lg={6} className=" mb-5">
            <Container
              className="mt-4 pt-5 pb-5"
              style={{ backgroundColor: "#f3f3f3", borderRadius: 25 }}
            >
              <Row>
                <Col>
                  {/* Logo */}
                  <Row className="pb-5">
                    <Col className="center">
                      <img
                        src={Resume_Logo}
                        alt="logo"
                        style={{ width: "80%", borderRadius: 25 }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col style={{ fontSize: "200%", color: "#3c5e86" }}>
                      Sign Up
                    </Col>
                  </Row>
                  {/* Reminder */}
                  <Row className="mt-2">
                    <Col style={{ color: "darkred" }}>
                      {reminder
                        ? "Hey... You can not register with empty field"
                        : ""}
                    </Col>
                  </Row>
                  {/* Email Input */}
                  <form onSubmit={send}>
                    <Row className="pt-3">
                      <Col>
                        <input
                          name="name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          type="text"
                          className="email"
                          placeholder="Name"
                        />
                      </Col>
                    </Row>
                    {/* Password Input */}
                    <Row className="pt-2">
                      <Col>
                        <input
                          name="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          type="email"
                          className="email"
                          placeholder="Email"
                        />
                      </Col>
                    </Row>
                    {/* Register Btn */}
                    <Row className="pt-4 center">
                      <Col xs={7}>
                        <button
                          style={{ backgroundColor: "#8D8DAA" }}
                          className="form-control"
                        >
                          Sign Up
                        </button>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Sinup;

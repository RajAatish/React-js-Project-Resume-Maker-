import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "./Footer";
import { Row, Col, Container } from "react-bootstrap";
import Contact_us from "../Image/contact-us.png";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [reminder, setReminder] = useState(false);
  const [sendFeedBack, setSendFeedBack] = useState(true);


  //   Send Mail

  function send(e) {
    e.preventDefault();
    if (name.length <= 2 || email.length <= 10 || message.length <= 2) {
      setReminder(true);
    } else {
      emailjs
        .sendForm(
          "service_xf2gzwq",
          "template_lz0azze",
          e.target,
          "vU93K1hmCE87LtJpC"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log("message send");
      setName("");
      setEmail("");
      setMessage("");
      setSendFeedBack(true)
    }
  }
  return (
    <>
      <Row>
        <Navigation />
      </Row>
      <Container>
        <Row className="mt-5">
          {/* First Column */}
          <Col lg={6}>
            <img src={Contact_us} alt="contact-us" style={{ width: "100%" }} />
          </Col>
          {/* Second Column */}
          <Col lg={6}>
            <Row>
              <Col style={{ fontSize: "200%", color: "#3c5e86" }}>FeedBack</Col>
            </Row>
            <Row className="mt-3">
              <Col style={{ color: "darkgray" }}>
                Explore the future with us.
                <br /> Feel free to get in touch.
              </Col>
            </Row>
            {/* Form */}
            <form onSubmit={send}>
              {/* Name Input */}
              <Row className="mt-4">
                <Col>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </Col>
              </Row>
              {/* Email Input */}
              <Row className="mt-2">
                <Col>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    name="user_email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </Col>
              </Row>
              {/* Message Input */}
              <Row className="mt-2">
                <Col>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    name="message"
                    rows={5}
                    type="textarea"
                    className="form-control"
                    placeholder="Message"
                  />
                </Col>
              </Row>
              {/* Reminder */}
              <Row className="mt-2">
                <Col style={{ color: "darkred" }}>
                  {reminder
                    ? "Hey... You can not send feedback with any empty field"
                    : ""}
                </Col>
              </Row>
              {/* Send Operation */}

              {sendFeedBack ? (
                // send button
                <Row className="pt-4 center">
                  <Col xs={12}>
                    <button
                    style={{backgroundColor:"#8D8DAA"}}
                    className="form-control">Send</button>
                  </Col>
                </Row>
              ) : (
                // thanku btn
                <Row className="pt-4">
                  <Col xs={1}></Col>
                  <Col xs={10}>
                    <p className="send-feedback">
                      Thank you so much for your feedback about my performance
                      on this project. I really appreciate the details you
                      shared with me.  I appreciate your guidance and hope we
                      can find more feedback opportunities soon.
                    </p>
                  </Col>
                </Row>
              )}
            </form>
          </Col>
        </Row>
      </Container>
      <Row className="mt-5">
        <Footer />{" "}
      </Row>
    </>
  );
};
export default ContactUs;

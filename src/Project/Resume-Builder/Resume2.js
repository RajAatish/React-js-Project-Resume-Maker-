import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { ImMan } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { BiCodeAlt } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const Resume2 = () => {
  const [nameValue, setNameValue] = useState("");
  const [collageName, setCollageName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [dist, setDist] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [certification, setCertification] = useState("");
  const [software, setSoftware] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [gitRepo, setGitRepo] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [lng, setLng] = useState("");
  const [location, setLocation] = useState("");
  const [skill, setSkill] = useState("");
  // Name Value function
  // function NameValueFun(e) {
  //   setNameValue(e.target.value);
  // }
 function print()
 {
  const input = document.getElementById("data");
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "JPEG", -8, 8 );
    // pdf.output('dataurlnewwindow');
    pdf.save("resume.pdf");
  });
 }
  
  return (

    
    <>
      {/* Main Div */}
      <Container className="main-style mt-5 mb-5">
        {/* Start coDe */}
        <Row>
          {/* 1st Column */}
          <Col xs={6}>
            <Row className="mt-4 mb-4">
              {/* Personal Detail column  */}
              <Col>
                <Row>
                  <label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="small-input"
                      onChange={(e) => {
                        setNameValue(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="small-input"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="small-input"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <select
                      className="small-input"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <option>Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </label>
                  {/* <label>
                    <input
                      type="gender"
                      placeholder="Gender"
                      className="small-input"
                      onChange={(e) => {setGender(e.target.value)}}
                    />
                  </label> */}
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="number"
                      placeholder="Pin Code"
                      className="small-input"
                      onChange={(e) => {
                        setPinCode(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="Dist."
                      className="small-input"
                      onChange={(e) => {
                        setDist(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="State"
                      className="small-input"
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="Country"
                      className="small-input"
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="Location"
                      className="small-input"
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                    />
                  </label>
                </Row>
              </Col>
              {/* Professional Detail */}
              <Col>
                <Row>
                  <label>
                    <input
                      type="text"
                      placeholder="Langauge Known"
                      className="small-input"
                      onChange={(e) => {
                        setLng(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="Key Skills"
                      className="small-input"
                      onChange={(e) => {
                        setSkill(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="Software Skill e.g.- C,C++,Java"
                      className="small-input"
                      onChange={(e) => {
                        setSoftware(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="Work Experience"
                      className="small-input"
                      onChange={(e) => {
                        setWorkExperience(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="Collage Name"
                      className="small-input"
                      onChange={(a) => {
                        setCollageName(a.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="Certification Details"
                      className="small-input"
                      onChange={(e) => {
                        setCertification(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="Git-Hub Link"
                      className="small-input"
                      onChange={(e) => {
                        setGitRepo(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="mt-2">
                  <label>
                    <input
                      type="text"
                      placeholder="Project Link"
                      className="small-input"
                      onChange={(e) => {
                        setProjectLink(e.target.value);
                      }}
                    />
                  </label>
                </Row>
                <Row className="download-btn">
                <button className="btn btn-dark mt-3 " onClick={print}>Download Resume</button>
                </Row>
              </Col>
              
            </Row>
          </Col>
          {/* 2d Column*/}
          <Col id="data" xs={6} className="mt-3 mb-3 ml-3 mr-3">

            <Container className="resume-bg">
            <Row className="">
              {/* Left Column of Resume */}
              <Col xs={6}>
                <Container className="left-resume pt-5 pb-5">
                  <BsPersonCircle className="person-icon" />
                  <hr className="left-hr" />
                  <h5 className="mb-4"> Contact Me</h5>
                  <p style={{marginLeft:10}}>
                    
                    <MdPhone className="phone-icon" />
                    {phone}
                  </p>
                  <p style={{marginLeft:10}} className="email-size">
                    
                    <HiOutlineMail className="email-icon" />
                    {email}
                  </p>
                  <hr />
                  <p>
                    <ImMan className="man-icon" /> {gender}
                  </p>
                  <hr />
                  <p>
                    
                    <FaLanguage className="lng-icon" /> {lng}
                  </p>
                  <hr />
                  <p>
                    <ImLocation className="location-icon" />
                    {location}
                  </p>
                  <hr />
                  <p>
                    <BiCodeAlt className="skill-icon" />
                    {skill}
                  </p>
                  <hr />
                </Container>
              </Col>
                  {/* Right Column of Resume */}
              <Col xs={6} className=" right-resume p-5">
                   {/* Right Resume */}
                <h4>{nameValue} </h4>
                <p> {collageName}</p>
                <hr />
                <h6>Residential Address</h6>
                <p>
                  {country} , {state} , {dist} , {pinCode}
                </p>
                <hr />
                <h5>About Me</h5>
                <p>{workExperience}</p>
                <p>{certification}</p>
                <hr />
                <h5>Software Skill</h5>
                <p>{software}</p>
                <hr />
                <h5>Project Link</h5>
                <p>{projectLink}</p>
                <hr />
                <h5>Git-Repository</h5>
                <p>{gitRepo}</p>
                <hr />
              </Col>
            </Row>
            </Container>
            
          </Col>
          
        </Row>
      </Container>
      
    </>
  );
};
export default Resume2;

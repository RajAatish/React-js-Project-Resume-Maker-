import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { ImMan } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { BiCodeAlt } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa";
import Demo_Pic from "../Image/demo-pic.png"
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Resume2 = () => {
  const [nameValue, setNameValue] = useState("RAJ");
  const [collageName, setCollageName] = useState("G. P. Purnea");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("Bihar");
  const [dist, setDist] = useState("Purnea");
  const [pinCode, setPinCode] = useState("666666");
  const [workExperience, setWorkExperience] = useState("Fresher");
  const [certification, setCertification] = useState("Diploma in Computer Scirnce");
  const [software, setSoftware] = useState("C , Python");
  const [projectLink, setProjectLink] = useState("https://resumemaker-aatish.netlify.app/#/");
  const [gitRepo, setGitRepo] = useState("https://github.com/RajAatish?tab=repositories");
  const [phone, setPhone] = useState("9999999999");
  const [email, setEmail] = useState("raj@gmail.com");
  const [gender, setGender] = useState("Male");
  const [lng, setLng] = useState("English");
  const [location, setLocation] = useState("Purnia");
  const [skill, setSkill] = useState("React Js");
  const [img, setImg] = useState(Demo_Pic);
  // Name Value function
  // function NameValueFun(e) {
  //   setNameValue(e.target.value);
  // }
  function print() {
    const input = document.getElementById("resume-data-2");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", -8, -8);
      // pdf.output('dataurlnewwindow');
      pdf.save(nameValue+"-resume.pdf");
    });
  }

  return (
    <>
      {/* Main Div */}
      <Container style={{borderRadius: 20}} className="resume-temp-2-background mt-5 mb-5">
        {/* Start coDe */}
        <Row>
          {/* 1st Column */}
          <Col xs={6}>
            <Row className="mt-4 mb-4">
              {/* Personal Detail column  */}
              <Col>
              {/* Image Input */}
              <Row className="mb-3">
                <label>Upload Resume Image</label>
                  <input
                    accept="image/*"
                    placeholder="Upload Your Image"
                    className="profile-pic mt-2"
                    type="file"
                    id="select-image"
                    onChange={(e) => {setImg(URL.createObjectURL(e.target.files[0]))}}
                  />
                </Row>
                {/* Full Name Inupt */}
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
              <Col className="mt-4">
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
                  <button className="btn btn-dark mt-3 " onClick={print}>
                    Download Resume
                  </button>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* 2d Column*/}
          <Col id="resume-data-2" xs={6} className="mt-3 mb-3 pt-3 p-3">
            <Container fluid className="resume-bg">
              <Row className="">
                {/* Left Column of Resume */}
                <Col xs={6}>
                  <Container className="left-resume-two pt-5 pb-5">
                    {/* <BsPersonCircle className="person-icon" /> */}
                    {/* Image Render */}
                      <Row> <Col className="center"><img src={img} alt="image" style={{ width:100 , borderRadius:100 }} /></Col></Row>
                    
                    <hr className="left-hr" />
                    <h5 className="mb-4"> Contact Me</h5>
                    <p style={{ marginLeft: 10 }}>
                      <MdPhone className="phone-icon" />
                      {phone}
                    </p>
                    <p style={{ marginLeft: 10 }} className="email-size">
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
                  <h6>Collage Name</h6>
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
                  {/* <h5>Git-Repository</h5> */}
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

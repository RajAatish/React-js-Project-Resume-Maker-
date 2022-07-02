import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { MdPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { ImMan } from "react-icons/im";
import { ImLocation } from "react-icons/im";
import { BiCodeAlt } from "react-icons/bi";
import { FaLanguage } from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Demo_Pic from "../Image/Aatish2.jpg"

const ResumeTemp = () => {
  const [name, setName] = useState("Aatish");
  const [collageName, setCollageName] = useState("G.P.Purnea");
  const [workExperience, setWorkExperience] = useState("Fresher");
  const [certification, setCertification] = useState("Diploma in Computer Science");
  const [software, setSoftware] = useState("HTML , CSS , Javascript");
  const [projectLink, setProjectLink] = useState("https://resumemaker-aatish.netlify.app/#/");
  const [projectTitle, setProjectTitle] = useState("Resume Maker");
  const [gitRepo, setGitRepo] = useState("github.com");
  const [linkedIn , setLinkedIn] = useState("linkedin.com")
  const [phone, setPhone] = useState("1234567890");
  const [email, setEmail] = useState("aatish@gmail.com");
  // const [lng, setLng] = useState("");
  const [location, setLocation] = useState("Purnea , Bihar");
  const [skill, setSkill] = useState("React Js");
  const [img, setImg] = useState(Demo_Pic);
  const [branch , setBranch] = useState("Computer Science")

  function print() {
    const input = document.getElementById("resume-temp-3");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", -8,8);
      // pdf.output('dataurlnewwindow');
      pdf.save(name+"-resume.pdf");
    });
  }

  return (
    <>
      <Container className="resume-temp-3-background mb-4" style={{borderRadius: 20}} >
        <Row>
          {/* First Column */}
          <Col lg={6} style={{borderRadius: 20}} className="pt-4 pb-4 mb-3 resume-temp-3-background" >
            <Row>
              {/* Personal Detail Input */}
              <Col lg={6}>
                <Row className="mb-2"><Col><h4>Personal Detail</h4></Col></Row>
                {/* Image Input */}
                <Row>
                  <Col>
                    <label>Upload Resume Image</label>
                    <input
                      accept="image/*"
                      placeholder="Upload Your Image"
                      className="profile-pic mt-2"
                      type="file"
                      id="select-image"
                      onChange={(e) => {
                        setImg(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </Col>
                </Row>
                {/* Name Input */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="resume-input"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Email Input */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="email"
                      placeholder="Email"
                      className="resume-input"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Phone No. Input */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      className="resume-input"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Branch Input */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Branch: e.g. Computer Science"
                      className="resume-input"
                      onChange={(e) => {
                        setBranch(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              {/* Professional Detail Input */}
              <Col lg={6} className="">
              <Row className="mb-2"><Col><h4>Professional Detail</h4></Col></Row>
                {/* Key Skill Input */}
                <Row className="mt-3">
                  <Col>
                    <input
                      type="text"
                      placeholder="Key Skills"
                      className="resume-input"
                      onChange={(e) => {
                        setSkill(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Software Skill */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Software Skill e.g.- C,C++,Java"
                      className="resume-input"
                      onChange={(e) => {
                        setSoftware(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Work Experience Code */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Work Experience"
                      className="resume-input"
                      onChange={(e) => {
                        setWorkExperience(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Collage Name Input  */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Collage Name"
                      className="resume-input"
                      onChange={(a) => {
                        setCollageName(a.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Certification Detail Input */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Certification Details"
                      className="resume-input"
                      onChange={(e) => {
                        setCertification(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Github repo Input */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Git-Hub Link"
                      className="resume-input"
                      onChange={(e) => {
                        setGitRepo(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Linked Profile Input */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Linked In Profile"
                      className="resume-input"
                      onChange={(e) => {
                        setLinkedIn(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Project Link input */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Project Link"
                      className="resume-input"
                      onChange={(e) => {
                        setProjectLink(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Project Title input */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Project Title"
                      className="resume-input"
                      onChange={(e) => {
                        setProjectTitle(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
                {/* Location Input */}
                <Row className="mt-2">
                  <Col>
                    <input
                      type="text"
                      placeholder="Location"
                      className="resume-input"
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* Download Btn */}
            <Row className="mt-2">
              <Col >
                <button
                  style={{backgroundColor: "black" ,color:"white" }}
                  className="form-control"
                  onClick={print}
                >
                  Download Resume
                </button>
              </Col>
            </Row>
          </Col>
          {/* Faltu Column */}
          {/* <Col lg={1}></Col> */}
          {/* Second Column */}
          <Col id="resume-temp-3"   lg={6} className="mb-3 mt-3" >
            <Container>
              <Row  style={{}}>
                {/* Resume Left */}
                <Col lg={6} style={{borderTopLeftRadius: 30 , borderBottomLeftRadius: 30  ,backgroundColor: "gray"}} className="pb-5">
                  {/* Image And Name Input */}
                  <Row className="mt-5">
                    <Col lg={4} >
                    <img src={img} alt="demo pic" style={{borderRedius:"50%" , width:"80%"}} />
                    </Col>
                    <Col lg={7}><h3>{name}</h3><h6>{branch} Engineer</h6></Col>
                  </Row>
                  {/* Experience */}
                  <Row><Col className="center mt-5" style={{ padding: 5 ,backgroundColor:"#ECECEC",  margin: 20 , borderRadius: 10}}>Experience</Col></Row>
                  <Row>
                    <Col lg={1}></Col>
                    <Col><h4>{workExperience}</h4></Col>
                  </Row>
                  {/* Project */}
                  <Row><Col className="center mt-4" style={{ padding: 5 ,backgroundColor:"#ECECEC",  margin: 20 , borderRadius: 10}}>Project</Col></Row>
                  <Row>
                  <Col lg={1}></Col>
                    <Col><h4>Title: {projectTitle} </h4></Col>
                  </Row>
                  <Row>
                  <Col lg={1}></Col>
                    <Col> Link: {projectLink}: </Col>
                  </Row>
                  {/* Education  */}
                  <Row><Col className="center mt-4" style={{ padding: 5 ,backgroundColor:"#ECECEC",  margin: 20 , borderRadius: 10}}>Education</Col></Row>
                  <Row>
                  <Col lg={1}></Col>
                    <Col><h4>{certification}</h4></Col>
                  </Row>
                  <Row>
                  <Col lg={1}></Col>
                    <Col><p>Collage Name: {collageName} </p></Col>
                  </Row>
                </Col>
                 {/* Resume Right */}
                <Col lg={6} style={{borderTopRightRadius:30 , borderBottomRightRadius:30 , backgroundColor: "#151D3B", color:"darkgray"  }}>
                  {/* Key Skill  */}
                  <Row><Col className="center mt-5" style={{ padding: 5 ,backgroundColor:"#ECECEC",  margin: 20 , borderRadius: 10}}>Key Skill</Col></Row>
                  <Row>
                  <Col lg={1}></Col>
                    <Col><h3>{skill}</h3></Col>
                  </Row>
                  {/* Contact  */}
                  <Row><Col className="center mt-3" style={{ padding: 5 ,backgroundColor:"#ECECEC",  margin: 20 , borderRadius: 10}}>Contact</Col></Row>
                  <Row className="">
                  <Col lg={1}></Col>
                    <Col><h5>{location}</h5></Col>
                  </Row>
                  {/* Email */}
                  <Row className="mt-2">
                  <Col lg={1}></Col>
                    <Col><h6>{email}</h6></Col>
                  </Row>
                  {/* Phone */}
                  <Row className="mt-2">
                  <Col lg={1}></Col>
                    <Col><h5>{phone}</h5></Col>
                  </Row>
                  {/* git Hub */}
                  <Row className="mt-2">
                  <Col lg={1}></Col>
                    <Col><p>{gitRepo}</p></Col>
                  </Row>
                  {/* Linked In */}
                  <Row className="">
                  <Col lg={1}></Col>
                    <Col><p>{linkedIn}</p></Col>
                  </Row>
                  {/* Skill  */}
                  <Row><Col className="center mt-3" style={{ padding: 5 ,backgroundColor:"#ECECEC",  margin: 20 , borderRadius: 10}}> Skill</Col></Row>
                  <Row className="mt-2">
                  <Col lg={1}></Col>
                    <Col><h5>{software}</h5></Col>
                  </Row>
                </Col>
              </Row>
              </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ResumeTemp;

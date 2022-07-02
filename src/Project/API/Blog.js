import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import Footer from "../Resume-Builder/Footer";
import { GiIndianPalace } from "react-icons/gi";
import { BsPhoneFill, BsNewspaper } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import {
  MdNightShelter,
  MdScience,
  MdEmojiTransportation,
} from "react-icons/md";
import { SiPython } from "react-icons/si";
import { FcSportsMode } from "react-icons/fc";
import { GrReactjs } from "react-icons/gr";
import { BsStack } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { GiCyberEye } from "react-icons/gi";
import { GiBattleMech } from "react-icons/gi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiNodedotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa";
// import IndiaApi from "./IndiaApi";
// import TechApi from "./TechApi";
// import BusinessApi from "./BusinessApi";
// import EntertainmentApi from "./EntertainmentApi";
// import GeneralApi from "./GeneralApi";
// import HelthApi from "./HelthApi";
// import ScienceApi from "./ScienceApi";
// import SportsApi from "./SportsApi";
// import MernApi from "./MernApi";
// import CyberSecqurityApi from "./CyberSecqurityApi";
// import MlApi from "./MlApi";
// import AiApi from "./AiApi";
// import FullStackApi from "./FullStackApi";
// import NodeApi from "./NodeJsApi";
// import JavaApi from "./JavaApi";
// import ReactApi from "./ReactApi";
// import PythonApi from "./PythonApi";
import MainApi from "./MainApi";
import Maintenence from "../Image/maintenance-page.jpg"

const Blog = () => {
  const [ind, setInd] = useState(true);
  const [tech, setTech] = useState(true);
  const [business, setBusiness] = useState(true);
  const [entertainment, setEntertainment] = useState(true);
  const [general, setGeneral] = useState(true);
  const [helth, setHelth] = useState(true);
  const [science, setScience] = useState(true);
  const [soprts, setSports] = useState(true);
  const [react, setReact] = useState(true);
  const [node, setNode] = useState(true);
  const [python, setPython] = useState(true);
  const [java, setJava] = useState(true);
  const [ai, setAi] = useState(true);
  const [ml, setMl] = useState(true);
  const [fullStack, setFullStack] = useState(true);
  const [mern, setMern] = useState(true);
  const [cyberSecqurity, setCyberSecqurity] = useState(true);
  // const [car, setCar] = useState(true);

  return (
    <>
      <Row>
        <Navigation />
      </Row>
      <Container>
        <Row>
          <Col style={{color:"#FCF8E8" , textAlign:"center" , backgroundColor:"#774360" , padding: 10 }} >
         Currently this page is under maintenence stage.
          </Col>
        </Row>
      </Container>
      <Container fluid style={{backgroundColor: "#d5d5e0"}} className=" center mt-2 mb-3">
        {/* <Row>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
        </Row> */}


         
            {/* India Api */}
            {ind ? (
              <button className="button-icon">
                <GiIndianPalace
                  onClick={() => {
                    setInd(false);
                  }}
                  className="ind-icon"
                />
                <p>India</p>
              </button>
            ) : (
              <MainApi url="india" data={setInd} />
            )}
        {/* Tech Api */}
        {tech ? (
          <button className="button-icon">
            <BsPhoneFill
              onClick={() => {
                setTech(false);
              }}
              className="tech-icon"
            />
            <p>Technology</p>
          </button>
        ) : (
          <MainApi url="india-technology" data={setTech} />
        )}
            {/* Business Api */}
        {business ? (
          <button className="button-icon">
            <MdEmojiTransportation
              onClick={() => {
                setBusiness(false);
              }}
              className="business-icon"
            />
            <p>Business</p>
          </button>
        ) : (
          <MainApi url="india-business" data={setBusiness} />
        )}
         
       

        
        
        {/* Enteraintment Api */}
        {entertainment ? (
          <button className="button-icon">
            <BiCameraMovie
              onClick={() => {
                setEntertainment(false);
              }}
              className="entertainment-icon"
            />
            <p>Bollywood</p>
          </button>
        ) : (
          <MainApi url="bollywod" data={setEntertainment} />
        )}
        {/* General Api */}

        {general ? (
          <button className="button-icon">
            <BsNewspaper
              onClick={() => {
                setGeneral(false);
              }}
              className="general-icon"
            />
            <p>General</p>
          </button>
        ) : (
          <MainApi url="general" data={setGeneral} />
        )}
        {/* Helth Api */}
        {helth ? (
          <button className="button-icon">
            <MdNightShelter
              onClick={() => {
                setHelth(false);
              }}
              className="helth-icon"
            />
            <p>Helth</p>
          </button>
        ) : (
          <MainApi url="helth" data={setHelth} />
        )}
        {/* Science */}
        {science ? (
          <button className="button-icon">
            <MdScience
              onClick={() => {
                setScience(false);
              }}
              className="science-icon"
            />
            <p>Science</p>
          </button>
        ) : (
          <MainApi url="science" data={setScience} />
        )}
        {/* Sports */}
        {soprts ? (
          <button className="button-icon">
            <FcSportsMode
              onClick={() => {
                setSports(false);
              }}
              className="sports-icon"
            />
            <p>Sports</p>
          </button>
        ) : (
          <MainApi url="sports" data={setSports} />
        )}

        {/* Programming Langauge */}
        <div className="mt-5 mt-3 center" style={{ fontSize: 60 }}>
          Codding World{" "}
        </div>
        <hr />
        {/* Python */}
        {python ? (
          <button className="button-icon">
            <SiPython
              onClick={() => {
                setPython(false);
              }}
              className="python-icon"
            />
            <p>Python</p>
          </button>
        ) : (
          <MainApi url="python" data={setPython} />
        )}
        {/* React Js */}
        {react ? (
          <button className="button-icon">
            <GrReactjs
              onClick={() => {
                setReact(false);
              }}
              className="react-icon"
            />
            <p>React Js</p>
          </button>
        ) : (
          <MainApi url="react-js" data={setReact} />
        )}
        {/* Java */}
        {java ? (
          <button className="button-icon">
            <FaJava
              onClick={() => {
                setJava(false);
              }}
              className="java-icon"
            />
            <p>Java</p>
          </button>
        ) : (
          <MainApi url="java" data={setJava} />
        )}
        {/* Node Js */}
        {node ? (
          <button className="button-icon">
            <SiNodedotjs
              onClick={() => {
                setNode(false);
              }}
              className="node-icon"
            />
            <p>Node Js</p>
          </button>
        ) : (
          <MainApi url="node" data={setNode} />
        )}
        {/* Full Stack */}
        {fullStack ? (
          <button className="button-icon">
            <BsStack
              onClick={() => {
                setFullStack(false);
              }}
              className="full-stack-icon"
            />
            <p>Full Stack</p>
          </button>
        ) : (
          <MainApi url="full-stack" data={setFullStack} />
        )}
        {/* Artificall Intiligence */}
        {ai ? (
          <button className="button-icon">
            <GiArtificialIntelligence
              onClick={() => {
                setAi(false);
              }}
              className="ai-icon"
            />
            <p>Artificial Intelligence</p>
          </button>
        ) : (
          <MainApi url="ai" data={setAi} />
        )}
        {/* Machin Learning */}
        {ml ? (
          <button className="button-icon">
            <GiBattleMech
              onClick={() => {
                setMl(false);
              }}
              className="ml-icon"
            />
            <p>Mechin Learning</p>
          </button>
        ) : (
          <MainApi url="ml" data={setMl} />
        )}
        {/* Cyber Secqurity */}
        {cyberSecqurity ? (
          <button className="button-icon">
            <GiCyberEye
              onClick={() => {
                setCyberSecqurity(false);
              }}
              className="cyber-secqurity-icon"
            />
            <p>Cyber Secqurity</p>
          </button>
        ) : (
          <MainApi url="cyber-secqurity" data={setCyberSecqurity} />
        )}
        {/* Marn Stack */}
        {mern ? (
          <button className="button-icon">
            <SiMongodb
              onClick={() => {
                setMern(false);
              }}
              className="mern-icon"
            />
            <p>Marn Stack</p>
          </button>
        ) : (
          <MainApi url="mern" data={setMern} />
        )}
       
       
      </Container>

      <Row>
        <Footer />
      </Row>
    </>
  );
};
export default Blog;

import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";
import "./Style.css";
import Footer from "./Footer";
import Resume from "./Resume";
import Sinup from "./Sinup";

const MainPage = () => {
  const [count, setCount] = useState(false);
  const [userName , setUserName] = useState("")
  console.log("user name" , userName)
  return (
    <>
      <div>
        {/* Ternary Operator */}
        {!count ? 
          <Sinup data={setUserName} p={setCount} />
         : 
          <>
            <Row>
              <Navigation />
            </Row>
            <Resume />
            <div className="mt-5 mb-5">
              <hr />
            </div>
            {/* <Resume2 /> */}
            <Footer UserName={userName} />
          </>
        }
      </div>
    </>
  );
};

export default MainPage;

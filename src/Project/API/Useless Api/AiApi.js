import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import {BsLink} from "react-icons/bs"
import {FaHeart} from "react-icons/fa"
import {GrClose} from "react-icons/gr"

const AiApi = (p) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=ai&apiKey=8ca20aaf2abd4cff9514090a0251731a",
      { method: "GET" }
    )
      .then((arrypromic) => {
        //console.log(apipromic)
        return arrypromic.json();
      })
      .then((apidata) => {
        setData(apidata.articles);
      });
  }, []);

  console.log(data);

  return (
    <>
      
       
      
     
      
          
      <Row>
      <a onClick={() => {p.data(true)}} className="pt-5 close-btn center"> <GrClose /></a>
        <Col>
        {data.map((key) => {
            return (
              <>
              <Container className="mt-5 api-container">
                <Row className="pt-3 pb-3">
                  {/* img col */}
                 <Col> <img src={key.urlToImage} style={{ width: 500 }} /></Col>
                 {/* text content col */}
                 <Col>
                 <Row><Col className="source-text">{key.source.name}</Col></Row>
                 <Row className=" title-text"><Col>{key.title}</Col></Row>
                 <Row className="description-text mt-3"><Col>{key.description}</Col></Row>
                 <Row><Col className="content-text mt-2">{key.content}</Col></Row>
                 <Row className="mt-2 ">
                 <Col><a href={key.url} ><BsLink className="url-text" /></a></Col>
                 <Col><FaHeart className="heart-icon" /></Col></Row>
                 </Col>
                </Row>
                </Container>
              </>
            );
          })}
        </Col>
        <a onClick={() => {p.data(true)}} className="pt-5 close-btn center"> <GrClose /></a>
        </Row>
      
      
      {/* <Row className="mt-5"><Footer /></Row> */}
    </>
  );
};
export default AiApi;

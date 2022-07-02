import React, { useState, useEffect } from "react";
import { Row, Col, Container , Alert} from "react-bootstrap";
import {FaSearch} from "react-icons/fa"
import { FaHeart } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";
import Footer from "../Resume-Builder/Footer";


const ImageApi = () => {
  const [imageData, setImageData] = useState([]);
  const [serch, setSearch] = useState("");
  // const data = JSON.stringify(localStorage.getItem('name'))
  const saved = localStorage.getItem("name");
  const data = JSON.parse(saved);
  useEffect(() => {
    apiFun();
  }, []);

  function apiFun() {
    fetch(
      `https://pixabay.com/api/?key=27186541-7a0f9f128637850ee1860d5f0&q=${serch}&image_type=photo&pretty=true`
    )
      .then((promic) => {
        return promic.json();
      })
      .then((res) => {
        setImageData(res.hits);
      });
  }

  function serchFun(e) {
    e.preventDefault();
    apiFun();
  }
  // Download Function
  // function print()
  //  {
  //   const input = document.getElementById("img");
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "png", -8, 8 );
  //     // pdf.output('dataurlnewwindow');
  //     pdf.save("image.png");
  //   });
  //  }
  return (
    <>
      <Row>
        <Navigation />
      </Row>
      <Col className="mt-3 mb-3" style={{padding:30 , backgroundColor:"#8D8DAA" , color:"#BAABDA" , borderRadius:16}}>
          <h1>Hello... <span style={{color: "#676FA3"}} >{data}</span> ,</h1>
        </Col>
      {/* Search Icon */}
      <Container>
      <Row style={{ backgroundColor: "#92A9BD" , borderRadius:16 }} className="pt-5 pb-5 center">
        <Col></Col>
        <Col xs={10} className="center" >
          <input
            className="img-serch-input"
            placeholder="Image Type"
            type="text"
            value={serch}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            
          />
          <button className="img-serch-btn mt-4" onClick={serchFun}>
            <FaSearch/>
          </button>
        </Col>
        <Col></Col>
      </Row>
      </Container>
      
        {/* Image Content */}
        {imageData.map((key, id) => {
          return (
            <>
              <Container  >
                <Row>
                  <Col xs={2}></Col>
                  <Col style={{backgroundColor: "#D3DEDC" , borderRadius:20}} lg={8} className="mt-5 pt-4 pb-4 ">
                    <Row>
                      <Col className="img-tags"># {key.tags}</Col>
                    </Row>

                    <Row>
                      <Col className="mt-1 mb-2" style={{fontSize:"200%"}} >Photographer: {key.user}</Col>
                    </Row>
                    <Row>
                      <Col>
                        <img
                          alt="img-gallery"
                          src={key.webformatURL}
                          style={{ width: "100%"}}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FaHeart className="img-heart-icon" />
                        <span className="img-likes">{key.likes}</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </>
          );
        })}
     
      <Row className="mt-5">
        <Footer />
      </Row>
    </>
  );
};
export default ImageApi;

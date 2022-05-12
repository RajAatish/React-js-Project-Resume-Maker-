import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import {ImDownload} from "react-icons/im"
import {FaHeart} from "react-icons/fa"
import Navigation from "../Navigation/Navigation";
import Footer from "../Resume-Builder/Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const ImageApi = () => {
  const [imageData, setImageData] = useState([]);
  const [serch , setSearch] = useState("")

 useEffect(() =>{
  apiFun()
 },[])

 function apiFun()
 {
  fetch(`https://pixabay.com/api/?key=27186541-7a0f9f128637850ee1860d5f0&q=${serch}&image_type=photo&pretty=true`)
  .then((promic) =>{return promic.json()})
  .then((res) => {setImageData(res.hits)})
 }
 
function serchFun(e)
{
  e.preventDefault()
  apiFun()
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
      {/* Search Icon */}
      <Row style={{backgroundColor:"#c3d9db"}} className="pt-5 pb-5 center">
       <Col></Col>
       <Col xs={10}>
       <input className="img-serch-input" placeholder="Image Type" type="text" value={serch} onChange={(e) => {setSearch(e.target.value)}} />
        <button className="img-serch-btn" onClick={serchFun}>Search</button>
       </Col>
       <Col></Col>
      </Row>
      <Row style={{backgroundColor:"#c3d9db"}}>
        
          {
            imageData.map((key , id) =>{
              return(
              <>
               <Col className="mt-4" xs={4}>
                 
                <Row id="img">
                  <h2 className="img-tags"># {key.tags}</h2><br/>
                  <h2 className="img-user">{key.user}</h2>
                  <img  src={key.webformatURL} style={{width: 400 ,marginLeft: 10 , marginTop: 10}}/>
                  </Row>
                <Row>
                 <Col><FaHeart className="img-heart-icon" /><span className="img-likes">{key.likes}</span></Col>
                </Row>
           
               </Col>
              </>
            )})
          }
       
      </Row>
      <Row className="mt-5"><Footer /></Row>
    </>
  );
};
export default ImageApi;

import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumeTwo = () => {
    const [count , setCount] = useState(0)
    function Download () 
    {
        const input = document.getElementById("data-two");
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          pdf.addImage(imgData, "JPEG", -8, 8 );
          // pdf.output('dataurlnewwindow');
          pdf.save(count+"resume.pdf");
        });
    }
    return(
        <>
        <div id="data-two">
        <h1>Resume One</h1>
        <h3>Count {count} </h3>
        <button onClick={() => {setCount(count+1)}}>Click</button>
        <button onClick={() => {Download()}}>Download</button>
        </div>
        </>
    )
}
export default ResumeTwo
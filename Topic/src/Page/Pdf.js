import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Pdf = () => {
  function print() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", -50 ,0 );
      pdf.save("download.pdf");
    });
  }

  return (
    <>
    <div
      id="divToPrint"
      className="center pt-5"
      style={{
        backgroundColor: "#f5f5f5",
        width: "210mm",
        minHeight: "75mm",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <h2>HTML Canvas</h2>
      <h3> Download your pdf </h3>

      <button className="mt-5" onClick={print}> Download</button>
    </div>
    <hr />
    </>
  );
};
export default Pdf;

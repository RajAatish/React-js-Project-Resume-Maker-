import React from "react";
import MapWithProps2 from "./MapWithProps2";

const MapWithProps = () => {

    const data =  [
        { name: "raj", email: "raj@gmail.com" },
        { name: "aatish", email: "aatish@gmail.com" },
        { name: "mishra", email: "mishra@gmail.com" },
        { name: "cuteGirl", email: "cutegirl@gmail.com" },
        { name: "nishu", email: "nishu@gmail.com" },
        { name: "babul", email: "babul@gmail.com" }
    ]
    
    return(
        <>
        <div className="mt-5 mb-3 center">
            <h2> Map Function with Props</h2>

            {
                data.map((item) =>
                 <MapWithProps2 data2={item} />
                )
            }
        </div>
        <hr/>
        </>
    )
}
export default MapWithProps
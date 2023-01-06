import React from "react";
import "./Code.css"

const ClickEvent = ()=>{

    var name = "raj aatish"
    const Fire = () => {
        return(
            <>
            {name="raj "}
            {alert("Click event is fired "+name)}
            </>
            )
    }
    return(
        <>
        
            <div className="center mt-5">
        {/* Click Event */}
        <h1>Click Event</h1>
        <p> Singel variable name = {name}</p>
        <button  onClick={()=>Fire()}>Click Here</button>
        <p></p>
        <button  onClick={Fire}>Click Here</button>
        <hr/>
        </div>
        </>
    )
}
export default ClickEvent
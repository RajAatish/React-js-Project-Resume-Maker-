
import React, { useState } from "react";

const ControlledComp = () => {
    const [state , setState] = useState("70000")
    return(
        <>
        <div className="mt-5 mb-5 center">
            <h2> Controlled Component</h2> 
            <input type="text" defaultValue={"70000"} onChange={(e) => {setState(e.target.value)}} />
            <p>{state}</p>
        </div>
        <hr />
        </>
    )
}
export default ControlledComp
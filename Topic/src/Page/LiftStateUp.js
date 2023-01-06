import React from "react";
import LiftStateUp2 from "./LiftStateUp2";

const LiftStateUp = () => {
    function fun2( name)
    {
        console.log(name)
    }
    return(
        <>
           <div className="mt-5 mb-3 center">
               <h2> Lifting State Up</h2>
            <LiftStateUp2 fun={fun2} />
           </div>
           <hr />
        </>
    )
}
export default LiftStateUp
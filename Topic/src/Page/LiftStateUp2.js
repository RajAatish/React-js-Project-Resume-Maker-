import React from "react";

const LiftStateUp2 = () => {

    const name = [
        {name: "raj" , email: "raj@gmail.com"}
    ]
    return(
        <>
           <div className="mt-5 mb-3 center">
               <p>Sending data Child to parrent</p>
            <button onClick={(p) => p.fun(name)} > Update Name</button>
           </div>
           <hr />
        </>
    )
}
export default LiftStateUp2
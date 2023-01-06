import React, { useState } from "react";

const ConditionalReRender = () => {
  const [login , setLogin] = useState(4)

    return(
        <>
        <div className="mt-5 center">
            <h2>Conditional Rerendring {login} {setLogin}</h2>
            {login===1 ? <p>Login 1</p> : login===2 ? <p>Login 2</p> : login===3 ? <p>Login3</p>
             : <> <p>All Condition are false</p>
             <button > Condition is change</button>
             </>
             }
             
        </div>
        <br/>
        <hr/>
        </>
    )

//   if (login)
//   {
//       return(
//           <>
//           <h2>Conditional Re Rendring</h2>
//           <p>Login</p>
          
//           </>
//       )
//   }
//   else{
//       return(
//           <>
//           <h2>Conditional Re Rendring</h2>
//           <p>logout</p>
//           </>
//       )
//   }

}
export default ConditionalReRender
import React, { useRef } from "react";

const UseRef2 = () => {
    
    const inputVar = useRef()
    function fun () {
      //  console.log("Function is called")
      // inputVar.current.value="10000000000000000"
      inputVar.current.style.color="red"
      inputVar.current.style.backgroundColor="blue"
      inputVar.current.focus()
    }
    return(
        <>
        
        <div className="mt-5 mb-5 center">
            <h2>Use Ref In Functional Component For DOM Manuplitation</h2>
            <input type="text" ref={inputVar}/>
            <button onClick={fun}> Click</button>
            </div>
            <hr />
            </>
    )
}
export default UseRef2
import React,{useRef} from "react";

const UnControlledComp = () => {
    const input = useRef(null)
    function subbmit (e) {
        e.preventDefault() 
        // console.log("function run perfctly")
        console.log(input.current.value)
        const input3 = document.getElementById("input2").value
        console.log(input3)
    }
    return(
         <>
          <div className="mt-5 mb-5 center">
            <h2>UnControlled Component</h2> <br/>
            <form onSubmit={subbmit}>
            <input type="text" ref={input} /> <br />
            <input id="input2" type="text" /> <br />
            <button> Subbmit</button>
            </form>
          </div>
          <hr />
          </>
    )
}
export default UnControlledComp
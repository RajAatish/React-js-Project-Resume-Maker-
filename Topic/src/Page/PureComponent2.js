import React, { useState } from "react"; 

const PureComp2 = () => {
    const [count , setCount] = useState(0)
    const [state , setState] = useState(420)
    const fun = function fun2()  {
        return count*10
    }
    return(
        <>
        <div className="mt-5 mb-5 center">
            <h2> Pure Component in Function :( Use Memo) </h2>
            <p> Count : {count}</p>
            <p> State : {state}</p>
            <p> Function Count : {fun}</p>
            <button onClick={() => setCount(count+1)} > Update Count </button>
            <button onClick={() => setState(state*10)}> Update Stete</button>
        </div>
        <hr />
        </>
    )
}
export default PureComp2
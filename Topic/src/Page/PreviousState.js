import React, { useState } from "react";

const PreviousState = () =>{
    const [count , setCount] = useState(1)
    const [ predata , setPreData] = useState("")
    function UpdateCounter()
    {
        setCount((pre) =>{
            const rand = Math.floor(Math.random()*1000)
            // console.log(pre)
            setPreData(pre)
            setCount(rand)
        })
    }
    return(
    <>
    <div className="mt-5 mb-5 center">
        <h2>Previous State </h2>
        <p> Current Data: {count} </p>
        <p>Previous Data:{predata}</p>
        <button onClick={() => {UpdateCounter()}}>Click</button>
    </div>
    <hr />
    </>
    )
}
export default PreviousState
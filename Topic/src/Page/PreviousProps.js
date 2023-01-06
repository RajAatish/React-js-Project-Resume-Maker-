import React, { useRef , useEffect, useState } from "react";

const PreviousProps = (p) => 
{
    const preValue = useRef()
    useEffect(() =>{
        preValue.current = p.data
    })
    const preData = preValue.current
    // console.log(preValue.current)
    return(
    <>
    <div className="mt-5 mb-5 center">
        <h2>Previous Props </h2>
        <p>Current value: {p.data}</p>
        <p>Previous Value: {preData}</p>
    </div>
    
    </>
    )
}
export default PreviousProps
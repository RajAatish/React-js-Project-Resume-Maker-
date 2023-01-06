import React, { useState } from "react";

const StateWithObj = () =>{

    const [data , setData] = useState({name:"aatish" , age:"17"})
    return(
        <>
        <div className="mt-5 mb-5 center">
            <h2>State with Object</h2>
            <input type="text" placeholder="Name" value={data.name} onChange={(e) => {setData({age:data.age ,name:e.target.value})}} />
            <input type="number" placeholder="Age" value={data.age} onChange={(e) => {setData({...data,age:e.target.value})}} />
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
        </div>
        <hr />
        </>
    )
}
export default StateWithObj
import React from "react";
import { useParams } from "react-router-dom";

const NamePage = () => 
{
    const parems = useParams()
    const {name} = parems
    
    return(
        <>
        
        <div className="mt-5 mb-5">
            <h1> This is {name} page</h1>
            <p>We are creating awsome web page</p>
            <p>For Testing</p>
        </div>
        <hr />
        </>
    )
}
export default NamePage
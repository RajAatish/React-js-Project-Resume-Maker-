//  useState 

import {React , useState} from "react";


const State = () => {
    var [data , setData] = useState(0)
    // Update Function when Click the button
    const Update = ()=> {
        return(
            <>  
            {setData(data+420)}
            </>
        )
    }
    return(
        <>
        <div className="center mt-5">
        <h1>useState</h1>
        <p> Data: {data}</p>
        <button className="btn btn-dark" onClick={Update}> Update Data</button>
        <hr/>
        </div>
        </>
    )
}
export default State
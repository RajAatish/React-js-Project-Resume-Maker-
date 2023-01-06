import React , {useState} from "react";

const Get = () =>{
    const [data , setData] = useState("")
    const [print , setPrint] = useState(false)

    // onChange Function
    function GetData(val){
        return(
            setData(val.target.value)
        )
    }

    return(
        <>
        <div className="center mt-5">
         <h1>Get input box value</h1>
         <h2>{data}</h2>
         <input onChange={GetData} type="text"/>
         <hr/>
         </div>
         {/* Print Data */}
         <div className="center mt-5">
             <h1>Print input value</h1>
             {print?
             <h2>{data}</h2>:null}
             <input onChange={GetData} type="text"/>
             <button onClick={()=>{setPrint(true)}}> Print</button>
             <hr/>
         </div>
        </>
    )
}
export default Get
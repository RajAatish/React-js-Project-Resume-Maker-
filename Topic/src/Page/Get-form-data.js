import React, { useState} from "react";

const GetFormData = () => {

    const [name , setName] = useState("")
    const [lang , setLang] = useState("")
    const [tnc , setTnc] = useState(false)
    
    // onSubbmit Form Function
    function FormData(e){
        return(
            <>
            {e.preventDefault()}
            {/* {alert(tnc)} */}
            </>
        )
    }
    return(
        <>
        <div className="center mt-5">
        <h1>Get Form Data</h1><br/>
        <h3>Name: {name} / Langeuge: {lang} /Terms&Condition </h3>
        <form onSubmit={FormData}>
            <input onChange={(e) => {setName(e.target.value)}} type="text" placeholder="Enter Your Name" /><br/><br/>
            <select onChange={(e) => {setLang(e.target.value)}}>
                <option>C</option>
                <option>C++</option>
                <option>java</option>
                <option>Python</option>
            </select> <br/><br/>
            <input onChange={(e) => {setTnc(e.target.checked)}} type="checkbox" /><span>Axcept terms and condition {tnc}</span> <br/><br/>
            <button> Subbmit</button>
        </form> <br/>
        </div>
        <hr/>
        </>
    )
}
export default GetFormData;
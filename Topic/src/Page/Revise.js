import React, { useState } from "react";

const Revise = () => {
    const click = "you are click here raj"
    const [data , setData] = useState(0)
    const [displayInput , setDisplayInput] = useState("")
    const [printValue , setPrintValue] = useState("")
    const [printHide , setPrintHide] = useState(true)
    const [formName , setFormName] = useState("")
    const [formLng , setFormLng] = useState("")
    const [tnc , setTnc] = useState("")
    const [hide , setHide] = useState(true)
    const [toggle , setToggle] = useState(true)

    return(
        
        <div className="mb-5 mt-5 center">
            {/* Click Event */}
            <div>
            <p>Click Event </p>{click} <span></span>
            <button onClick={() => {alert(click)}}>Click Here</button>
            </div>
            {/* useState */}
            <div className="mt-4">
                <p>Use State</p>
                <p>Data: {data}</p>
                <button onClick={() => {setData(data+5)}}>Update Data</button>
            </div>
            {/* Display input Value */}
            <div className="mt-4">
                <p>
                    Display input value
                </p>
                <p>{displayInput}</p>
                <input onChange={(e) => {setDisplayInput(e.target.value)}} type="text" />
            </div>
            {/* Print Input Value */}
            <div className="mt-4">
                <p>Print Input Value</p>
               {printHide ? null : <p>{printValue}</p>}
                <input type="text" onChange={(e) => {setPrintValue(e.target.value)}} />
                <button onClick={() => {setPrintHide(!printHide)}}>Print</button>
            </div>
            {/* Get Form Data */}
            <div className="mt-4">
                <p>Get Form Data</p>
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <input onChange={(e) => {setFormName(e.target.value)}} type="text" placeholder="Enter Your Name" /> <br/>
                    <select onChange={(e) => {setFormLng(e.target.value)}} className="mt-2">
                        <option>select</option>
                        <option>C</option>
                        <option>C++</option>
                        <option>Java</option>
                        <option>Python</option>
                    </select> <br/>
                    <input onChange={(e) => {setTnc(e.target.checked)}} type="checkbox" /> <span>Axcept Terms And Condition</span><br/>
                    <button onClick={() => {alert("Name: " + formName + "Lng: "+formLng + "Tnc"+tnc)}}>Subbmit</button>
                </form>
            </div>
            {/* Hide Show Toggle */}
            <div className="mt-4">
                {hide ? <p>Hide Item</p> : <p>Show Item</p>}
                {toggle ? <p>Toggle</p> : <p>unToggle</p>}
                <button onClick={() => {setHide(true)}}>Hide</button> 
                <button onClick={() => {setHide(false)}}>Show</button>
                 <button onClick={() => {setToggle(! toggle)}}>Toggle</button>
            </div>
        </div>
        
    )
}
export default Revise
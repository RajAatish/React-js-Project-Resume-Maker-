import React, { useState } from "react";

const FormValidation = () => {
    const [email , setEmail] = useState("")
    const [password , setPassWord] = useState("")
    const [e , setE] = useState("")
    const [p , setP] = useState("")
    const form = (e) => {
        return(
           <>
           {e.preventDefault()}
           </> 
        )
    }
    function Email(e) {
        var val = e.target.value
        
        if (val.length<3){
            setEmail(<span>Not Valid</span>)
        }
        else{
            setEmail("")
        }
        setE(val)
    }
    function Password(e) {
        var val2 = e.target.value
        if (val2.length < 3){
            setPassWord(<span>Not Valid Password</span>)
        }
        else{
            setPassWord("")
        }
        setP(val2)
    }
    function Submit() {
        if (setE.length < 4 || setP.length < 4){
            alert("not valid email")
        }
        else{
            alert("all Good")
        }
    }
    return(
        <>
        <div className="mt-5 mb-3 center">
            <h2>Form Validation</h2>
            <form onSubmit={form}>
                <input onChange={Email} type="text" placeholder="Email" /> <span>{email}</span><br/> <br/>
                <input onChange={Password} type="password" placeholder="Password" /> <span>{password}</span> <br/> <br/>
                <button onClick={Submit}> {e} {p}Login</button>
            </form>
        </div>
        <hr/>
        </>
    )
}
export default FormValidation
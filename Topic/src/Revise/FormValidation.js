import React, { useState } from "react";

const FormValidation = () =>{
    const [email , setEmail] = useState("")
    const [emailHandeler , setEmailHandeler] = useState(false)
    const [password , setPassword] = useState("")
    const [passwordHandler , setPasswordHandler] = useState(false)
    const [submitHandeler , setSubmitHandeler] = useState(false)
    function submitBtnFun()
    {
        if(email.length < 4 || password.length < 4 )
        {
            setSubmitHandeler(true)
        }
        else
        {
            setSubmitHandeler(false)
            setEmail("")
            setPassword("")
        }
    }
    function formSubbmitFun(e)
    {
        e.preventDefault()
       

    }
    function emailFun(e)
    {
        const value = e.target.value.length
        setEmail(e.target.value)
        if(value < 4 )
        {
            setEmailHandeler(true)
        }
        else
        {
            setEmailHandeler(false)
        }
    }
    function passwordFun(e)
    {
        const value = e.target.value.length
        setPassword(e.target.value)
        if(value < 4 )
        {
            setPasswordHandler(true)
        }
        else
        {
            setPasswordHandler(false)
        }
    }
    return(
        <>
        <div className="mt-5 mb-5">
        <h2> Form Validation</h2>
        <form onSubmit={formSubbmitFun}>
            <input type="text" placeholder="Email" value={email} onChange={emailFun} />{emailHandeler ? <span>invailed</span>:""}<br /> <br />
            <input type="password" placeholder="Password" value={password} onChange={passwordFun} />{passwordHandler ? <span>invailed</span>:""} <br /> <br />
            <button onClick={submitBtnFun}> Submit</button> {submitHandeler ? <span>Fill all The fields</span> : ""}
        </form>
        </div>
        </>
    )
}
export default FormValidation
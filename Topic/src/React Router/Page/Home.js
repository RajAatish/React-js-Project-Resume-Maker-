import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => 
{
    const navigate = useNavigate()

    const navigateFun = (url) =>
    {
        navigate(url)
    }
    return(
        <>
        
        <div className="mt-5 mb-5">
            <h1> This is Home page</h1>
            <p>For Testing</p>
        </div>
        <div className="center">
        <button style={{width:180}} onClick={() => {navigate("/about")}}> Go to About Page</button>
        <button style={{width:180}}  onClick={() => {navigateFun("/name-page/raj")}}>Go to Raj</button>
        <button style={{width:180}}  onClick={() => {navigateFun("/name-page/aatish")}}>Go to Aatish</button>
        <button style={{width:180}}  onClick={() => {navigateFun("/name-page/cute-girl")}}>Go to Cute Girl</button>
        </div>
        <hr />
        </>
    )
}
export default Home
import React , {useState} from "react";
import {Row} from "react-bootstrap"
import GetMethod from "./GetMethod";
import PostMethod from "./PostMethod";

function ApiApp() 
{

    

    return(
        <>
        <div className="mt-5 mb-5 center">
        <Row><h1>Api All Methods</h1></Row>
        <PostMethod />
        {/* <GetMethod /> */}
        </div>
        <hr />
        </>
    )
}
export default ApiApp
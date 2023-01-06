import React, { useEffect, useState } from "react";
import {Row} from "react-bootstrap"

function GetMethod() 
{
    const [users , setUsers] = useState([])
    useEffect(() =>{
        fetch('http://localhost:3000/users')
        .then((promic) =>{
            promic.json()
            .then((promic2) => {
                // console.log(promic2)
                setUsers(promic2)
            })
        })
    } , [])
    return(
        <>
        <div className="mt-5 mb-5 center">
        <h2>Get Method</h2>
        <Row style={{color:"red"}}>
            {
                users.map((key , id) => {
                    return(
                        <>
                        <hr />
                        <div id={id}>
                            <h2>User {id+1}</h2>
                        <h3>Name: {key.name}</h3>
                        <h4>Email: {key.email}</h4>
                        </div>
                        <hr />
                        </>
                    )
                })
            }
        </Row>
        </div>
        <hr />
        </>
    )
}
export default GetMethod
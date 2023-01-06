import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const GetApi = () => {
  // Input Variable
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [news , setNews] = useState([])
  const [userId , setUserId] = useState(null)
  // Calling api with get method
  useEffect(()=>{
   getApi()
  }, [])
  // Get Api Function
  function getApi()
  {
    fetch("http://localhost:3000/users").then((response)=>{
      response.json().then((promic2) =>{
          
        setNews(promic2)
        setName(promic2[0].name)
        setEmail(promic2[0].email)
        setUserId(promic2[0].id)
       //  console.log(news)
      })
    })
  }
  // Update Api Functoin
  function uploadFun()
  {
    // console.log({name,email})
    const data = {name,email}
    fetch("http://localhost:3000/articles" , {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json((result2)=>{
        
      })
    })
    getApi()
    setName("")
    setEmail("")
  }

  // Delete Api Function

  function deleteFun(id)
  {
    fetch(`http://localhost:3000/articles/${id}`,
    {method:"DELETE"}).then((promic) =>{
      promic.json().then((promic2) =>{
        getApi()
      })
    })
  }


  // Edit Api Function
  function editApi(id)
  {
    const value = news[id-1]
    setName(value.name)
    setEmail(value.email)
    setUserId(value.id)

  }
  function edit()
  {
      const editData = {name,email,userId}
      fetch(`http://localhost:3000/articles/${userId}`,
      {method:"PUT",
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(editData)
    }
      ).then((promic) =>{
        promic.json().then((promic2) =>{
          getApi()
        })
      })
  }

  return (
    <>
      
      <Row><h1>Api </h1></Row>
      <Row className="mt-5 mb-5 ">
        
        <Col className="center">
        {/* Post Method Api */}
        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} /> <br /> <br />
        <input type="email" value={email} onChange={(e) =>{setEmail(e.target.value)}} /> <br /> <br />
        <button onClick={uploadFun}> Upload</button>
        <button onClick={edit}> Edit</button>
        </Col>
        <Col>
          {
              news.map((key) =>{
                  return(
                      <>
                      <Row className="center">
                        <Col>{key.id}</Col>
                        <Col>{key.name}</Col>
                        <Col>{key.email}</Col>
                        <Col>
                        <button onClick={() =>{deleteFun(key.id)}}>Delete</button>
                        </Col>
                        <Col>
                        <button onClick={()=>{editApi(key.id)}}>
                        Edit</button>
                        </Col>
                      </Row>
                      
                         
                      
                      </>
                  )
              })
          }
         
        </Col>
        
      </Row>
    </>
  );
};
export default GetApi;




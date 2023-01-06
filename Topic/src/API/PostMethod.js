import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

const PostMethod = (p) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  
  // Post Function
  function PostFun() {
    const data = { name, email };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((promic) => {
      promic.json().then((promic2) => {
        // console.log(promic2)
        
      });
    });

    setName("");
    setEmail("");
  }

  // Get Method
  const [users, setUsers] = useState([]);
 useEffect(() => {
    RefereshApi();
  }, []);
  function RefereshApi() {
    fetch("http://localhost:3000/users").then((promic) => {
      promic.json().then((promic2) => {
        // console.log(promic2)
        setUsers(promic2);
      });
    });
  }

  //   Delete Method
  function DeleteApiFun() {
    fetch(`http://localhost:3000/users/${userId}`, { method: "DELETE" }).then(
      (promic) => {
        promic.json().then((promic2) => {
          RefereshApi();
        });
      }
    );
    setUserId("");
  }

//   Update Method
function UpdateApiFun()
{
    const data = {userId , name , email}
    fetch(`http://localhost:3000/users/${userId}`,
    {
        method: 'PUT' ,
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    }).then((promic) =>{
        promic.json().then((promic2) =>{
            RefereshApi()
        })
    })
    setName("")
    setEmail("")
    setUserId("")
}

  return (
    <>
      <div className="mt-5 mb-5">
       
        <Row>
          {" "}
          <Col>
            {/* Add User Column */}{" "}
            <h2>Post Method</h2>
            <input
              style={{ width: 300 }}
              placeholder="Name"
              type="text"
              
              onChange={(e) => {
                setName(e.target.value);
              }}
            />{" "}
            <br />
            <input
              style={{ width: 300 }}
              placeholder="Email"
              type="email"
              
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <hr  />
            <button style={{ width: 300 }} onClick={() => {PostFun()}}>
              Add User
            </button>
          </Col>
         
          <Col>
            {/* Delete User Column */}
            <h2>Delete Method</h2>
            <input
              value={userId}
              placeholder="User Id"
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              style={{ width: 300 }}
              type="number"
            />
            <hr  />
            <button
              onClick={() => {
                DeleteApiFun();
              }}
              style={{ width: 300 }}
            >
              Delete
            </button>
          </Col>

          <Col>
          {/* Update Column */}
          <h2>Update Method</h2>
          <input type="number" onChange={(e) => {setUserId(e.target.value)}} value={userId} placeholder="User Id " /> <br />
          <input type="text" onChange={(e) => {setName(e.target.value)}} value={name} placeholder="Name" /> <br />
          <input type="email" onChange={(e) => {setEmail(e.target.value)}} value={email} placeholder="Name" /> <br />
          <button onClick={() => {UpdateApiFun()}}>Update</button>
          </Col>
        </Row>
      </div>
      <hr />
      {/* Render Data */}
      <div className="mt-5 mb-5 center">
        <h2>Get Method</h2>
        <Row style={{ color: "red", paddingLeft: 100 }}>
          {users.map((key, id) => {
            return (
              <>
                <hr />
                <div id={id}>
                  <h2>User Id: {id + 1}</h2>
                  <h3>Name: {key.name}</h3>
                  <h4>Email: {key.email}</h4>
                </div>
                <hr />
              </>
            );
          })}
        </Row>
      </div>
      <hr />
    </>
  );
};
export default PostMethod;

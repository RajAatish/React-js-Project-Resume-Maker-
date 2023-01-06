import React from "react";
import { Table } from "react-bootstrap";

const MapFunction = () => {
  // const student = ["raj" , "aatish" , "versha"]
  const students = [
    { name: "raj", instaId: "_raj_", phone: "1111", email: "raj@gmail.com" },
    {
      name: "aatish",
      instaId: "_aatish_",
      phone: "1111",
      email: "aatish@gmail.com",
    },
    {
      name: "sakshi Mishra",
      instaId: "_mishra_",
      phone: "1111",
      email: "mishra@gmail.com",
    },
    {
      name: "versha",
      instaId: "_cute_girl_",
      phone: "1111",
      email: "versha@gmail.com",
    },
  ];

  // Map function
  //    student.map( (i) => {
  //        console.log(i)
  //    })

  return (
    <>
      <div className="mt-5 mb-3 center">
        <h2> Map Function</h2>

        <Table
          striped
          hover
          bordered
          variant="dark"
          style={{ borderRadius: "19px" }}
        >
          <thead>
            <tr>
              <th> Id </th>
              <th>Name</th>
              <th>Insta Id</th>
              <th>Email</th>
              <th>Phone No</th>
            </tr>
          </thead>
          <tbody>
            {students.map((key, i) => {
              return (
                // Filter method
                key.phone === "1111" ? (
                  <tr key={i} border={1}>
                    <td>{i+1}</td>
                    <td>{key.name}</td>
                    <td>{key.instaId}</td>
                    <td>{key.email}</td>
                    <td>{key.phone}</td>
                  </tr>
                ) : null
              );
            })}
          </tbody>
        </Table>
      </div>
      <hr />
    </>
  );
};
export default MapFunction;

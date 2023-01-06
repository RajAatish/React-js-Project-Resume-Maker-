import React from "react";
import { Table } from "react-bootstrap";

const NestedMapFunction = () => {
  const data = [
    {
      name: "raj",
      email: "raj@gmail.com",
      phone: "9999",
      house: [{ hn: "#123", location: "purnea", state: "bihar" } ,
      { hn: "#420", location: "sakti nagar", state: "bihar" }
    ],
    },
    {
      name: "aatish",
      email: "aatish@gmail.com",
      phone: "9999",
      house: [{ hn: "#193", location: "sitamarhi", state: "bihar" }],
    },
    {
      name: "cute girl",
      email: "cutegirl@gmail.com",
      phone: "9999",
      house: [{ hn: "#198", location: "purnea", state: "bihar" }],
    },
  ];
  return (
    <>
      <div className="mt-5 mb-5 center">
        <h2 className="mt-3 mb-3"> Nested Map Function</h2>
        <Table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>location</td>
            </tr>
          </thead>
          <tbody>
            {data.map((key, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.phone}</td>
                <td>
                <Table>
                  <thead>
                    <tr>
                      {" "}
                      <td>id</td>
                      <td>House Number</td>
                      <td>location</td>
                      <td>State</td>
                    </tr>
                  </thead>
                  <tbody>
                  {key.house.map((a, j) => (
                    <tr key={j}>
                      <td>{j+1}</td>
                      <td>{a.hn}</td>
                      <td>{a.location}</td>
                      <td>{a.state}</td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <hr />
    </>
  );
};
export default NestedMapFunction;

import React from "react";
import { Row } from "react-bootstrap";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavLink from "./NavLink";
import About from "./Page/About";
import Home from "./Page/Home";
import NamePage from "./Page/NamePage";

function RouterApp() 
{
    return(
        <>
        <Row className="center"> 
        <Row><h1>React Router</h1></Row>
        {/* React Router */}
       <BrowserRouter>
       <NavLink />
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/name-page/:name" element={<NamePage />} />
           <Route path="/*" element={<Navigate to="/" /> } />
       </Routes>
       </BrowserRouter>
       </Row>
        </>
    )
}
export default RouterApp
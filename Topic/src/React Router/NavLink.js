import React from "react";
import { NavLink } from "react-router-dom";

const NavNavLink = () => {
  return (
    <>
      <ul className="navbar-class">
        <li>
          <NavLink className="navlink-class" to="/"> Home</NavLink>
        </li>
        <li>
          
          <NavLink className="navlink-class" to="/about">About</NavLink>
        </li>
        <li>
          
          <NavLink className="navlink-class" to="name-page/raj">Raj</NavLink>
        </li>
        <li>
          
          <NavLink className="navlink-class" to="name-page/cute-girl">Cute Girl</NavLink>
        </li>
        <li>
          
          <NavLink className="navlink-class" to="name-page/aatish">Aatish</NavLink>
        </li>
      </ul>

    </>
  );
};
export default NavNavLink;


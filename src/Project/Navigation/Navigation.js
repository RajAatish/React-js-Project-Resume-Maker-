import React from "react"
import { BsFillPersonFill } from 'react-icons/bs';
import {MdTravelExplore} from 'react-icons/md'
import {Navbar, Nav} from "react-bootstrap"
import {NavLink,Link} from "react-router-dom"
import { Row,Col } from "react-bootstrap";
import {BsTextareaResize} from "react-icons/bs"
import "../Resume-Builder/Style.css"
import {SiGooglenews , SiMinetest} from "react-icons/si"
import {MdOutlineImageSearch} from "react-icons/md"
import Resume from "../Image/Resume.png"

const Navigation = () => {

    return (
        <>
        <ul className="navigation">
            <li>
            <NavLink className="navigation-item-ex" as={Link} to="/"> <img src={Resume} style={{width:300}} /> </NavLink> 
            </li>
            <li>
            <NavLink className="navigation-item" as={Link} to="/About"> <MdTravelExplore className="icon-size" /> <h3> About</h3> </NavLink>
            </li>
            <li>
            <NavLink className="navigation-item" as={Link} to="/Acount"><BsFillPersonFill className="icon-size"/> <h3> Account</h3></NavLink>
            </li>
            <li>
            <NavLink className="navigation-item" as={Link} to="/blog"><SiGooglenews className="icon-size" /><h3>Blog</h3> </NavLink> 
            </li>
            <li>
            <NavLink className="navigation-item" as={Link} to="/imagegallery"><MdOutlineImageSearch className="icon-size" /><h3>Image Gallery</h3> </NavLink>
            </li>
            <li>
            <NavLink className="navigation-item" as={Link} to="/test"><SiMinetest className="icon-size" /><h3>Test</h3> </NavLink>
            </li>
        </ul>
            
                    
                    
                    
                    
                    
                    
                     
                    
           
           
            
        </>
    )
}

export default Navigation
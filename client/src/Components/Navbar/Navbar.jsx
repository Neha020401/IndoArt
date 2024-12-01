import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const mobilescreen = true;
  return (
    <div className="Navbar">
     <Link to={'/'}><h2>Indo Art</h2></Link> 
      <ul>
        <Link to={'/art-collection'}><li>Art Collection</li></Link> 
        <Link to={'/artist'}><li>Artist</li></Link> 
        <Link to={'/aboutus'}><li>About us</li></Link> 
        <Link to={'social-resposibility'}><li>Social Resposibility</li></Link> 
      </ul>

      <div className="Navbar-icons">
        {mobilescreen && <FontAwesomeIcon icon={faBars} />}
       <Link to={'/chatRoom'}>
       <FontAwesomeIcon icon={faMessage} />{/* Icon for message room  */}
       </Link>
        <FontAwesomeIcon icon={faMagnifyingGlass} />{/* Icon for Search  */}
        <Link to={'/auth'}>
        <FontAwesomeIcon icon={faUser} /> {/* Icon for auth  */}
        </Link>
        
      </div>
    </div>
  );
};

export default Navbar;

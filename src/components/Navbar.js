import "./NavbarStyles.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1 id="logoTxtSize">Lau Family Recipes</h1>
      </Link>
      <ul className={click ? "nav-menu active" : 
      "nav-menu"}>
        <li>
          <Link to="/"><h6 id="hovText">Home</h6></Link>
        </li>
        <li>
          <Link to="/recipes"><h6 id="hovText">Recipes</h6></Link >
        </li>
        <li>
          <Link to="/about"><h6 id="hovText">About</h6></Link>
        </li>
        <li>
          <Link to="/contact"><h6 id="hovText">Contact</h6></Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: "#333333"}} />)
        : (<FaBars size={20} style={{color: "#333333"}} />)}
      </div>
    </div>
  )
}

export default Navbar
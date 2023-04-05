import "./SocialsStyles.css";

import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const Socials = () => {
  return (
    <div>
      <div className="social">
            <Link to="mailto: jeremylau01@gmail.com">
              <MdMailOutline id="iconInside" size={40} style={
                {color:"#000", marginRight: "8px"}} />
            </Link>
            <Link to="https://www.linkedin.com/in/jeremy-lau1/">
              <TiSocialLinkedin id="iconInside" size={40} style={
                {color:"#000", marginRight: "8px"}} />
            </Link>
            <Link to="https://www.instagram.com/jeremy_lau01/">
              <FaInstagram id="iconInside" size={40} style={
                {color:"#000", marginRight: "8px"}} />
            </Link>
          </div>
    </div>
  )
}

export default Socials
import "./ContactImgStyles.css";
import FamilyPhoto from "../assets/Family-Photo.svg";

import React from 'react'

const LeftContactImg = () => {
  return (
    <div className="LeftContact">
        <img src={FamilyPhoto} alt="familyphoto" className="famphoto"></img>

    </div>
  )
}

export default LeftContactImg;
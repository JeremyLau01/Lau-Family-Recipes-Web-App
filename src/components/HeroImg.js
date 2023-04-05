import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/a3.webp";
import HomeImg from '../components/HomeImg';

/*since button will take us to another page, need to import link*/
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <HomeImg />
      <div className="mask">
        <img className="into-img" 
        src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
          <h1><span className="white">Recipes</span></h1>
          <h1><span className="white">that will</span></h1>
          <h1><span className="white">last</span> forever</h1>
          <br></br><br></br><br></br><br></br><br></br>
          <div>
            {/*Using link for button*/}
            <Link to="/recipes" className="btn" id="bva">Recipes</Link>
          </div>
      </div>
    </div>
  )
}

export default HeroImg
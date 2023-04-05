import "./AboutMeStyles.css";

import React from 'react'
import Selfie from "../assets/Polaroid.svg";
import RainforestImage from "./RainforestImage";
import { Link } from "react-router-dom";

const AboutMe = () => {

  const elementToRemove = document.getElementById('selfieyay');
  if (elementToRemove) {
    // Remove the element from the DOM
    elementToRemove.parentNode.removeChild(elementToRemove);
  }

  return (
    
    <div className="aboutme">
      <RainforestImage></RainforestImage>
      <div className="aboutme-container">
        <div className="left">
          <div className="aboutme-txt">
            <h3 id="amt">About Me</h3>
          </div>
          <div className="linebreak">
            <h3 id="greenline">━━</h3>   
          </div>
          <div className="hi-txt">
            <h5>Hi, I'm Jeremy and I love Chinese food!</h5>
            <br></br>
            <br></br>
          </div>
          <div className="description-txt">
            <h5>I created Lau Family Recipes to write down and share my family's recipes with others. Most of the recipes are from my dad, mom, grandma, and sister. We cook Asian food almost every night and all of the dishes are easy to prepare.</h5>
            <br></br> {/**use css instead of br */}
            <h5>Now that you know more about me and my family, check out our <Link to="/recipes">
              <span className="orangeText" id="OrgTxt">Recipes</span>
            </Link>!</h5>
          </div>
        </div>
          <div className="right">
            <div class="img-parent">
              <Link to="https://www.instagram.com/jeremy_lau01/">
                <img className="polaroid" src={Selfie} alt="selfie image"/>
              </Link>
              </div>
            </div>
        </div>
      </div>
  )
}

export default AboutMe;
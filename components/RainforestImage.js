import "./RainforestStyles.css";
import RainforestImg from "../assets/bg-trees.jpg";

import React from 'react'

const RainforestImage = () => {
  return (
    <div>
      <div class="grid-container">  
        <div class="grid-item">
        </div>
        <div class="grid-item">
          <img src={RainforestImg} alt="rainforest" className="raintrees"></img>
        </div>
      </div>
    </div>
  )
}

export default RainforestImage;
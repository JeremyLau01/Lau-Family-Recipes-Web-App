import "./HomeImgStyles.css";

import FoodPreviews from "../assets/HomeDrawing.svg";

import React from 'react'

import { Link } from "react-router-dom";


const HomeImg = () => {
  return (
    <div>
      <div>
        <div class="grid-container2">
          <div class="grid-item2"></div>
          <div class="grid-item2">
            <Link to="/recipes">
              <img src={FoodPreviews} alt="FoodPreviews" className="foodPreviews"></img>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeImg
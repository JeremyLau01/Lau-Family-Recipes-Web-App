import "./HomeQuestionsStyles.css";

import React from 'react'

const HomeQuestions = () => {
  return (
    <div className="questions">
      <hr class="homebreak"></hr>
      <div className="qdiv1">
        <h2 id="qtxt">What is a 3 Dishes and 1 Soup Meal?</h2>
        <h5 id="atxt">According to Chinese tradition, your dinner should always include at least three dishes and one soup (San Cai Yi Tang).</h5>
      </div>
      <div className="qdiv2">
        <h2 id="qtxt">How did we format our recipes?</h2>
        <h5 id="atxt">Our recipes are written down like how you would write down a recipe in a notebook, or how you would tell someone how to cook the dish. I also did not include specific measurements of ingredients for all of the recipes. This is because my family adds ingredients to taste (agak-agak). For example if the ingredients call for soy sauce, you would not add too much soy sauce because the dish would become too salty. You should taste the dish along the way while you are cooking to ensure the flavor is balanced. </h5>
      </div>
    </div>
  )
}

export default HomeQuestions
import React from "react";
import { db } from "./firebaseConfig";
import { getDatabase, ref, onValue} from "firebase/database";
import { Link } from 'react-router-dom';
import "./FeaturedRecipeStyles.css";


export var out_list = [];
var count = 0;

export default class DataAllRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cook_time: [],
      food_img: [],
      featured: [],
      instructions: [],
      recipe_name: [],
      url_name: [],
    }
  }

  /* WORKING GOES THRU ALL OF CHILDREN */
  componentDidMount(){
    const db = getDatabase();
    const recipeRef = ref(db, 'Recipes');

    onValue(recipeRef, (snapshot) => {
      {/*Getting cook times*/}
      const list_cooktimes = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val().Cook_Time;
        list_cooktimes.push(childData);
      });
      this.setState({ cook_time : list_cooktimes });

      {/*Gettimg food images*/}
      const list_foodimgs = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val().Food_Img;
        list_foodimgs.push(childData);
      });
      this.setState({ food_img : list_foodimgs });

      {/*Getting instructions*/}
      const list_instructions = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val().Instructions;
        list_instructions.push(childData);
      });
      this.setState({ instructions : list_instructions });

      {/*Getting recipe names*/}
      const list_recipenames = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val().Recipe_Name;
        list_recipenames.push(childData);
      });
      this.setState({ recipe_name : list_recipenames });

      {/*Getting url names*/}
      const list_urls = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val().Url_Name;
        list_urls.push(childData);
      });
      this.setState({ url_name : list_urls });

      {/*Getting url names*/}
      const list_featured = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val().Featured;
        list_featured.push(childData);
      });
      this.setState({ featured : list_featured });
    });  
  }

  render() {
    {/*Creating instances of a class for each recipe*/}
    if (count === 1){
      this.state.instructions.forEach((instruction, index) => {
        var dict_rec = {};
        dict_rec["recipe_name"] = this.state.recipe_name[index];
        dict_rec["url_name"] = this.state.url_name[index];
        dict_rec["food_img"] = this.state.food_img[index];
        dict_rec["cook_time"] = this.state.cook_time[index];
        dict_rec["instructions"] = this.state.instructions[index];
        dict_rec["featured"] = this.state.featured[index];
        out_list.push(dict_rec);
      });
    }
    count += 1;
    return (
      <div>
        <h2 id="allRecipesText">Check out the Lau Family recipes!</h2>
        <section className="hero">
          <div className='container'>
            {out_list.map((card, index) => (
                <div key={index} className='card'>
                  <Link to={`/recipes/${card.url_name}`}>
                    <img src={card.food_img} alt="recipe" width="100%" className="imgRecipeCard"></img>
                  </Link>
                <Link to={`/recipes/${card.url_name}`}>
                  <h5 className="prevTxt" id="hovRecipeText">{card.recipe_name}</h5>
                </Link>
                </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
}
/*‎ ‎ ‎*/
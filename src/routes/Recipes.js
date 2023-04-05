import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DataAllRecipes from '../databaseComponents/DataAllRecipes';
import "../databaseComponents/FeaturedRecipeStyles.css";

const Recipes = ({data}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  document.title = "Our Recipes!";

  return (
    <div>
      <Navbar />
      <DataAllRecipes />
      <Footer />
    </div>
  )
}

export default Recipes;

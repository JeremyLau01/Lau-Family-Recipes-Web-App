import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import "../components/FeaturedFoodStyles.css";
import FeaturedRecipes from '../databaseComponents/FeaturedRecipes';
import HomeQuestions from '../components/HomeQuestions';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = "Lau Recipes";

  return (
    <div>
      <Navbar />
      <HeroImg />
      <FeaturedRecipes />
      <HomeQuestions />
      <Footer />
    </div>
  )
}

export default Home;
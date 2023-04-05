import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./index.css";
import "./databaseComponents/FeaturedRecipeStyles.css";

import { out_list } from "./databaseComponents/FeaturedRecipes";
import Home from "./routes/Home";
import Recipes from "./routes/Recipes";
import About from "./routes/About";
import Contact from "./routes/Contact";
import FullCard from './databaseComponents/FullCard';

function App() {
  document.title = "Lau Recipes";
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes data={out_list}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipes/:url_name" element={<FullCard/>}/>
      </Routes>
    </>
  );
}

export default App;
import React, { useEffect } from 'react';
import { useNavigate, useParams} from 'react-router-dom'; // For using url

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './FullCardStyles.css';

import GetAllData, { out_list } from "./GetAllData"; // was FeaturedRecipes


const FullCard = () => {

  // This scrolls to the top - originally rendered at the bottom
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Navbar/>
      <section className='full'>
        <GetAllData />
      </section>
      <Footer/>
    </div>
  )
}

export default FullCard
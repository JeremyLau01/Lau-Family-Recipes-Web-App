import React, { useEffect } from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = "Meet the Lau Family!";
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default About;
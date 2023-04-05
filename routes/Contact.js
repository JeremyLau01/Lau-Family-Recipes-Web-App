import React, { useEffect } from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = "Send us a message!";

  return (
    <div>
      <Navbar />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact;
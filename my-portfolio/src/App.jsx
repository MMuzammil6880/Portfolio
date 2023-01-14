import React from 'react'

import Header from './Components/Header/header'
import Nav from './Components/Nav/nav'
import About from './Components/About/about'
import Experience from './Components/Experience/experience'
import Services from './Components/Services/services'
import Portfolio from './Components/Portfolio/portfolio'
import Testimonials from './Components/Testimonials/testimonials'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'

const app = () => {
  return (
    <>
     <Header /> 
     <Nav />    
     <About />
    <Experience /> 
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />

    </>
  )
}

export default app
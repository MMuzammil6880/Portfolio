import React from 'react'
import Header from '../Components/Header/header'
import Nav from '../Components/Nav/nav'
import About from '../Components/About/about'
import Experience from '../Components/Experience/experience'
import Portfolio from '../Components/Portfolio/portfolio'
import Testimonials from '../Components/Testimonials/testimonials'
import Contact from '../Components/Contact/contact'
import Footer from '../Components/Footer/footer'

const home = () => {
  return (
    <div>
        
              <Header /> 
              <Nav />    
              <About />
              <Experience /> 
              <Portfolio />
              <Testimonials />
              <Contact />
              <Footer />
    </div>
  )
}

export default home

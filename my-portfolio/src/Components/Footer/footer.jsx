import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const footer = () => {
  return (
    <section id='footer'>
      <footer>
        <a href="#" className='footer_logo'>MMDS</a>

        <ul className='permalinks'>
          <li> <a href="#">Home</a> </li>
          <li> <a href="#about">About</a> </li>
          <li> <a href="#experience">Experience</a> </li>
          <li> <a href="#services">Services</a> </li>
          <li> <a href="#portfolio">Portfolio</a> </li>
          <li> <a href="#testimonials">Testinomials</a> </li>
          <li> <a href="#contact">Contact</a> </li>
        </ul>

        <div className='footer_socials'>
          
          <a href="https://www.facebook.com/profile.php?id=100070016254733"> <BsFacebook /> </a>
          <a href="https://www.instagram.com/muhammadmuzammil6880"> <FaInstagramSquare /> </a>
          <a href="https://www.linkedin.com/in/muhammad-muzammil-9b3511208"> <BsLinkedin /> </a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; MMDS. All rights reserved.</small>
        </div>
      </footer> 

    </section>
  )
}

export default footer
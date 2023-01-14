import React from 'react'
import './header.css'
import CTA from './CTA'
import IMG from '../../assets/mee.png'
import HeaderSocial from './headerSocial'
const header = () => {
  return (
    <header id='#'>
      <div className='container header_container'>
      <h5>Hi! I am</h5>
      <h1>Muhammad Muzammil</h1>
      <h5 className='text-align'>Frontend Developer</h5>

      <CTA />
      <HeaderSocial />

      <div className='me'>
        <img src={IMG} alt="" />

      </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default header
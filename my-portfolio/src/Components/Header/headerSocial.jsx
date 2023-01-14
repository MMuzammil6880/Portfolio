import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
const headerSocial = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/muhammad-muzammil-9b3511208" target='_blank'> <BsLinkedin /> </a>
      <a href="https://github.com/MMuzammil6880" target='_blank'> <BsGithub /> </a>
      <a href="https://www.facebook.com/profile.php?id=100070016254733" target='_blank'> <BsFacebook /> </a>
      <a href="https://www.instagram.com/muhammadmuzammil6880" target='_blank'> <FaInstagramSquare /> </a>
    </div>
  )
}

export default headerSocial

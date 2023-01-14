import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p1pyn88', 'template_yu1mdyx', form.current, 'Ve7EeDW9HgkFTZ2bJ')

    e.target.reset()    
  };
  return (

    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4> Email </h4>
            <h5>muhammadmuzammil6880@gmail.com</h5>
            <a href="mailto:muhammadmuzammil6880@gmail.com" target='-blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4> Messenger </h4>
            <h5>Muhammad Muzammil</h5>
            <a href="https://m.me/muhammad.muzammil" target='-blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4> WhatsApp </h4>
            <h5> +92 3162530217</h5>
            <a href="https://api.whatsapp.com/send?phone+923162530217" target='-blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="10" placeholder='Write Your Message Here' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
import React from 'react'
import './services.css'

import {BsCheck} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services in Future</h2>
      <div className='container services_container'>
          {/* UI/UX DESIGN */}
        <article className='service'>
          <div className='service_head'>
            <h3> Web Development </h3>

          </div>
        
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
         {/* WEB DESIGN */}
        <article className='service'>
          <div className='service_head'>
            <h3></h3>

          </div>
         
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          
          </ul>
        </article>
        {/* CONTENT DESIGN */}
        <article className='service'>
          <div className='service_head'>
            <h3> Content Creation</h3>

          </div>
          
          <ul className='service_list'>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default services
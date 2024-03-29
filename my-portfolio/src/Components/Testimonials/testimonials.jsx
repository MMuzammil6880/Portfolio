import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
  avatar : AVTR1,
  name: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repudiandae non velit cum odio distinctio magni assumenda suscipit enim inventore! Itaque, asperiores? Impedit dolore deleniti culpa ab voluptatem, blanditiis expedita.',
  },
  {
  avatar : AVTR2,
  name: 'Shatta Wale',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repudiandae non velit cum odio distinctio magni assumenda suscipit enim inventore! Itaque, asperiores? Impedit dolore deleniti culpa ab voluptatem, blanditiis expedita.',
  },
  
  {
  avatar : AVTR3,
  name: 'Kwame Despite',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repudiandae non velit cum odio distinctio magni assumenda suscipit enim inventore! Itaque, asperiores? Impedit dolore deleniti culpa ab voluptatem, blanditiis expedita.',
  },
  
  {
  avatar : AVTR4,
  name: 'Nana Ama McBrown',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repudiandae non velit cum odio distinctio magni assumenda suscipit enim inventore! Itaque, asperiores? Impedit dolore deleniti culpa ab voluptatem, blanditiis expedita.',
  },
  
]

const testimonials = () => {
  return (
    <section id='testinomials'>
      <h5>
        Review from client
      </h5>
      <h2>Testimonials</h2>

      <Swiper className='container testinomials_container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
  
      >
        {
          data.map(({avatar , name , review}, index) => {
            return(
              <SwiperSlide key={index} className='testinomial'>
                <div className='client_avatar'>
                  <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className='client_name'>{name}</h5>
                  <small className='client_review'>
                    {review}
                  </small>
              </SwiperSlide>

            )
            })
        }
        
      </Swiper>
    </section>
  )
}

export default testimonials
import React from 'react'
import './portfolio.css'

import { Link } from 'react-router-dom';

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpeg";



const data = [
  {
  id: 1,
  image: IMG1,
  title: 'React Portfolio',
  github: 'https://github.com/MMuzammil6880/React-Portfolio1',
  demo: 'https://mmds-portfolio2.netlify.app/'
  },
  {
  id: 2,
  image: IMG2,
  title: 'Chat GPT info Website',
  github: 'https://github.com/MMuzammil6880/GPT3_WEBSITE',
  demo: 'https://chatgptinfo-mmds.netlify.app/'
  
  },
  {
  id: 3,
  image: IMG3,
  title: 'NetFlix Clone',
  github: 'https://github.com/MMuzammil6880/NetFlix-Clone',
  demo: 'https://mmds-netflix-clone.netlify.app/'
  }
]
  
 
  
const portfolio = () => {


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'
      >
        {
          data.map(({id, image , title , github , demo}) => {
            return(
            <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
          <h3> {title} </h3>
          <div className='portfolio_items-cta'>
          <a href={github} className='btn' target='_blank'> Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
             
        </article>
     
            )
          })
        }

      </div>
      <div className="portfolio__btn">

       <Link to="/portfolio" className='btn btn-primary'>See More....</Link>

       </div>
    </section>
  )
}

export default portfolio
import React from 'react'
import './Nportfolio.css'

import { Link } from 'react-router-dom';


import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.jpeg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpeg";
import IMG6 from "../../assets/portfolio6.jpeg";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.jpeg";



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
  },
  {
  id: 4,
  image: IMG4,
  title: 'Fighting Game',
  github: 'https://github.com/MMuzammil6880/Fighting-Game',
  demo: 'https://mmds-fighting-game.netlify.app/'
  },
  {
  id: 5,
  image: IMG5,
  title: 'Rock Paper Scissors Game',
  github: 'https://github.com/MMuzammil6880/Rock-Paper-Scissor-Game',
  demo: 'https://mmds-rps-game.netlify.app/'
  },
  {
  id: 6,
  image: IMG6,
  title: 'Intelligent Calculator',
  github: 'https://github.com/MMuzammil6880/Intelligent-Calculator',
  demo: 'https://mmds-icalculator.netlify.app/'
  },
  {
  id: 7,
  image: IMG7,
  title: 'Web Intro Card',
  github: 'https://github.com/MMuzammil6880/WebInfoCard',
  demo: 'https://mmds-webinfocard.netlify.app/'
  }
  ,
  {
  id: 8,
  image: IMG8,
  title: 'Search Bar Or Filter By JS',
  github: 'https://github.com/MMuzammil6880/Search-Bar-Or-Filter-By-JavaScript',
  demo: 'https://mmds-estore.netlify.app/'
  }
  
  ]
  
const nPortfolio = () => {


  return (
    <>
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div>
      <a href="#button__portfolioo" className='portfolio__scroll_down'>Scroll Down</a>
      </div>
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



            ) } )

        }

      </div>
          <div id="button__portfolioo">

      <Link to="/" className='btn btn-primary btn__portfolio ' >Back</Link>

          </div>
          <div>
      <a href="#portfolio" className='portfolio__scroll_up'>Scroll Up</a>
      </div>
    </section>
    </>
  )
}

export default nPortfolio
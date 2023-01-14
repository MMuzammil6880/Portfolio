import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [
  {
  id: 1,
  image: IMG1,
  title: 'NetFlix Clone',
  github: 'https://github.com/MMuzammil6880/NetFlix-Clone',
  demo: 'https://mmds-netflix-clone.netlify.app/'
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
  title: 'Fighting Game',
  github: 'https://github.com/MMuzammil6880/Fighting-Game',
  demo: 'https://mmds-fighting-game.netlify.app/'
  },
  {
  id: 4,
  image: IMG4,
  title: 'Intelligent Calculator',
  github: 'https://github.com/MMuzammil6880/Intelligent-Calculator',
  demo: 'https://mmds-icalculator.netlify.app/'
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
  title: 'Charts templates & infographics',
  github: 'https://github.com',
  demo: 'https://dribbble.com/shorts/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
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
    </section>
  )
}

export default portfolio
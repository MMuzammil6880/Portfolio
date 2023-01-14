import React from 'react'
import './about.css'
import ME from '../../assets/mers.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'  
import {VscFolderLibrary} from 'react-icons/vsc' 
import {TbMicrophone2} from 'react-icons/tb'
const about = () => {
  return (
    <section id='about'>
      <h5>Set To Know</h5>
      <h2>About Me</h2>
    <div className='container about_container'>
      <div className='about_me'> 
      <div className='about_me-image'>
        <img src={ME} alt="" />
      </div>
      </div>

      <div className='about_content'>
      <div className='about_cards'>

        <article className='about_card'>
        <FaAward className='about_icon'/>
        <h5> Experience </h5>
        <small>1 years Working</small>
        </article>

        <article className='about_card'>
        <FiUsers className='about_icon'/>
        <h5> Clients </h5>
        <small>Not yet any</small>
        </article>
      
      
        <article className='about_card'>
        <VscFolderLibrary className='about_icon'/>
        <h5> Projects </h5>
        <small>50+ Comleted</small>
        </article>

        <article className='about_card'>
        <TbMicrophone2 className='about_icon'/>
        <h5> Speaker </h5>
        <small>10+ Sessions</small>
        </article>

       

      
      </div>
        <p>I am a software engineering student with a craze for learning new technologies. I have 1 year of experience as a frontend developer. I have a problem-solving ability in the management of things as well as in programming. I am also a speaker and gave many sessions to the university, college, and school students. My aim in life is to become a full stack developer and will have my own software house and also a team that makes the futures bright for those youngsters that have not any road map about their success or achieving goals.</p>

        <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      
      </div>
    </div>

      
    </section>
  )
}

export default about
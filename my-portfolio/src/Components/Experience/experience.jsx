import React from 'react'
import './experience.css'

import {ImHtmlFive2} from 'react-icons/im'
import {TbBrandCss3} from 'react-icons/tb'
import {TbBrandJavascript} from 'react-icons/tb'
import {GrReactjs} from 'react-icons/gr'



 
const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>

      {/*Front End Secsion */}
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_frontend'>
            <article className='experience_details'>
              <ImHtmlFive2 className='experience_details-icon'/>
              <div>
              <h4> HTML </h4>
              </div>
            </article>
            
            <article className='experience_details'>
              <TbBrandCss3 className='experience_details-icon'/>
              <div>
              <h4> CSS </h4>
              </div>            
            </article>
            <article className='experience_details'>
              <TbBrandJavascript className='experience_details-icon'/>
              <div>
              <h4> JavaScript </h4>
              </div>
            </article>
            <article className='experience_details'>
              <GrReactjs className='experience_details-icon'/>
              <div>
              <h4> React JS </h4>
              </div>           
            </article>

          </div>

        </div>
        {/* Back End Secsion
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_frontend'>
            <article className='experience_details'>
              <BsPatchCheckFill className='.experience_details-icon' />
              <div>
              <h4> Node JS </h4>
              <small className='text_light'> In Future </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='.experience_details-icon' />
              <div>
              <h4> MongoDB </h4>
              <small className='text_light'> In Future </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='.experience_details-icon' />
              <div>
              <h4> Express </h4>
              <small className='text_light'> In Future </small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='.experience_details-icon' />
              <div>
              <h4> PHP </h4>
              <small className='text_light'> In Future </small>
              </div>
            </article>
         

          </div> 

        </div>*/}
        </div>
     
    </section>
  )
}

export default experience
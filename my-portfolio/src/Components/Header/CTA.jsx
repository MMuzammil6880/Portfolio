import React from 'react'
import MM_Resume from '../../assets/M Muzammil_Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={MM_Resume} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA
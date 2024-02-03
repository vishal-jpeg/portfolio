import React from 'react'
import "./experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>HTML5</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>BootStrap</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
          </div>
        </div>
        {/* END OF FRONT END DEVELOPME */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>Laravel</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>MYSQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>                
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Beginner</small>
                </div>               
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
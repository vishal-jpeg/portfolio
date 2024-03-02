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
          <h3>Technical Skills</h3>
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
                  <h4>React.js</h4>
                  <small className='text-light'>Beginner</small>
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
                  <h4>SQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>HTML5/CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
          </div>
        </div>
        {/* END OF FRONT END DEVELOPME */}
        <div className="experience__backend">
          <h3>Miscellaneous & Soft Skills</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>SEO</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>Git</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>Markdown</h4>
                  <small className='text-light'>Intermediate</small>
                </div>                
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>Teamwork</h4>
                  <small className='text-light'>Experienced</small>
                </div>               
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>Documentation</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experince_details-icon'/>
                <div>
                  <h4>Problem solving</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
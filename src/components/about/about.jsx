import React from 'react'
import "./about.css"
import Image from "../../assests/me_about.png"
import { FaAward } from "react-icons/fa6";
import { VscFolderLibrary } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Image} alt="About-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ year on web development</small>
            </div>
            <div className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>5+ projects completed</small>
            </div>
            <div className="about__card">
              <GiSkills className="about__icon"/>
              <h5>Skills</h5>
              <small>Full Stack developer</small>
            </div>
          </div>
          
          <p>
            Self-taught full-stack developer with 1+ years experience in Java, Laravel,
            HTML/CSS acquired through building web apps addressing real needs during academia and 
            professional internships. Passionate about leveraging technology to uplift efficiency,
            I envision creating products that positively impact lives. Currently pursuing IT degree with
            specialized expertise in UI/UX design, databases and modern frameworks. Agile practitioner 
            who believes in tailoring engineering to delight users. Aspire to work on innovation-driven 
            platforms solving problems through a user-centric approach.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
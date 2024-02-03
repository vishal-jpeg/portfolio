import React from 'react'
import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>VISHAL</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://instagram.com/white_devil_203" target="_blank" rel="noopener"><FaInstagram /></a>
        <a href="https://github.com/vishal-jpeg"><LuGithub /></a>
        <a href="https://www.linkedin.com/in/vishal-sureshbabu-605214202/"><CiLinkedin /></a>
      </div>
    </footer>
  )
}

export default footer
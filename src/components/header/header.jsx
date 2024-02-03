import React from 'react'
import "./header.css"
import CTA from "./cta"
import ME from "../../assests/me1.png"
import HeaderSocial from './headerSocial'
import { FaArrowCircleDown } from "react-icons/fa";



const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I`m</h5>
        <h1>Vishal</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className="image">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'><FaArrowCircleDown /></a>

      </div>
    </header>
  )
}

export default header
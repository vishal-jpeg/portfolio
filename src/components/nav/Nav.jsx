import React from 'react'
import "./Nav.css"
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { BiBook } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import {useState} from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}  className={activeNav === '#'? 'active' : '' } ><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about'? 'active' : '' }><FaRegUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experince')}  className={activeNav === '#experince'? 'active' : '' }><BiBook /></a>
      <a href="#portfolio " onClick={() => setActiveNav('#portfolio ')}  className={activeNav === '#portfolio '? 'active' : '' }><FaCode /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact'? 'active' : '' }><MdOutlineContacts /></a>
    </nav>
  )
}

export default Nav
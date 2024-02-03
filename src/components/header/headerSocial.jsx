import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



const headerSocial = () => {
  return (
    <div className='headerSocial'>
      <a href="https://www.linkedin.com/in/vishal-sureshbabu-605214202" target='_blank' ><BsLinkedin /></a>
      <a href="https://github.com/vishal-jpeg" target='_blank' ><FaGithubSquare /></a>
      <a href="mailto:vishnuvaradhan207@gmail.com" target='_blank'><IoMdMail /></a>
    </div>
  )
}

export default headerSocial
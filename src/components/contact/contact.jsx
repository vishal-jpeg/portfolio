import React from 'react'
import "./contact.css"
import { IoMailOutline } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { useRef } from 'react'
import emailjs from  'emailjs-com'
import { useState } from 'react';

const Contact = () => {
  const form = useRef(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v5c4chw', 'template_46eho5r', form.current, '7nMcIxZ8wBgX2IQKz')
      .then((result) => {
          console.log(result.text);
          setShowSuccessMessage(true);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      {showSuccessMessage && <p className="success-message">The message has been received. I will get back to you shortly.</p>}
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <IoMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vishnuvaradhan@gmail.com</h5>
            <a href="mailto:vishnuvaradhan207@gmail.com" target="_blank">Send a message</a>
          </article>
          {/* <article className="contact__option">
            <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Vishal</h5>
            <a href="https://instagram.com/white_devil_203" target="_blank">Send a message</a>
          </article> */}
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8778761127</h5>
            <a href="https://wa.me/+918778761127" target="_blank" rel="noopener">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <input type="text" name="name" id="name" placeholder='Enter your full name' required/>
          <input type="email" name="email" id="email" placeholder='Enter your email' required />
          <textarea name="message" id="message"  rows="7" placeholder='Enter your message' required ></textarea>
          <button type='submit'className='btn btn-primary'id="contactBtn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
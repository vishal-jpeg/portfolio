import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assests/p1.png'
import IMG2 from '../../assests/p2.png'
import IMG3 from '../../assests/p3.png'

const data=[
  {
    id:1,
    image:IMG1,
    title: 'A web app for medical awarness on schemes and camps ',
    github:'https://github.com/vishal-jpeg/mediware',
  },
  {
    id:2,
    image:IMG2,
    title: 'Custom authentication module in Laravel framework internship project',
    github:'https://www.github.com/',
  },
  {
    id:3,
    image:IMG3,
    title: 'Radiology Equipment Monitoring for Hospital Administration with IOT',
    github:'https://github.com/vishal-jpeg/energy_monitoring',
  }
]


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="conatiner portfolio__container">
        {
          data.map(({id, image, title, github, linkedIn })=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title}/>
              </div>
              <h3>{title}</h3> 
                <a href={github} className='btn btn-primary' target='_blank'>GitHub</a>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio
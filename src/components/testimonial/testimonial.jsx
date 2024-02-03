import React from 'react'
import "./testimonial.css"
import AVTR1 from '../../assests/a1.png'
import AVTR2 from '../../assests/a2.png'
import AVTR3 from '../../assests/a3.png'

// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

const data=[
  {
    avatar:AVTR1,
    name:'FAER Scholor Award 2023-24',
    review:'My project, titled "Real-time Detection of Normal Sinus Rhythm, Arrhythmias, and Congestive Heart Failure from ECG," has successfully advanced to the first stage of the FAER Scholar Award 2023-24. The list of shortlisted projects, including mine, can be found as the 18th project on the FAER Scholar Awards website: https://www.faer.ac.in/2324-faer-scholar-awards. '
  },
  {
    avatar:AVTR2,
    name:'Smart India Hackathon 2023',
    review:'Our team of six members achieved the 2nd prize in the Internal Smart India Hackathon, earning a prize of Rs 3000. Our project addressed the problem statement of student innovations in Meditech, focusing on creating a Portable ECG machine. This innovative device not only conducts ECG analysis but also delivers results based on specific medical conditions.'
  },
  {
    avatar:AVTR3,
    name:'MSME Hackathon 2022',
    review:'Our team, consisting of three members, participated in this initiative, focusing on our project centered around a Hybrid Solar Vehicle. Our proposal secured selection in our incubation center within Chennai, effectively addressing the problem statement related to renewable energy-based vehicles.The Project is in stall due to no further updates from msme to inbucation center '
  },
]

const testimonial = () => {
  return (
    <section id='testimonial'> 
      <h5>Some of my</h5>
      <h2>Acheivements</h2>
      <Swiper className="container testimonials__container"
       modules={[Navigation,Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}>
       {
        data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="avatar one" />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review} </small>
          </SwiperSlide>
          )
        })
       }
      </Swiper>

    </section>
  )
}

export default testimonial
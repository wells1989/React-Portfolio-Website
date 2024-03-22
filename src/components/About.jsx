import React from 'react';
import { Tilt } from 'react-tilt';;

import { styles } from '../styles';
import { services } from '../constants';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="mt-5 ml-20 mr-20 green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      id={"about"}>

      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[150px] min-w-[150px] flex justify-center items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-gold mt-5 text-[24px] font-bold">{title}</h3>
      </div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className="relative mx-auto mt-10 flex flex-col text-center justify-center">
      <h2 className={`${styles.sectionHeadText}`}>About</h2>
      <ul className={`${styles.heroSubText} leading-20 m-5 p-5 text-xs sm:text-base md:text-lg `}>
        <li>I'm extremely passionate about working with all aspects of development.</li>
        <br></br>
        <li>My Prior experience in finance / academia means I can effectively communicate / adapt to new environments.</li>
        <br></br>
        <li>I'm looking for new opportunities in a team focused, collaborative environment!</li>
      </ul>

      <div className="justify-center mt-5 w-full flex flex-row flex-wrap gap-5">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "About");

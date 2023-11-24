import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion }  from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ExperienceCard = ({ experience }) => {
  return (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain " />
      </div>
    }
  >
    <div>
      <h3 className="text-gold text-[24px] font-bold">{experience.title}</h3>
      <p className="font-semibold">
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point, index) => (
      <li
      key={`experience-point-${index}`}
      className="text-white-100 text-[14px] p-1 tracking-wider"
      >
        {point}
      </li>
    ))}
    </ul>
    
  </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText} text-center m-5 p-5`}>My Experience so far</h2>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");

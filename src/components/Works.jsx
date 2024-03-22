import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { github } from '../assets'
import SectionWrapper from '../hoc/SectionWrapper'
import { projects } from '../constants'


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl w-full h-full sm:w-[360px]"
    >
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={github} alt="github"
              className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>

      </div>

      <div className="mt-5">
        <h3 className="font-bold text-gold text-center m-2">{name}</h3>
        <p className="text-center">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <p key={tag.name} className={`${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>

    </Tilt>
  )

}

const Works = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText} text-center m-5 p-5`}>Some of My Projects...</h2>

      <div className="mt-20 flex flex-wrap justify-around gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.index}
            index={index}
            {...project}
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works, "Professional");
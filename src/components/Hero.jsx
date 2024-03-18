import React from 'react'
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[600px] lg:h-[800px] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] md:top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FFD700]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className=" flex flex-col items-center justify-center text-center">
          <h1 className={`${styles.heroHeadText} pt-3 text-base sm:text-lg md:text-lg`}>I'm Paul, <span className="underline"
          > a Full Stack Developer</span></h1>
          <ul className={`${styles.heroSubText} text-xs sm:text-base md:text-lg list-none m-3`}>
            <br></br>

            <li>
              I am a driven and passionate programmer with over 1.5 years of hands-on experience across a range of technologies
            </li>
            <br></br>
            <li>
              I have completed both more comprehensive Full Stack courses in addition to specialist courses on the Front and Back end
            </li>
            <br></br>
            <li>
              I have a varied Portfolio including numerous Front and Back end projects
            </li>
          </ul>
        </div>
      </div>


    </section>
  )
}

export default Hero

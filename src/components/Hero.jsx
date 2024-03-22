import React from 'react'
import { styles } from '../styles';
import { ASCII_art, Software_dev } from "../constants";
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {

  return (
    <section className="relative w-full h-[400px] sm:h-[650px] md:h-[700px] lg:h-[900px] mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[70px] md:top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FFD700]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className=" flex flex-col items-center justify-center text-center">
          <h1 className={`${styles.heroHeadText} pt-5 m-5`}>Paul Wells</h1>

          <div className="w-3/4 h-1/2 m-3 relative">
            <video controls autoplay muted className="w=full">
              <source src={Software_dev} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className='flex flex-row flex-wrap justify-center align-center gap-10 mb-10'>
            <AnimatePresence>
              {ASCII_art.map((art, index) => (
                <motion.div
                  key={art.name}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 2, delay: index * 1 }}
                  className='w-12 h-12 sm:w-18 sm:h-18 md:w-22 md:h-22'
                >
                  <img src={art.icon} alt="tech" className="w-full h-full m-2 relative z-1" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Hero

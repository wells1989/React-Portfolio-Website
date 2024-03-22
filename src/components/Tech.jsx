import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import { styles } from '../styles';
import { motion, AnimatePresence } from 'framer-motion';

const Tech = () => {
  const softSkills = ['Cross-functional teamwork', 'Client Management', 'Business Strategy / Finance', 'Data Analysis', 'Database integration'];

  return (
    <div className="relative mx-auto flex flex-col text-center justify-center">
      <h2 className={`${styles.sectionHeadText}`}>Skills</h2>

      <div className='flex flex-row flex-wrap justify-center align-center gap-5 sm:gap-20 mt-10'>
        {softSkills.map((skill, index) => (
          <p className="text-gold text-[10px] sm:text-[16px] md:text-[24px] font-bold">{skill}</p>))}
      </div>

      <div className='flex flex-row flex-wrap justify-center align-center gap-10 mt-10'>
        <AnimatePresence>
          {technologies.map((technology, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className='w-20 h-20 md:w-28 md:h-28'>
              <img src={technology.icon} alt="tech" className="m-2" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default SectionWrapper(Tech, "Skills");

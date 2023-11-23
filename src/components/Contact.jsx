import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import SectionWrapper from '../hoc/SectionWrapper';
import { slideIn } from '../utils/motion';

const Contact = () => {

  const formRef = useRef();

  const[form, setForm] = useState({
    name:'',
    email: '',
    message: ''
  })
  const[loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send('service_n8br53i', 'template_j3m09uk', {
      from_name: form.name,
      to_name: 'Paul',
      from_email: form.email,
      to_email: 'wellspaul554@gmail.com',
      message: form.message,
    },
    '2sSqlbqyCxbfzVMaH')

    .then(() => {
      setLoading(false);
      alert("email sent successfully")

      setForm({
        name:'',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false)

      console.log(error)
      alert("error sending email")
    })
  }
  return (
    <div className="xl:mt-12 flex-col-reverse justify-center flex gap-10 overflow-hidden">
      
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className="flex-[0.75] bg-gold-pattern p-8 rounded-2xl">
        <h3 className={`${styles.sectionHeadText} text-center`}>Contact</h3>
      
        <form ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-bold m-3">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="type your name in here ..." className="bg-tertiary leading-10 p-4 placeholder:text-secondary text-white rounded-lg"/> 
           </label>

           <label className="flex flex-col">
            <span className="text-bold m-3">Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="type your email in here ..." className="bg-tertiary leading-10 p-4 placeholder:text-secondary text-white rounded-lg"/> 
           </label>

           <label className="flex flex-col">
            <span className="text-bold m-3">Message</span>
            <textarea rows="5" name="message" value={form.message} onChange={handleChange} placeholder="How can I help you today?" className="bg-tertiary leading-10 p-4 placeholder:text-secondary text-white rounded-lg"/> 
           </label>

          <div className="flex flex-row justify-end align-center">
            <button
            type="submit"
            className="bg-tertiary h-[40px] m-3 leading-5 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded hover:bg-blue-600"
            >
              {loading ? "Sending ..." : "Submit"}
            </button>
            <EarthCanvas className="w-[0.5] "/>
          </div>
      
        </form>
      
      </motion.div>
    
    </div>
  )
}

export default SectionWrapper(Contact, "contact");
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close, pw_logo } from '../assets';
import { github } from '../assets';
import { linkedin } from '../assets';

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-around items-center max-w-7xl mx-auto">
        <Link to='/' className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}>
          <img src='https://github.com/wells1989/React-Portfolio-Website/blob/main/src/assets/pw-high-resolution-logo-transparent.png?raw=true' alt="logo" className="w-9 h-9 object-contain" />
        </Link>

        <div
          onClick={() => window.open("https://github.com/wells1989?tab=repositories", "_blank")}
          className="black-gradient w-10 h-10 rounded-full cursor-pointer">
          <img src={github} alt="github"
            className="w-full h-full object-contain" />
        </div>

        <div
          onClick={() => window.open("https://www.linkedin.com/in/paul-david-wells/", "_blank")}
          className="black-gradient w-10 h-10 rounded-full cursor-pointer">
          <img src={linkedin} alt="linkedin"
            className="w-full h-full object-contain" />
        </div>

        <ul className="list-none hidden md:flex flex-row gap-10 ">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text=[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a> {/*redirect to section / component id?*/}
            </li>
          ))}
        </ul>

        {/*mobile nav bar*/}
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a> {/*redirect to section / component id?*/}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

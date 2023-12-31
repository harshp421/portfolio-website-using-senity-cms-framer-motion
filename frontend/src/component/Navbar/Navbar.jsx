import React, { useState } from 'react'
import "./Navbar.scss"
import { images } from '../../constant'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* <img src={images.logo} alt="" srcset="" /> */}
      </div>
      {/* code for the nevbar */}
       <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}> <div /><a href={`#${item}`}>{item}</a></li>
        ))}
        <li className='app__flex p-text'> <div/><a href="https://drive.google.com/file/d/1QBRCYm1548rljeosfvfw7CPeLPZWmJW2/view?usp=sharing" target="_blank">Resume</a></li>
      </ul>
    {/* code for the manuicon */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {
          toggle && (     //it mean when toggle is true it show on screeen
            <motion.div whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }} >
              <HiX onClick={() => setToggle(false)} />
              <ul >
                {['home', 'about', 'work', 'skills', 'contact','Resume'].map((item) => (
                  <li key={`${item}`}> <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a></li>
                ))}
                <li className='app__flex p-text'> <div/><a href="https://drive.google.com/file/d/1QBRCYm1548rljeosfvfw7CPeLPZWmJW2/view?usp=sharing" target="_blank">Resume</a></li>
              </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar
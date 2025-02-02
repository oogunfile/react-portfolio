import React from 'react'
import {HERO_CONTENT} from '../constants'
import profileImg from '../assets/profileImg.jpg'
import { motion } from "motion/react"


const Hero = () => {
  const container = (delay) =>({
    hidden: {x:-100, opacity:0},
    visible:{x:0, opacity:1,
      transition:{duration:0.5, delay:delay},
    }
  })
  return (
<div className="border-b border-neutral-900 pb-4 lg:mb-36 mt-16">
  <div className="flex flex-wrap items-center justify-center lg:justify-between">
    <div className="w-full lg:w-1/2">
    <div className='flex flex-col items-center lg:items-start text-center lg:text-left px-6'>
      <motion.h1 
    variants={container(0)}
    initial="hidden"
    animate= "visible"
      className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl
       text-blue-800">
        Oluwaseun Ogunfile
      </motion.h1>
      <motion.span 
     variants={container(0.5)}
     initial="hidden"
     animate= "visible"
      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
      tracking-tight text-transparent text-3xl">
        Full Stack Developer
      </motion.span>
      <motion.p 
      variants={container(1)}
      initial="hidden"
      animate= "visible"
      className="my-2 max-w-xl py-6 font-light tracking-tighter text-black text-justify">
        {HERO_CONTENT}
      </motion.p>
      </div>
    </div>
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8">
      <motion.img
      initial={{ x: 100, opacity:0 }} 
      animate={{ x:0, opacity:1 }}
      transition={{duration:1, delay:1.2}}
       className="rounded-xl lg:mt-20 w-72 md:w-96 lg:w-full" src={profileImg} alt="Profile Image"/>
    </div>

  </div>
</div>

  )
}

export default Hero

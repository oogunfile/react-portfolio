import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import {DiRedis } from 'react-icons/di'
import { FaNodeJs} from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { RiNextjsFill } from 'react-icons/ri'
import { motion } from 'motion/react'
import { MdOpacity } from 'react-icons/md'
import { DiJavascript } from "react-icons/di"
import { FaPython } from "react-icons/fa";
import c from "../assets/c++.png"
import { FaGitSquare } from "react-icons/fa";

const Technologies = () => {
  const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
      y:[10,-10],
       transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
      repeatType: "reverse", },
       }
  })
  return (
    <div className='border-b border-neutral-800  pb-2'>
      <h2 className='my-10 text-center text-4xl text-blue-900'>Technologies</h2>
      <motion.div 
      whileInView={{opacity:1, y:0}}
      initial = {{opacity:0, y:-100}}
      transition= {{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
        variants= {iconVariants(2.5)} 
        initial ="initial"
        animate = "animate"
        className='rounded-2xl flex flex-col items-center justify-center border-2 bg-neutral-200 border-blue-800 p-4'> 
            <RiReactjsLine className='text-5xl text-blue-400'/>
            <p className='text-sm text-blue-400  text-center'>React</p>
        </motion.div>
        <motion.div 
          variants= {iconVariants(4)} 
          initial ="initial"
          animate = "animate"
          className='rounded-2xl   border-2 flex flex-col items-center justify-centerborder-2 border-blue-800 p-4'> 
            < RiNextjsFill className='text-5xl text-black-400'/>
            <p className='text-sm text-blue-400  text-center'>Next.js</p>
        </motion.div>
        <motion.div 
          variants= {iconVariants(2.5)} 
          initial ="initial"
          animate = "animate"
          className='rounded-2xl   border-2 flex flex-col items-center justify-centerborder-2 border-blue-800 p-4'> 
            <DiRedis className='text-5xl text-red-400'/>
            <p className='text-sm text-blue-400  text-center'>Redis</p>
        </motion.div>
        <motion.div c
          variants= {iconVariants(4)} 
          initial ="initial"
          animate = "animate"
          className='rounded-2xl   border-2 flex flex-col items-center justify-centerborder-2 border-blue-800 p-4'> 
            <FaNodeJs className='text-5xl text-black-900'/>
            <p className='text-sm text-blue-400  text-center'>Node.js</p>
        </motion.div>
        <motion.div 
          variants= {iconVariants(2.5)} 
          initial ="initial"
          animate = "animate"
          className='rounded-2xl   border-2 flex flex-col items-center justify-centerborder-2 border-blue-800 p-4'> 
            <FaPython className='text-5xl text-red-400'/>
            <p className='text-sm text-blue-400  text-center'>Python</p>
        </motion.div>
        <motion.div 
          variants= {iconVariants(4)} 
          initial ="initial"
          animate = "animate"
          className='rounded-2xl  bg-neutral-200 border-2 flex flex-col items-center justify-centerborder-2 border-blue-800 p-4'>  
            < FaGitSquare className='text-5xl text-blue-400'/>
            <p className='text-sm text-blue-400  text-center'>Git</p>
        </motion.div>
      
        <motion.div 
      whileInView={{opacity:1, y:0}}
      initial = {{opacity:0, y:-100}}
      transition= {{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
          variants= {iconVariants(2.5)} 
          initial ="initial"
          animate = "animate"
          className='rounded-2xl flex flex-col items-center justify-center border-2 bg-neutral-200 border-blue-800 p-4'> 
            <BiLogoPostgresql className='text-5xl  text-blue-400'/>
            <p className='text-xs text-blue-400  text-center'>PostgreSQL</p>
        </motion.div>

        <motion.div 
          variants= {iconVariants(4)} 
          initial ="initial"
          animate = "animate"
          className='rounded-2xl   border-2 flex flex-col items-center justify-centerborder-2 border-blue-800 p-4'> 
            <DiJavascript  className='text-5xl text-black-900'/>
            <p className='text-sm text-blue-400  text-center'>Javascript</p>
        </motion.div>
        
        <motion.div 
          variants= {iconVariants(2.5)} 
          initial ="initial"
          animate = "animate"
          className='rounded-2xl flex flex-col items-center justify-center border-2 bg-neutral-200 border-blue-800 p-4'> 
           <img className=" w-12 mx-2  rounded-full " src={c} alt="image of a flower in a hand"/>

            <p className='text-sm text-blue-400  text-center'>C++</p>
        </motion.div>
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies

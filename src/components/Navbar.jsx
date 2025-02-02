import React from 'react'
import logo from "../assets/screencode.jpg"
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'

const Navbar = () => {

  return (
    <nav className="bg-blue-900 w-full fixed h-12 top-0 left-0  mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            <img className="px-7 w-24 mx-2  rounded-full " src={logo} alt="image of a flower in a hand"/>
        </div>
        <div className='m-10 flex items-center justify-center gap-4 txt-2xl'>
            <FaLinkedinIn/>
            <FaGithub />
        </div>
    </nav>
  )
}

export default Navbar

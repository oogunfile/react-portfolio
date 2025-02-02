import React from 'react'
import {CONTACT} from '../constants'

const contact = () => {
  return (
    <div className=" text-neutral-500 pb-20 flex flex-col justify-center items-center">
      <h1 className="my-10 text-center text-4xl">
        Let's connect and build something amazing together!
      </h1>
      <div className='flex gap-3'>
      <button className="shadow-md rounded-md">
        <a 
          href={CONTACT.linkdin} 
          target="_blank" 
          className="flex items-center justify-center px-4 border-b bg-blue-200 text-blue-600 
          hover:bg-blue-600 hover:text-white transition rounded-md"
        >
          LinkedIn
        </a>
      </button>
      <button className="shadow-md rounded-md">
        <a 
          href={CONTACT.github} 
          target="_blank" 
          className="flex items-center justify-center px-4 border-b bg-blue-200 text-blue-600 
          hover:bg-blue-600 hover:text-white transition rounded-md"
        >
          Github
        </a>
      </button>
      </div>
      
</div>

  )
}

export default contact

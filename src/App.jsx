import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Project from './components/Project'
import Contact from './components/Contact'
const App=() =>{
  return (
  <div className='overflow-x-hidden bg-sky-50 text-neutral-400 
  antialiased selection:bg-blue-300 selection:text-blue-900'> 
    {/* <div className='fixed top-0 -z-10 h-full w-full'>
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px]
       -translate-x-[30%] translate-y-[20%] rounded-full
        bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]">
          </div>
          </div>
  </div> */}
    <div className="container mx-auto px-8">
      <Navbar />
      <Hero/>
      <About/>
      <Technologies/>
      <Project />
      <Contact/>
      </div> 
  </div>)
}
export default App
import { section } from 'motion/react-client'
import React from 'react'
import CollaborateButton from './Ui.jsx/CollaborateButton'


export default function Landingpage() {
  return (
    <section>
      <div className='text-[#ffffff] font-wix2 text-4xl  md:text-8xl md:pt-[8vw]  flex flex-col justify-center items-center'>
        <h1 className=''>Frontend</h1>
        <h1 className=''>Web Developer</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 md:px-0 py-6 font-wix2">
      
          <button className=" bg-white text-black font-extralight text-2xl px-4 py-2 md:px-6 md:py-3 rounded-2xl hover:px-8 md:hover:px-10 transition-all duration-300">
            Hire me
          </button>
          <CollaborateButton/>
        
      </div>
      </section>
    
  )
}

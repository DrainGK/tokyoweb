import React from 'react'
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='h-[25vh] w-full bg-[#364044] flex flex-col items-center justify-center text-white gap-y-2 relative z-10'>
        <p className='text-5xl text-slate-300'><a href="/">Tokyo Web <p className="text-xs font-[Oswald] font-light text-slate-300">by Guillaume</p></a></p>
        <p className='text-lg font-light font-[Oswald] text-slate-300'>Copyright 2024 © Guillaume Lopez</p>
        <div className='text-2xl'>
          <a href="https://www.linkedin.com/in/guillaume-lopez-7747181a1/"
        target="_blank"><FaLinkedin /></a>
            
        </div>
    </footer>
  )
}

export default Footer
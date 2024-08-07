import React from 'react';
import transition from '../transition';
import { Link } from 'react-router-dom';
import Form from './Form';
import Footer from './Footer';

const Contact = () => {
  return (
    <main className='h-fit bg-[#435055] text-white relative z-10' style={{fontFamily: "Huntsman"}}>
        <div className='h-full w-full bg-cover opacity-5 absolute z-[0]'/>
        <section className='w-[90%] md:w-[60%] py-9 mx-auto flex flex-col gap-y-8 relative z-[1]'>
          <button
            className='
              relative w-fit z-0 flex items-center gap-2 overflow-hidden border-[1px] 
              border-white px-5 py-3 font-[Oswald] font-light
              uppercase text-white transition-all duration-500 md:text-2xl text-lg
              rounded-full
              
              before:absolute before:inset-0
              before:-z-10 before:translate-x-[150%]
              before:translate-y-[150%] before:scale-[2.5]
              before:rounded-[100%] before:bg-white
              before:transition-transform before:duration-1000
              before:content-[""]

              hover:scale-105 hover:text-[#FFA41B]
              hover:before:translate-x-[0%]
              hover:before:translate-y-[0%]
              active:scale-95'
          >
            <Link to="/">Back to Home</Link>
          </button>
          <Form />
        </section>
        <Footer />
    </main>
  );
}

export default transition(Contact);

import React from 'react'
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

function MeCard(
  ) {
  return (
    <motion.div whileHover="hover" whileTap="hover" className=" md:w-1/2 h-1/2 md:h-2/3 relative font-[Oswald]">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <h3 className="text-4xl mb-2 font-[Huntsman] text-[#FFA41B]">Guillaume Lopez</h3>
        <h4 className="text-2xl mb-2 font-thin text-slate-300">Founder</h4>
        <p className="h-1/2 md:h-full text-sm font-light text-slate-300 overflow-y-auto">Hi! I'm Guillaume Lopez, a front-end engineer and designer based in Tokyo. I believe that a well-designed website is our showroom and identity in the virtual world, and it's important not to neglect it. My goal is to help businesses and individuals create visually appealing and functional websites that resonate with their audience. By understanding your unique needs and vision, I strive to deliver solutions that enhance your digital presence and engage your customers. Let's work together to bring your ideas to life.</p>
      </div>
      <motion.div
        
        className="absolute inset-0 bg-slate-200 z-10 border-black"
        style={{
          backgroundImage: "url(/guillaumeOpenAi.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          top: "50%",
          right: "50%",
        }}
      />
      <a
        href="https://www.linkedin.com/in/guillaume-lopez-7747181a1/"
        target="_blank"
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-[#FFA41B] transition-colors"
      >
        <div className="flex items-center">
          <span className="text-lg">CONTACT ME</span>
          <FiArrowUpRight className="text-xl" />
        </div>
      </a>
    </motion.div>
  );
};

export default MeCard
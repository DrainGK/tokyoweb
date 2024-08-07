import React from 'react';
import { Link } from 'react-router-dom';

const BookButton = () => {
  return (
    <Link to="/Contact">
      <button
        className={`
          relative w-fit z-0 flex items-center gap-2 overflow-hidden border-[1px] 
          border-[#FFA41B] px-4 py-2 font-[Oswald] font-light
          uppercase text-[#FFA41B] transition-all duration-500 md:text-md text-sm
          
          before:absolute before:inset-0
          before:-z-10 before:translate-x-[150%]
          before:translate-y-[150%] before:scale-[2.5]
          before:rounded-[100%] before:bg-[#FFA41B]
          before:transition-transform before:duration-1000
          before:content-[""]

          hover:scale-105 hover:text-white
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          active:scale-95`}
      >
        + Become a client
      </button>
    </Link>
  );
};

export default BookButton;
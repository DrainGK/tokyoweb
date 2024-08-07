import React from 'react';
import { motion } from 'framer-motion';

interface MovingTextProps {
    reverse: boolean;
    text: string;
  }

function MovingText({reverse, text}: MovingTextProps) {
  return (
    <motion.div
        initial={{ x: reverse ? "-100%" : "0%"}}
        animate={{ x: reverse ? "0%" : "-100%"}}
        transition={{ duration: 21, repeat: Infinity, ease: "linear"}}
        className='w-[120%] text-[150px]'
    >
        {text}
    </motion.div>
  )
}

export default MovingText
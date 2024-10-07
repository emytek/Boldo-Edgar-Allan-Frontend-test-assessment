import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = () => {
  return (
    <div className="flex flex-col self-stretch pt-2 pr-4 my-auto text-base min-w-[240px] rounded-[56px] w-[601px] max-md:max-w-full pb-4 pl-8 lg:pl-0">
      <h1 className="mt-9 text-5xl text-neutral leading-[72px] max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
        Save time by building fast with Boldo Template
      </h1>
      <p className="mt-5 leading-7 max-md:max-w-full text-neutral">
        Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
      </p>
      <div className="flex gap-5 justify-between mt-16 max-w-full text-xl font-bold leading-snug w-[458px] max-md:mt-10">
      <motion.button
        className="gap-2 self-stretch px-14 py-4 text-primary border-2 border-solid bg-secondary min-h-[60px] rounded-[56px] max-md:px-5"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }} 
        whileHover={{ scale: 1.05, backgroundColor: '#D1E8FF' }} 
        whileTap={{ scale: 0.95 }} 
      >
        Buy template
      </motion.button>

      <motion.button
        className="gap-2 self-stretch px-14 py-4 whitespace-nowrap border-2 border-solid border-neutral min-h-[60px] rounded-[56px] text-neutral max-md:px-5"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        whileHover={{ scale: 1.05, backgroundColor: '#EAEAEA', color: '#0A2640' }} 
        whileTap={{ scale: 0.95 }} 
      >
        Explore
      </motion.button>
    </div>
    </div>
  );
};

export default HeroContent;
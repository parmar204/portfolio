import React, { useState, useEffect } from 'react';
import { navlinks } from '../assets/assets';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (toggleMenu) {
        setToggleMenu(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleMenu]); 

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className='sticky drop-shadow-xl bg-white/80 backdrop-blur-sm top-4 mx-[7%] rounded-full py-2.5 px-5 flex items-center justify-between gap-6 z-50'>
        <p className='text-xl font-bold text-gray-800 tracking-wide'>Govind</p>
        <div className='hidden md:flex items-center gap-6'>
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className='text-gray-600 hover:text-blue-700 transition-colors duration-200 text-lg font-medium'
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href='#contact'
          className='hidden md:inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg'
        >
          Contact Us
        </a>

        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className='md:hidden text-gray-800 focus:outline-none'
          aria-expanded={toggleMenu}
          aria-controls="mobile-menu"
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            {toggleMenu ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            )}
          </svg>
        </button>
      </div>

        <AnimatePresence>
            {toggleMenu && (
                <motion.div
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    id="mobile-menu"
                    className='md:hidden bg-white/95 backdrop-blur-sm drop-shadow-xl rounded-lg mx-[7%] p-4 pb-6 mt-[30px] relative z-40'
                    >
                    <div className='flex flex-col items-center space-y-4'>
                        {navlinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setToggleMenu(false)} 
                            className='text-gray-700 hover:text-blue-700 transition-colors duration-200 text-lg font-medium w-full text-center py-2'
                        >
                            {link.name}
                        </a>
                        ))}
                        <a
                        href='#contact'
                        onClick={() => setToggleMenu(false)}
                        className='bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg w-full text-center'
                        >
                        Contact Us
                        </a>
                    </div>
                </motion.div>
            )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
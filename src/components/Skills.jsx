import React from 'react'
import { portfolioData } from '../assets/assets'
import { motion } from 'framer-motion';

const Skills = () => {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)", 
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id='skill'
      className='py-16 px-[7%] bg-gradient-to-br from-[#f0fff0] to-[#E0FFFF] min-h-screen flex flex-col justify-center'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Animate only once when 20% of element is in view
    >
      <motion.h2
        className='text-4xl md:text-5xl font-extrabold text-center mb-12 text-color-primary'
        variants={titleVariants}
      >
        My Skills
      </motion.h2>

      <div className='max-w-6xl mx-auto w-full'>
        {/* Frontend Skills Section */}
        <motion.div className='mb-16' variants={categoryVariants}>
          <motion.h3
            className='text-3xl font-bold text-color-secondary mb-8 text-center md:text-left'
            variants={titleVariants} // Re-using titleVariants for subheadings
          >
            Frontend
          </motion.h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {portfolioData.skills.frontend.map((item, index) => (
              <motion.div
                key={index}
                className='flex flex-col items-center p-4 bg-white rounded-lg shadow-lg cursor-pointer'
                variants={skillItemVariants}
                whileHover="hover" // Apply hover animation
              >
                <img src={item.icon} alt={item.name} className='w-16 h-16 mb-3 object-contain' />
                <p className='text-gray-800 font-medium text-lg text-center'>{item.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend Skills Section */}
        <motion.div className='mb-16' variants={categoryVariants}>
          <motion.h3
            className='text-3xl font-bold text-color-secondary mb-8 text-center md:text-left'
            variants={titleVariants}
          >
            Backend
          </motion.h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {portfolioData.skills.backend.map((item, index) => (
              <motion.div
                key={index}
                className='flex flex-col items-center p-4 bg-white rounded-lg shadow-lg cursor-pointer'
                variants={skillItemVariants}
                whileHover="hover"
              >
                <img src={item.icon} alt={item.name} className='w-16 h-16 mb-3 object-contain' />
                <p className='text-gray-800 font-medium text-lg text-center'>{item.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div variants={categoryVariants}>
          <motion.h3
            className='text-3xl font-bold text-color-secondary mb-8 text-center md:text-left'
            variants={titleVariants}
          >
            Tools
          </motion.h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {portfolioData.skills.tools.map((item, index) => (
              <motion.div
                key={index}
                className='flex flex-col items-center p-4 bg-white rounded-lg shadow-lg cursor-pointer'
                variants={skillItemVariants}
                whileHover="hover"
              >
                <img src={item.icon} alt={item.name} className='w-16 h-16 mb-3 object-contain' />
                <p className='text-gray-800 font-medium text-lg text-center'>{item.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
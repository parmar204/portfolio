import React from 'react'
import { motion } from 'framer-motion';
import { portfolioData } from '../assets/assets';

const Education = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <motion.section
      id='education'
      className='py-16 px-[7%] bg-gradient-to-br from-[#f0fff0] to-[#E0FFFF] min-h-screen flex flex-col justify-center'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className='text-4xl md:text-5xl font-extrabold text-center mb-12 text-color-primary'
        variants={titleVariants}
      >
        My Education
      </motion.h2>

      <div className='max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
        {portfolioData.education.map((edu, index) => (
          <motion.div
            key={index}
            className='bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between cursor-pointer'
            variants={cardVariants}
            whileHover="hover"
          >
            <div>
              <h3 className='text-2xl font-bold text-color-secondary mb-2'>
                {edu.degree}
              </h3>
              <p className='text-lg text-gray-700 mb-3'>
                {edu.institution}
              </p>
              <p className='text-md text-gray-600'>
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education
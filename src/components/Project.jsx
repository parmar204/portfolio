import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../assets/assets';
import { FaGithub } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 10,
    },
  },
  hover: {
    scale: 1.04,
    transition: { type: 'spring', stiffness: 300 },
  },
};

const Project = () => {
  return (
    <motion.section
      id='Project'
      className='py-20 px-[5%] bg-gradient-to-tr from-[#fdfbfb] to-[#ebedee] min-h-screen'
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className='text-5xl font-extrabold text-center mb-16 text-gray-800'
        variants={titleVariants}
      >
        🚀 My Projects
      </motion.h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index}
            className='relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group'
            variants={cardVariants}
            whileHover='hover'
          >
            {/* Project Image with Overlay */}
            <div className='relative h-56 overflow-hidden'>
              <img
                src={project.image}
                alt={project.name}
                className='w-full h-full transition-transform duration-500 group-hover:scale-110'
              />
            </div>

            {/* Project Info */}
            <div className='p-6 flex flex-col h-[260px]'>
              <h3 className='text-xl font-bold text-gray-800 mb-2'>
                {project.name}
              </h3>
              <p className='text-gray-600 text-sm flex-grow'>{project.description}</p>

              {/* Button */}
              <motion.a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-6 inline-flex items-center gap-2 self-start bg-gray-800 text-white hover:bg-gray-900 px-5 py-2.5 rounded-full font-medium shadow-lg transition-all duration-200'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className='text-lg' />
                View on GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Project;

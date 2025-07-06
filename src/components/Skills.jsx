import React from 'react'
import { portfolioData } from '../assets/assets'
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 10,
    },
  },
  hover: {
    scale: 1.08,
    rotate: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const Skills = () => {
  const renderCategory = (title, items, color) => (
    <motion.div className="mb-20" variants={cardVariants}>
      <motion.h3
        className={`text-3xl font-bold mb-10 text-center md:text-left ${color}`}
        variants={titleVariants}
      >
        {title}
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/30 cursor-pointer hover:shadow-xl transition duration-300"
            variants={cardVariants}
            whileHover="hover"
          >
            <img src={item.icon} alt={item.name} className="w-16 h-16 object-contain mb-3" />
            <p className="text-gray-900 font-medium text-lg text-center">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.section
      id="skill"
      className="py-20 px-[7%] bg-gradient-to-br from-[#f9f9f9] to-[#e0f7ff] min-h-screen"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-5xl font-extrabold text-center mb-20 text-[#2B3A55]"
        variants={titleVariants}
      >
        💡 My Skills
      </motion.h2>

      <div className="max-w-7xl mx-auto w-full">
        {renderCategory('Frontend', portfolioData.skills.frontend, 'text-[#00A6ED]')}
        {renderCategory('Backend', portfolioData.skills.backend, 'text-[#FF6B6B]')}
        {renderCategory('Tools', portfolioData.skills.tools, 'text-[#28C76F]')}
      </div>
    </motion.section>
  );
};

export default Skills;

import React, { useRef } from 'react'
import MyImage from "../assets/govind3.jpg"
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Header = () => {
    const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const imageLoadVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const imgRef = useRef(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (event) => {
    if (imgRef.current) {
        const {left, top, width, height} = imgRef.current.getBoundingClientRect();
        const x = event.clientX - (left + width / 2);
        const y = event.clientY - (top + height / 2);

        mouseX.set(x);
        mouseY.set(y);
    }
  }

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const rotateX = useTransform(mouseY, [-100, 100], [5, -5]);
  const rotateY = useTransform(mouseX, [-100, 100], [-5, 5]);

  const perspective = '800px';

  return (
    <section className='min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-[7%] bg-gradient-to-br from-[#f0fff0] to-[#E0FFFF]'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 text-center md:text-left'>
        {/* Text Content */}
        <motion.div
          className='flex-1'
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-color-primary leading-tight mb-4'>
            <motion.span variants={lineVariants}>Hii, I'm </motion.span>
            <motion.span variants={lineVariants} className='text-blue-700'>Govind Parmar</motion.span>
            <br />
            <motion.span variants={lineVariants}>Web Developer</motion.span>
          </motion.h1>
          <motion.p
            className='text-lg sm:text-xl text-gray-700 max-w-md mx-auto md:mx-0'
            variants={lineVariants}
          >
            I aspire to be a passionate and skilled Web Developer, constantly learning and building.
          </motion.p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          ref={imgRef} 
          className='flex-shrink-0'
          variants={imageLoadVariants}
          initial="hidden"
          animate="visible"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: perspective }}
        >
          <motion.img
            src={MyImage}
            alt="Govind Parmar - Web Developer"
            className='w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white shadow-2xl'
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Header
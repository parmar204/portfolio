import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_6h55vs9',
      'template_p3ipcyc',
      form.current,
      '4EoVYXqXWYiba2Gyg'
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message. Please try again later.');
      console.log(error.text);
    });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 12 }
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-[5%] bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.2 }
        }
      }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
        variants={fadeUp}
      >
        📬 Get In Touch
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-6"
        variants={fadeUp}
      >
        <motion.div className="flex flex-col" variants={fadeUp}>
          <label className="font-semibold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
          />
        </motion.div>

        <motion.div className="flex flex-col" variants={fadeUp}>
          <label className="font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </motion.div>

        <motion.div className="flex flex-col" variants={fadeUp}>
          <label className="font-semibold text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            placeholder="Write your message here..."
          />
        </motion.div>

        <motion.button
          type="submit"
          className="mt-4 self-start bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  )
}

export default Contact
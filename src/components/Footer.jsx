import React from 'react'
import logo from '../assets/logo.png'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-white shadow-2xl flex items-center justify-between py-3 px-2 sm:px-[7%]'>
        <h3 className='text-xl flex items-center gap-2'>
            <img src={logo} className='w-6' alt="" />
            <p className='font-bold tracking-wide'>Govind</p>
        </h3>

        <div className='flex gap-4 text-primary text-2xl'>
            <a href="" className='hover:scale-125 transition-all duration-150'><FaLinkedin /></a>
            <a href="https://github.com/parmar204" className='hover:scale-125 transition-all duration-150' target='_blank'><FaGithub /></a>
        </div>
    </footer>
  )
}

export default Footer
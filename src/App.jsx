import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Education from './components/Education'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-[#f0fff0] to-[#E0FFFF]'>
      <Navbar />
      <Header />
      <Skills />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
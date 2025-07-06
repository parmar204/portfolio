import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Education from './components/Education'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-[#f0fff0] to-[#E0FFFF]'>
      <Navbar />
      <Header />
      <Skills />
      <Education />
    </div>
  )
}

export default App
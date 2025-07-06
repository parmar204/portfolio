import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className='bg-gradient-to-r from-[#f0fff0] to-[#E0FFFF]'>
      <Navbar />
      <Header />
      <Skills />
    </div>
  )
}

export default App
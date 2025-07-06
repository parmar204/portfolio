import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'

const App = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-[#f0fff0] to-[#E0FFFF]'>
      <Navbar />
      <Header />
    </div>
  )
}

export default App
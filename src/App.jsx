import React, { useState, useEffect } from 'react'
import './index.css'

import Navbar from './components/navbar'
import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Calculator from './components/calculator'
import Testimonial from './components/testimonial'
import Contact from './components/contact'
import Footer from './components/footer'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [searchFilter, setSearchFilter] = useState(null)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true // default to dark
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newVal = !prev
      localStorage.setItem('theme', newVal ? 'dark' : 'light')
      return newVal
    })
  }

  return (
    <div className='w-full overflow-hidden bg-luxury-bg text-luxury-text transition-colors duration-300'>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Header onSearch={setSearchFilter} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About />
      <Projects searchFilter={searchFilter} />
      <Calculator />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
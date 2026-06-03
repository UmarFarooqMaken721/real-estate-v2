import React from 'react'
import './index.css'


import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Testimonial from './components/testimonial'

import Contact from './components/contact'
 

  import { ToastContainer } from 'react-toastify';
import Footer from './components/footer'

function App() {
  return (
    <div className='w-full overflow-hidden'>
     <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

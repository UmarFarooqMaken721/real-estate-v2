import React, { useState } from 'react'
import './index.css'

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

  return (
    <div className='w-full overflow-hidden bg-luxury-bg text-white'>
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
        theme="dark"
      />

      <Header onSearch={setSearchFilter} />
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
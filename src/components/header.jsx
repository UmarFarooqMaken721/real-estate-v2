import React from 'react'
import Navbar from './navbar'
import { motion } from "motion/react"

const Header = () => {
  const words = "Explore Homes that fit your dreams".split(" ")

  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
      style={{ backgroundImage: "url('/header_img.png')" }} id='Header'>
      <Navbar />
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>

        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-4xl font-semibold pt-20 uppercase">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: false }}
              className='inline-block mr-4'
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
          className='space-x-6 mt-16'
        >
          <a href="#Projects" className="border border-white px-8 py-3 rounded">Projects</a>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded">Contact us</a>
        </motion.div>

      </div>
    </div>
  )
}

export default Header
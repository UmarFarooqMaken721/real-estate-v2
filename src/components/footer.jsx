import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden' id='footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='w-full md:w-1/3 mb-8 md:mb-0'
        >
          <img src={assets.logo_dark} alt="" />
          <p className='text-amber-300'>We are committed to helping you find the perfect property — whether it's your first home, a smart investment, or a space to grow. With years of experience and a passion for real estate, we turn your vision into reality.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='w-full md:w-1/5 mb-8 md:mb-0'
        >
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2'>
            <a href="#Header" className='hover:text-white text-amber-300'>Home</a>
            <a href="#About" className='hover:text-white text-amber-300'>About Us</a>
            <a href="#contact" className='hover:text-white text-amber-300'>Contact Us</a>
            <a href="#" className='hover:text-white text-amber-300'>Privacy Policies</a>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: false }}
          className='w-full md:w-1/3'
        >
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe To Our Newsletter</h3>
          <p className='text-amber-300 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
          <div className='flex gap-2'>
            <input type="email" placeholder='Enter your Email' className='p-2 rounded bg-gray-800 text-amber-300 border-gray-700 focus:outline-none md:w-auto' />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='py-2 px-4 rounded bg-blue-500 text-white'
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
        className='border-t border-gray-700 py-4 mt-10 text-center text-amber-600'
      >
        Copyright 2026 ~Umar. All Right Reserved.
      </motion.div>
    </div>
  )
}

export default Footer
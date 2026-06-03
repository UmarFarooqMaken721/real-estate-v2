import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function About() {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className='text-2xl sm:text-4xl font-bold mb-2 text-center'
      >
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Brand</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className='text-gray-500 max-w-80 text-center mb-8'
      >
        Passionate About Properties, Dedicated to Your Vision
      </motion.p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>

        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          src={assets.brand_img}
          alt=""
          className='w-full sm:w-1/2 max-w-lg rounded-t-full'
        />

        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'
          >
            <div className='border-t border-gray-300 pt-4'>
              <p className='text-4xl font-medium text-gray-900'>10+</p>
              <p className='text-sm text-gray-500 mt-1'>Years of Excellence</p>
            </div>
            <div className='border-t border-gray-300 pt-4'>
              <p className='text-4xl font-medium text-gray-900'>12+</p>
              <p className='text-sm text-gray-500 mt-1'>Projects Completed</p>
            </div>
            <div className='border-t border-gray-300 pt-4'>
              <p className='text-4xl font-medium text-gray-900'>20+</p>
              <p className='text-sm text-gray-500 mt-1'>Mn. Sq. Ft. Delivered</p>
            </div>
            <div className='border-t border-gray-300 pt-4'>
              <p className='text-4xl font-medium text-gray-900'>23+</p>
              <p className='text-sm text-gray-500 mt-1'>Ongoing Projects</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className='my-10 max-w-lg text-gray-500 leading-relaxed'
          >
            We bring decades of expertise to every project — from urban developments to luxury residences. Our commitment is simple: deliver spaces that inspire, built with precision and designed for life. Your vision is our blueprint.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false }}
            className='bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300 cursor-pointer'
          >
            Learn More
          </motion.button>

        </div>
      </div>
    </div>
  )
}

export default About
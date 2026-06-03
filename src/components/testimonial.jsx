import React from 'react'
import { testimonialsData, assets } from '../assets/assets'
import { motion } from 'motion/react'

function Testimonial() {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false }}
        className='text-2xl sm:text-4xl font-bold mb-2 text-center'
      >
        Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className='text-center text-gray-500 mb-12 max-w-80 mx-auto'
      >
        Real Stories From Those Who Found Home With Us
      </motion.p>

      <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
            viewport={{ once: false }}
            className='border border-gray-200 shadow-lg rounded px-8 py-10 text-center cursor-default'
          >
            <motion.img
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 + 0.3, ease: 'backOut' }}
              viewport={{ once: false }}
              className='w-20 h-20 rounded-full mx-auto mb-4'
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className='text-xl font-semibold text-gray-800 mb-1'>{testimonial.name}</h2>
            <p className='text-gray-500 text-sm mb-3'>{testimonial.title}</p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
              viewport={{ once: false }}
              className='flex justify-center gap-1 mb-4'
            >
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.5 + i * 0.08 }}
                  viewport={{ once: false }}
                  src={assets.star_icon}
                  alt="star"
                />
              ))}
            </motion.div>
            <p className='text-gray-600 text-sm leading-relaxed'>{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
import React from 'react'
import { testimonialsData, assets } from '../assets/assets'
import { motion } from 'motion/react'

function Testimonial() {
  return (
    <div className='bg-luxury-bg text-luxury-text py-24 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden' id='Testimonials'>
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-xs font-bold tracking-widest text-luxury-accent uppercase mb-3">Client Reviews</h2>
          <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight">
            Customer <span className="text-gradient-gold font-light">Testimonials</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-accent to-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-luxury-muted mt-6 max-w-md mx-auto text-sm sm:text-base font-light">
            Real stories from property owners and investors who completed their journeys with our dedicated brokerage consulting.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, borderColor: "rgba(212, 175, 55, 0.3)" }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
              viewport={{ once: true }}
              className='bg-luxury-card border border-luxury-border shadow-2xl rounded-2xl px-6 py-10 md:px-8 text-center cursor-default border-glow flex flex-col justify-between items-center relative'
            >
              {/* Decorative Quote Mark */}
              <span className="absolute top-4 left-6 text-7xl font-serif text-luxury-muted/10 pointer-events-none select-none">“</span>
              
              <div>
                {/* Profile Image with Gold Ring */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.2, ease: 'backOut' }}
                  viewport={{ once: true }}
                  className="relative mb-6"
                >
                  <div className="absolute inset-0 rounded-full border border-luxury-accent/50 scale-105"></div>
                  <img
                    className='w-20 h-20 rounded-full mx-auto relative z-10 border-2 border-luxury-card object-cover'
                    src={testimonial.image}
                    alt={testimonial.alt}
                  />
                </motion.div>

                {/* Name & Title */}
                <h3 className='text-lg font-bold text-luxury-text mb-1'>{testimonial.name}</h3>
                <p className='text-luxury-muted text-xs font-medium uppercase tracking-wider mb-4'>{testimonial.title}</p>
                
                {/* Gold Stars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.4 }}
                  viewport={{ once: true }}
                  className='flex justify-center gap-1.5 mb-6'
                >
                  {Array.from({ length: 5 }, (_, i) => {
                    const isFilled = i < testimonial.rating
                    return (
                      <motion.img
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.15 + 0.4 + i * 0.06 }}
                        viewport={{ once: true }}
                        src={assets.star_icon}
                        alt="star"
                        className={`w-4 h-4 ${isFilled ? 'filter-none' : 'opacity-20 brightness-50'}`}
                      />
                    )
                  })}
                </motion.div>
              </div>

              {/* Text */}
              <p className='text-luxury-muted text-sm font-light leading-relaxed italic'>
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Testimonial
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { toast } from 'react-toastify'

function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    toast.success("Successfully subscribed to our luxury catalog newsletter!")
    setTimeout(() => {
      setEmail("")
      setSubscribed(false)
    }, 2000)
  }

  return (
    <div className='pt-20 px-6 md:px-12 lg:px-24 w-full bg-slate-950 border-t border-white/5 overflow-hidden text-gray-300' id='footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start gap-12 pb-16'>

        {/* Logo and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className='w-full md:w-1/3 space-y-4'
        >
          <img src={assets.logo_dark} alt="Elite Real Estate" className="h-9 hover:scale-105 transition-transform" />
          <p className='text-gray-400 text-sm font-light leading-relaxed'>
            We are committed to helping you find the perfect property — whether it's your first custom home, a smart portfolio investment, or a penthouse space to grow. With years of experience and a passion for elite design, we turn your vision into architectural reality.
          </p>
        </motion.div>

        {/* Navigation Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className='w-full md:w-1/5'
        >
          <h3 className='text-white text-sm font-bold uppercase tracking-wider mb-6'>Company</h3>
          <ul className='flex flex-col gap-3 text-sm'>
            <a href="#Header" className='hover:text-luxury-accent transition-colors text-gray-400 font-light'>Home</a>
            <a href="#About" className='hover:text-luxury-accent transition-colors text-gray-400 font-light'>About Us</a>
            <a href="#Projects" className='hover:text-luxury-accent transition-colors text-gray-400 font-light'>Our Projects</a>
            <a href="#contact" className='hover:text-luxury-accent transition-colors text-gray-400 font-light'>Contact Us</a>
          </ul>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className='w-full md:w-1/3'
        >
          <h3 className='text-white text-sm font-bold uppercase tracking-wider mb-6'>Subscribe To Our Newsletter</h3>
          <p className='text-gray-400 text-sm font-light leading-relaxed mb-6'>
            The latest high-value listings, market reports, and design articles sent to your inbox monthly.
          </p>
          
          {subscribed ? (
            <div className="p-3 text-center rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
              Thank You! Subscribed Successfully.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className='flex gap-2 w-full max-w-sm'>
              <input 
                type="email" 
                placeholder='Enter your Email' 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='p-3 w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-luxury-accent transition-colors' 
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className='py-3 px-6 rounded-xl bg-gradient-to-r from-luxury-accent to-amber-500 text-black font-semibold text-xs tracking-wider uppercase shadow-lg hover:shadow-luxury-glow transition-all cursor-pointer'
              >
                Subscribe
              </motion.button>
            </form>
          )}
        </motion.div>

      </div>

      {/* Copyright row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='border-t border-white/5 py-8 text-center text-xs text-gray-500 font-light flex flex-col sm:flex-row justify-between items-center gap-4'
      >
        <span>Copyright 2026 ~Umar. All Rights Reserved.</span>
        <div className="flex gap-6 text-gray-600">
          <a href="#" className="hover:text-luxury-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-luxury-accent transition-colors">Terms of Service</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Footer
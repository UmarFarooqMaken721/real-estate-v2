import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [showMobileMenu])

  const navLinks = [
    { label: 'Home', href: '#Header' },
    { label: 'About', href: '#About' },
    { label: 'Projects', href: '#Projects' },
    { label: 'Testimonials', href: '#Testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full z-10 flex items-center justify-between p-4"
      >
        <img src={assets.logo} alt="logo" className="h-10" />

        <ul className="hidden md:flex gap-6 text-white">
          {navLinks.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              <a href={item.href} className="cursor-pointer hover:text-red-800">
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl hover:bg-white/20 transition hidden md:block"
        >
          Sign Up
        </motion.button>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className='md:hidden w-7 cursor-pointer'
          alt="menu"
        />
      </motion.div>

      {/*-----mobile menu----*/}
      <div className={`md:hidden fixed w-full z-30 right-0 top-0 bottom-0 bg-gray-100 transition-transform duration-500 ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="close"
          />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-orange-500'>
          {navLinks.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 40 }}
              animate={showMobileMenu ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <a
                onClick={() => setShowMobileMenu(false)}
                href={item.href}
                className='px-4 py-2 rounded-full inline-block cursor-pointer'
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
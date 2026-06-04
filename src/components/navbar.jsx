import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('Header')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Check active section
      const sections = ['Header', 'About', 'Projects', 'Testimonials', 'contact']
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top >= -200 && rect.top <= 400) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [showMobileMenu])

  const navLinks = [
    { label: 'Home', href: '#Header', id: 'Header' },
    { label: 'About', href: '#About', id: 'About' },
    { label: 'Projects', href: '#Projects', id: 'Projects' },
    { label: 'Testimonials', href: '#Testimonials', id: 'Testimonials' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-luxury-bg/90 backdrop-blur-xl border-b border-luxury-border shadow-lg shadow-black/10' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <motion.a 
          href="#Header"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <img src={assets.logo} alt="logo" className="h-9 md:h-10 hover:scale-105 transition-transform" />
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((item, i) => {
            const isActive = activeSection.toLowerCase() === item.id.toLowerCase()
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="relative py-2"
              >
                <a 
                  href={item.href} 
                  className={`cursor-pointer transition-colors duration-300 hover:text-luxury-accent ${isActive ? 'text-luxury-accent font-semibold' : 'text-gray-300'}`}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.div 
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-luxury-accent to-amber-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.li>
            )
          })}
        </ul>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block"
        >
          <a
            href="#Projects"
            className="cursor-pointer inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-luxury-accent/30 text-white font-medium text-xs tracking-wider uppercase bg-luxury-accent/10 hover:bg-luxury-accent hover:text-black hover:border-luxury-accent shadow-lg hover:shadow-luxury-glow transition-all duration-300"
          >
            Explore Catalog
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMobileMenu(true)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <img
              src={assets.menu_icon}
              className='w-6 h-6 invert filter'
              alt="menu"
            />
          </motion.button>
        </div>
      </div>

      {/*-----Mobile drawer menu----*/}
      <div className={`md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-all duration-300 ${showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-luxury-bg border-l border-luxury-border p-6 shadow-2xl transition-transform duration-500 ease-out ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between pb-6 border-b border-luxury-border">
            <img src={assets.logo} alt="logo" className="h-8" />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMobileMenu(false)}
              className="p-2 rounded-lg bg-white/5 border border-white/10"
            >
              <img
                src={assets.cross_icon}
                className="w-5 h-5 invert"
                alt="close"
              />
            </motion.button>
          </div>
          
          <ul className='flex flex-col gap-4 mt-8 px-2 text-lg font-medium text-gray-200'>
            {navLinks.map((item, i) => {
              const isActive = activeSection.toLowerCase() === item.id.toLowerCase()
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={showMobileMenu ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <a
                    onClick={() => setShowMobileMenu(false)}
                    href={item.href}
                    className={`block py-3 px-4 rounded-xl transition-all ${isActive ? 'bg-luxury-accent/10 text-luxury-accent border-l-4 border-luxury-accent font-semibold' : 'hover:bg-white/5 hover:text-white'}`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              )
            })}
          </ul>

          <div className="mt-12 px-4">
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#contact"
              className="block w-full py-4 text-center rounded-xl bg-gradient-to-r from-luxury-accent to-amber-500 text-black font-semibold uppercase tracking-wider text-xs shadow-lg hover:shadow-luxury-glow transition-all"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

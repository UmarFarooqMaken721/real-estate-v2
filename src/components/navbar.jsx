import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function Navbar({ darkMode, toggleDarkMode }) {
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

  // Dynamic colors for navbar depending on theme
  const logoSrc = darkMode ? assets.logo : assets.logo_dark
  const drawerLogoSrc = darkMode ? assets.logo : assets.logo_dark
  
  const inactiveColorClass = darkMode
    ? 'text-gray-300 hover:text-luxury-accent'
    : 'text-slate-700 hover:text-luxury-accent font-semibold'
    
  const actionBtnClass = darkMode
    ? 'border-luxury-accent/30 text-white bg-luxury-accent/10 hover:bg-luxury-accent hover:text-black hover:border-luxury-accent'
    : 'border-luxury-accent/40 text-slate-800 bg-luxury-accent/5 hover:bg-luxury-accent hover:text-white hover:border-luxury-accent font-bold'

  const menuIconClass = darkMode ? 'w-6 h-6 invert filter' : 'w-6 h-6'
  const crossIconClass = darkMode ? 'w-5 h-5 invert' : 'w-5 h-5'

  const toggleButton = (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleDarkMode}
      className={`p-2.5 rounded-full border transition-all cursor-pointer flex items-center justify-center text-luxury-accent ${
        darkMode
          ? 'border-white/10 bg-white/5 hover:bg-white/10'
          : 'border-slate-200 bg-slate-100 hover:bg-slate-200 shadow-sm'
      }`}
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        // Sun Icon
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41z"/>
        </svg>
      ) : (
        // Moon Icon
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.5-.1 1 .2 1.2.7.2.5.1 1.1-.3 1.5-2.8 2.7-2.6 7.3.5 9.8 1.8 1.4 4.1 1.8 6.2 1.2.5-.1 1 .1 1.3.6.3.4.2 1-.2 1.4-1.9 1.7-4.4 2.6-6.9 2.6z"/>
        </svg>
      )}
    </motion.button>
  )

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-luxury-bg/95 backdrop-blur-xl border-b border-luxury-border shadow-lg shadow-black/5' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24">
          {/* Logo */}
          <motion.a 
            href="#Header"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <img src={logoSrc} alt="logo" className="h-9 md:h-10 hover:scale-105 transition-transform" />
          </motion.a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
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
                    className={`cursor-pointer transition-colors duration-300 ${isActive ? 'text-luxury-accent font-semibold' : inactiveColorClass}`}
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

          {/* Desktop Action & Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {toggleButton}
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="#Projects"
                className={`cursor-pointer inline-flex items-center justify-center px-5 py-2.5 rounded-full border text-xs tracking-wider uppercase shadow hover:shadow-luxury-glow transition-all duration-300 ${actionBtnClass}`}
              >
                Explore Catalog
              </a>
            </motion.div>
          </div>

          {/* Mobile Toggle & Menu Trigger */}
          <div className="md:hidden flex items-center gap-3">
            {toggleButton}
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMobileMenu(true)}
              className={`p-2 rounded-lg transition-colors border ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-slate-100 border-slate-200 hover:bg-slate-200'
              }`}
            >
              <img
                src={assets.menu_icon}
                className={menuIconClass}
                alt="menu"
              />
            </motion.button>
          </div>
        </div>
      </div>

      {/*-----Mobile drawer menu----*/}
      {/* 1. Backdrop Overlay */}
      <div 
        onClick={() => setShowMobileMenu(false)}
        className={`md:hidden fixed inset-0 z-[100] bg-black/60 backdrop-blur-md transition-all duration-300 ${
          showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* 2. Drawer Content */}
      <div 
        className={`md:hidden fixed top-0 right-0 bottom-0 z-[101] w-4/5 max-w-sm border-l border-luxury-border p-6 shadow-2xl transition-transform duration-500 ease-out ${
          showMobileMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: darkMode ? "#070a13" : "#ffffff" }}
      >
        <div className="flex items-center justify-between pb-6 border-b border-luxury-border">
          <img src={drawerLogoSrc} alt="logo" className="h-8" />
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowMobileMenu(false)}
            className={`p-2 rounded-lg border ${
              darkMode
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-slate-100 border-slate-200 hover:bg-slate-200'
            }`}
          >
            <img
              src={assets.cross_icon}
              className={crossIconClass}
              alt="close"
            />
          </motion.button>
        </div>
        
        <ul className={`flex flex-col gap-4 mt-8 px-2 text-lg font-medium ${darkMode ? 'text-gray-200' : 'text-slate-800'}`}>
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
                  className={`block py-3 px-4 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-luxury-accent/10 text-luxury-accent border-l-4 border-luxury-accent font-semibold' 
                      : darkMode 
                        ? 'hover:bg-white/5 hover:text-white' 
                        : 'hover:bg-slate-100 hover:text-slate-900'
                  }`}
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
    </>
  )
}

export default Navbar

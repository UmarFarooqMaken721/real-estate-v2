import React, { useState } from 'react'
import { motion } from "motion/react"

const Header = ({ onSearch, darkMode, toggleDarkMode }) => {
  const words = "Explore Homes that fit your dreams".split(" ")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("All")
  const [budget, setBudget] = useState("")

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch({ location, category, budget })
    }
    const projectsSection = document.getElementById('Projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const bgStyle = {
    backgroundImage: darkMode 
      ? "linear-gradient(rgba(7, 10, 19, 0.45), rgba(7, 10, 19, 0.85)), url('/header_img.png')"
      : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
  }

  const gridColor = darkMode ? "rgba(255,255,255,0.02)" : "rgba(15,23,42,0.04)"

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center w-full relative overflow-hidden bg-luxury-bg transition-all duration-450'
      style={bgStyle} id='Header'>
      
      {/* Visual glowing grids in background */}
      <div className="absolute inset-0 bg-[size:4rem_4rem] transition-all"
        style={{ backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)` }}></div>
      
      <div className='container relative z-10 text-center mx-auto pt-28 pb-12 px-6 md:px-12 lg:px-24 text-luxury-text flex flex-col items-center'>
        
        {/* Elite Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-card/30 border border-luxury-border backdrop-blur-md text-luxury-accent text-xs font-semibold uppercase tracking-widest mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-accent animate-pulse"></span>
          Elite Real Estate Portfolio
        </motion.div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-bold tracking-tight max-w-5xl leading-[1.1] mb-6 uppercase">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className={`inline-block mr-3 sm:mr-4 ${i >= 3 ? 'text-gradient-gold' : 'text-gradient-white'}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-luxury-muted text-sm sm:text-base md:text-lg max-w-2xl font-light tracking-wide mb-12"
        >
          Curating an exclusive selection of architectural marvels and high-value properties in prime metropolitan areas.
        </motion.p>

        {/* Quick-Search Bar */}
        <motion.form
          onSubmit={handleSearchSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className={`w-full max-w-4xl rounded-2xl md:rounded-full p-4 md:p-3 flex flex-col md:flex-row items-center gap-4 border transition-all duration-300 ${
            darkMode 
              ? 'glassmorphism border-luxury-border shadow-2xl shadow-black/40' 
              : 'bg-white border-slate-200 shadow-xl shadow-slate-100/50'
          }`}
        >
          {/* Location */}
          <div className="w-full md:w-1/3 flex flex-col items-start px-4 border-b md:border-b-0 md:border-r border-luxury-border pb-3 md:pb-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-luxury-accent mb-1">Location</span>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent text-luxury-text w-full font-medium focus:outline-none cursor-pointer text-sm"
            >
              <option value="" className="bg-luxury-card text-luxury-text">All Locations</option>
              <option value="Islamabad" className="bg-luxury-card text-luxury-text">Islamabad</option>
              <option value="Karachi" className="bg-luxury-card text-luxury-text">Karachi</option>
              <option value="Lahore" className="bg-luxury-card text-luxury-text">Lahore</option>
            </select>
          </div>

          {/* Property Type */}
          <div className="w-full md:w-1/3 flex flex-col items-start px-4 border-b md:border-b-0 md:border-r border-luxury-border pb-3 md:pb-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-luxury-accent mb-1">Property Type</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-transparent text-luxury-text w-full font-medium focus:outline-none cursor-pointer text-sm"
            >
              <option value="All" className="bg-luxury-card text-luxury-text">All Categories</option>
              <option value="Villa" className="bg-luxury-card text-luxury-text">Villas</option>
              <option value="Apartment" className="bg-luxury-card text-luxury-text">Apartments</option>
              <option value="Penthouse" className="bg-luxury-card text-luxury-text">Penthouses</option>
            </select>
          </div>

          {/* Budget Limit */}
          <div className="w-full md:w-1/3 flex flex-col items-start px-4 pb-3 md:pb-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-luxury-accent mb-1">Max Budget</span>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="bg-transparent text-luxury-text w-full font-medium focus:outline-none cursor-pointer text-sm"
            >
              <option value="" className="bg-luxury-card text-luxury-text">Any Price</option>
              <option value="20000000" className="bg-luxury-card text-luxury-text">Up to Rs. 2 Crore</option>
              <option value="40000000" className="bg-luxury-card text-luxury-text">Up to Rs. 4 Crore</option>
              <option value="60000000" className="bg-luxury-card text-luxury-text">Up to Rs. 6 Crore</option>
              <option value="80000000" className="bg-luxury-card text-luxury-text">Up to Rs. 8 Crore</option>
              <option value="120000000" className="bg-luxury-card text-luxury-text">Up to Rs. 12 Crore</option>
            </select>
          </div>

          {/* Search Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-luxury-accent to-amber-500 text-black font-semibold rounded-xl md:rounded-full hover:shadow-luxury-glow transition-all duration-300 text-sm whitespace-nowrap cursor-pointer"
          >
            Search Properties
          </motion.button>
        </motion.form>

        {/* Secondary Navigation buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='flex items-center gap-6 mt-12'
        >
          <a href="#Projects" className="text-sm font-medium tracking-wider uppercase border-b-2 border-luxury-accent text-luxury-text hover:text-luxury-accent transition-all duration-300 pb-1">
            Browse Listings
          </a>
          <span className="w-1.5 h-1.5 rounded-full bg-luxury-border"></span>
          <a href="#contact" className="text-sm font-medium tracking-wider uppercase text-luxury-muted hover:text-luxury-text transition-all duration-300">
            Book Consultation
          </a>
        </motion.div>

      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function About() {
  const brandFeatures = [
    {
      title: "Prime Locations",
      description: "Exclusive access to properties situated in the most coveted and fast-growing districts.",
      icon: (
        <svg className="w-6 h-6 text-luxury-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      )
    },
    {
      title: "Luxury Architecture",
      description: "Crafted by world-renowned designers, uniting aesthetics with modern functional luxury.",
      icon: (
        <svg className="w-6 h-6 text-luxury-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    {
      title: "Premium Amenities",
      description: "From private wellness clubs to advanced automated smart home automation systems.",
      icon: (
        <svg className="w-6 h-6 text-luxury-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
      )
    },
    {
      title: "Elite Brokerage",
      description: "Personalized end-to-end guidance from licensed experts specialized in high-value portfolios.",
      icon: (
        <svg className="w-6 h-6 text-luxury-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    }
  ]

  const stats = [
    { value: "10+", label: "Years of Excellence" },
    { value: "12+", label: "Projects Completed" },
    { value: "20+", label: "Mn. Sq. Ft. Delivered" },
    { value: "23+", label: "Ongoing Projects" }
  ]

  return (
    <div className='bg-luxury-bg text-white py-24 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden' id='About'>
      
      {/* Background glow accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-luxury-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto flex flex-col items-center relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-xs font-bold tracking-widest text-luxury-accent uppercase mb-3">Our Legacy</h2>
          <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight">
            About <span className="text-gradient-gold font-light">Our Brand</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-accent to-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-md mx-auto text-sm sm:text-base font-light">
            Passionate About Properties, Dedicated to Your Vision. Discover the standards that define our reputation.
          </p>
        </motion.div>

        {/* Brand Showcase Grid */}
        <div className='flex flex-col lg:flex-row items-center lg:items-stretch gap-16 w-full mb-20'>
          
          {/* Brand Image with luxury framing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative p-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-md md:max-w-lg">
              {/* Outer decorative borders */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-luxury-accent"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-luxury-accent"></div>
              
              <img
                src={assets.brand_img}
                alt="Luxury Property Brand"
                className="w-full h-auto rounded-xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Core Info and Stats */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold uppercase mb-4 text-gradient-white">Crafting Masterpieces Since 2016</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                We bring decades of collective expertise to every project — from premium urban high-rises to custom-tailored residential estates. Our commitment is direct: deliver magnificent architectural spaces that inspire, built with structural excellence and customized for premium lifestyle standards.
              </p>
              <p className="text-gray-400 font-light leading-relaxed">
                Whether you seek an investment yield-focused property or a private residential oasis, our consulting teams align with your requirements to procure elite real estate assets.
              </p>
            </motion.div>

            {/* Premium Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6 w-full"
            >
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-luxury-accent/30 transition-all duration-300">
                  <p className="text-3xl sm:text-4xl font-extrabold text-gradient-gold mb-1">{stat.value}</p>
                  <p className="text-xs uppercase font-medium tracking-wide text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Feature Cards Showcase */}
        <div className="w-full">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-xl font-bold uppercase tracking-wider mb-10 text-gradient-white"
          >
            Why Choose Our Portfolio Services
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {brandFeatures.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.4)" }}
                className="p-6 rounded-2xl border border-white/5 bg-luxury-card hover:bg-white/5 transition-all duration-300 flex flex-col items-start border-glow cursor-default"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-5">
                  {feat.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feat.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
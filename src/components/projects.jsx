import React, { useEffect, useState } from 'react'
import { assets, projectsData, categories } from '../assets/assets'
import { motion, AnimatePresence } from 'motion/react'
import { toast } from 'react-toastify'

const Projects = ({ searchFilter }) => {
  const [selectedTab, setSelectedTab] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [selectedProject, setSelectedProject] = useState(null)
  
  // Mortgage / Enquiry state inside modal
  const [enquirySubmitted, setEnquirySubmitted] = useState(false)
  const [enquiryForm, setEnquiryForm] = useState({ name: '', email: '', message: '' })

  // Sync tab filter and search filter
  useEffect(() => {
    let result = projectsData

    // Apply Tab filter
    if (selectedTab !== "All") {
      result = result.filter(p => p.category.toLowerCase() === selectedTab.toLowerCase())
    }

    // Apply Search Header filter
    if (searchFilter) {
      if (searchFilter.location) {
        result = result.filter(p => p.location.toLowerCase().includes(searchFilter.location.toLowerCase()))
      }
      if (searchFilter.category && searchFilter.category !== "All") {
        result = result.filter(p => p.category.toLowerCase() === searchFilter.category.toLowerCase())
      }
      if (searchFilter.budget) {
        const budgetVal = parseInt(searchFilter.budget)
        result = result.filter(p => p.priceVal <= budgetVal)
      }
    }

    setFilteredProjects(result)
  }, [selectedTab, searchFilter])

  // Reset tab selection if search category is changed from header
  useEffect(() => {
    if (searchFilter && searchFilter.category) {
      setSelectedTab(searchFilter.category)
    }
  }, [searchFilter])

  const handleEnquirySubmit = (e) => {
    e.preventDefault()
    setEnquirySubmitted(true)
    toast.success(`Inquiry sent for ${selectedProject.title}! An agent will contact you shortly.`)
    setTimeout(() => {
      setEnquirySubmitted(false)
      setEnquiryForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <div className='bg-luxury-bg text-white py-24 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden' id='Projects'>
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className='container mx-auto relative z-10'>
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xs font-bold tracking-widest text-luxury-accent uppercase mb-3 font-semibold">Our Portfolio</h2>
          <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight">
            Projects <span className="text-gradient-gold font-light">Completed</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-accent to-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-md mx-auto text-sm sm:text-base font-light">
            Explore our curated selection of properties. Select categories or click on any property to see key specs, amenities, and details.
          </p>
        </motion.div>

        {/* Tab Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${
                selectedTab === cat 
                  ? 'bg-gradient-to-r from-luxury-accent to-amber-500 text-black border-transparent shadow-lg shadow-luxury-glow'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-gray-300'
              }`}
            >
              {cat === "All" ? "All Properties" : `${cat}s`}
            </button>
          ))}
        </motion.div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-luxury-card rounded-2xl border border-white/5 overflow-hidden border-glow shadow-xl cursor-pointer"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  {/* Category tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-black/60 backdrop-blur-md text-luxury-accent rounded-full border border-luxury-accent/30">
                    {project.category}
                  </span>
                  
                  {/* Glassmorphic hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                    <span className="text-sm font-semibold tracking-wider text-luxury-accent flex items-center gap-1.5 uppercase">
                      View Details
                      <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-luxury-accent transition-colors duration-300">{project.title}</h3>
                    <span className="text-lg font-bold text-luxury-accent">{project.price}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm font-light mb-4 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-luxury-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    {project.location}
                  </p>

                  {/* Micro Specs */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs text-gray-400 font-medium">
                    <span className="flex items-center gap-1">
                      🛌 {project.beds} Beds
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
                    <span className="flex items-center gap-1">
                      🛁 {project.baths} Baths
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
                    <span className="flex items-center gap-1">
                      📏 {project.sqft} Sq Ft
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-luxury-card rounded-2xl border border-white/5"
          >
            <svg className="w-12 h-12 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 className="text-xl font-bold mb-2">No Properties Found</h3>
            <p className="text-gray-400 text-sm font-light">Adjust your quick search parameters or try another tab filter.</p>
          </motion.div>
        )}

      </div>

      {/* Property Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="bg-luxury-card border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-luxury-accent hover:text-black transition-all cursor-pointer"
                aria-label="Close Modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              {/* Left Column: Image and floating tags */}
              <div className="w-full md:w-1/2 relative bg-black/40 flex items-center justify-center min-h-[300px] md:min-h-full">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="px-3 py-1 self-start text-[10px] uppercase font-bold tracking-widest bg-luxury-accent text-black rounded-full mb-3">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-extrabold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-luxury-accent text-2xl font-bold">{selectedProject.price}</p>
                </div>
              </div>

              {/* Right Column: Key Details & Enquiry form */}
              <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[90vh] md:max-h-[600px] lg:max-h-[700px]">
                
                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold text-luxury-accent tracking-widest mb-2">Overview</h4>
                  <p className="text-gray-300 text-sm font-light leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/5 mb-6 text-center">
                  <div>
                    <span className="block text-lg">🛌</span>
                    <span className="block text-sm font-bold text-white mt-1">{selectedProject.beds} Beds</span>
                  </div>
                  <div className="border-x border-white/5">
                    <span className="block text-lg">🛁</span>
                    <span className="block text-sm font-bold text-white mt-1">{selectedProject.baths} Baths</span>
                  </div>
                  <div>
                    <span className="block text-lg">📏</span>
                    <span className="block text-sm font-bold text-white mt-1">{selectedProject.sqft} sqft</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase font-bold text-luxury-accent tracking-widest mb-3">Amenities</h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                    {selectedProject.amenities.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-luxury-accent">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Enquiry Form */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-xs uppercase font-bold text-luxury-accent tracking-widest mb-4">Request Private Tour</h4>
                  {enquirySubmitted ? (
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm font-semibold">
                      Inquiry Submitted Successfully!
                    </div>
                  ) : (
                    <form onSubmit={handleEnquirySubmit} className="space-y-3">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        required 
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({...enquiryForm, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-luxury-accent transition-colors"
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm({...enquiryForm, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-luxury-accent transition-colors"
                      />
                      <textarea 
                        placeholder="I'm interested in details for this property..." 
                        rows="2"
                        required 
                        value={enquiryForm.message}
                        onChange={(e) => setEnquiryForm({...enquiryForm, message: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-luxury-accent resize-none transition-colors"
                      ></textarea>
                      <button 
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-gradient-to-r from-luxury-accent to-amber-500 text-black font-semibold text-xs tracking-wider uppercase shadow hover:shadow-luxury-glow transition-all cursor-pointer"
                      >
                        Submit Enquiry
                      </button>
                    </form>
                  )}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
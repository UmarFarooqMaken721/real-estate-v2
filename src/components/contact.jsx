import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { motion } from 'motion/react'

function Contact() {
  const [result, setResult] = useState("")
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")
    const formData = new FormData(event.target)
    formData.append("access_key", "3ffc4dc1-a904-4844-bfce-bb2360ef9cdd")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data = await response.json()
      if (data.success) {
        setResult("")
        toast.success("Inquiry Submitted Successfully")
        setFormState({ name: '', email: '', message: '' })
        event.target.reset()
      } else {
        console.log("Error", data)
        toast.error(data.message)
        setResult("")
      }
    } catch (err) {
      console.error(err)
      toast.error("An error occurred. Please try again.")
      setResult("")
    }
  }

  const contactInfo = [
    {
      title: "Corporate Headquarters",
      details: "100 Pine Street, Suite 2400, San Francisco, CA 94111",
      icon: (
        <svg className="w-5 h-5 text-luxury-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    {
      title: "Concierge Hotlines",
      details: "+1 (800) 555-0199 / +1 (415) 555-0248",
      icon: (
        <svg className="w-5 h-5 text-luxury-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      )
    },
    {
      title: "Official Correspondence",
      details: "concierge@eliteestate.com / partner@eliteestate.com",
      icon: (
        <svg className="w-5 h-5 text-luxury-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    {
      title: "In-Person Consultation",
      details: "Mon - Fri: 9:00 AM - 6:00 PM | Sat: 10:00 AM - 4:00 PM (By Appt.)",
      icon: (
        <svg className="w-5 h-5 text-luxury-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ]

  return (
    <div className='bg-luxury-bg text-white py-24 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden' id='contact'>
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-luxury-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10 max-w-5xl">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-xs font-bold tracking-widest text-luxury-accent uppercase mb-3">Get In Touch</h2>
          <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight">
            Contact <span className="text-gradient-gold font-light">With Us</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-accent to-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-md mx-auto text-sm sm:text-base font-light">
            Ready to make a move? Let's build your future together. Contact our client support team for private consultations.
          </p>
        </motion.div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-wide text-gradient-white">Concierge Office</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Connect with our expert consulting teams. Fill out the private inquiry form, or visit our central offices for direct investment assessments.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 mt-0.5">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{info.title}</h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-luxury-card border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl border-glow"
          >
            <h3 className="text-xl font-bold uppercase mb-6 text-gradient-white">Send A Secure Message</h3>
            
            <form onSubmit={onSubmit} className='space-y-6'>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase font-bold text-luxury-accent tracking-wider mb-2">Your Name</label>
                  <input 
                    className='w-full bg-white/5 border border-white/10 focus:border-luxury-accent rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-colors' 
                    type="text" 
                    name='Name' 
                    placeholder='John Doe' 
                    required 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-xs uppercase font-bold text-luxury-accent tracking-wider mb-2">Your Email</label>
                  <input 
                    className='w-full bg-white/5 border border-white/10 focus:border-luxury-accent rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-colors' 
                    type="email" 
                    name='Email' 
                    placeholder='john@example.com' 
                    required 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-xs uppercase font-bold text-luxury-accent tracking-wider mb-2">Message Description</label>
                <textarea 
                  className='w-full bg-white/5 border border-white/10 focus:border-luxury-accent rounded-xl py-3 px-4 text-sm text-white focus:outline-none h-40 resize-none transition-colors' 
                  name="Message" 
                  placeholder="Tell us about your property goals, locations, or investment preferences..." 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='w-full cursor-pointer py-3.5 bg-gradient-to-r from-luxury-accent to-amber-500 text-black font-semibold uppercase tracking-wider text-xs rounded-xl shadow-lg hover:shadow-luxury-glow transition-all'
              >
                {result ? result : "Send Private Message"}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Contact
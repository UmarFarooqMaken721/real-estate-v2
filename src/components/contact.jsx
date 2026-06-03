import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { motion } from 'motion/react'

function Contact() {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")
    const formData = new FormData(event.target)
    formData.append("access_key", "3ffc4dc1-a904-4844-bfce-bb2360ef9cdd")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()
    if (data.success) {
      setResult("")
      toast.success("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      toast.error(data.message)
      setResult("")
    }
  }

  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false }}
        className='text-2xl sm:text-4xl font-bold mb-2 text-center'
      >
        Contact<span className='underline underline-offset-4 decoration-1 font-light'> With Us</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className='text-center text-gray-500 mb-12 max-w-80 mx-auto'
      >
        Ready To Make a Move? Let's Build Your Future Together
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        viewport={{ once: false }}
        onSubmit={onSubmit}
        className='mx-auto max-w-2xl text-gray-600 pt-8'
      >
        <div className='flex flex-wrap'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
            className='w-full md:w-1/2 text-left'
          >
            Your Name
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false }}
            className='w-full md:w-1/2 text-left md:pl-4'
          >
            Your Email
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: false }}
          className='my-6 text-left'
        >
          Message
          <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder="Message" required></textarea>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: false }}
          className='cursor-pointer bg-blue-600 text-white py-2 px-12 mb-10 rounded'
        >
          {result ? result : "Send Message"}
        </motion.button>

      </motion.form>
    </div>
  )
}

export default Contact
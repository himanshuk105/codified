'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaLinkedinIn,
  FaFacebookF,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa'

export const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black text-white px-6 py-10 md:px-20 overflow-hidden">
      {/* Scroll to top button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-4 grid-cols-1 gap-10"
      >
        {/* Logo & Socials */}
        <div className="space-y-4">
          <img src="/logo.svg" alt="Logo" className="w-32" />
          <p className="text-sm text-gray-400">Web Solutions</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="bg-blue-600 p-2 rounded-full hover:scale-105 transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="bg-blue-800 p-2 rounded-full hover:scale-105 transition">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-blue-400 font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {['Home', 'About', 'Contact', 'Service', 'Career'].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-blue-400 font-semibold mb-4">SERVICES</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              'Technology Consulting',
              'AI & Machine Learning',
              'DevOps/MLOps',
              'Data Services',
              'Cloud Services',
              'Privacy Policy',
              'Terms and Conditions',
            ].map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-blue-400 font-semibold mb-4">ADDRESS</h3>
          <div className="flex items-start gap-3 text-gray-300 text-sm mb-2">
            <FaEnvelope size={16} />
            <span>hello@codifiedweb.com</span>
          </div>
          <div className="flex items-start gap-3 text-gray-300 text-sm mb-2">
            <FaPhoneAlt size={16} />
            <span>(+91) 72 210 473 83</span>
          </div>
          <div className="flex items-start gap-3 text-gray-300 text-sm">
            <FaMapMarkerAlt size={16} />
            <span>
              #105, Mohan Nagar, Ramnagariya, Jagatpura,
              <br />
              Jaipur. Near SKIT College.
            </span>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}

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
// import logo from '../../../src/app/(frontend)/image/codified-white-logo.png'

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
    <footer className="relative bg-black text-white  overflow-hidden">
      {/* Scroll to top button */}
      <Contactform />
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}

      <div className="bg-[#000000] text-gray-300 pt-12 px-6 md:px-16">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-6 gap-8"
        >
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              {['Our company', 'Core Team', 'Career', 'CSR', 'How We Work'].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                'iOS App Development',
                'Android App Development',
                'Software Development',
                'Ideation & Design',
                'Mobile App Dev',
                'Research & Innovation',
                'Digital Transformation',
                'more...',
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Blockchain',
                'Artificial Intelligence',
                'AR and VR',
                'Cloud Computing',
                'Internet of Things',
                'Metaverse Development',
                'NFT Development',
                'more...',
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Healthcare',
                'Education',
                'SaaS',
                'Finance',
                'On-Demand',
                'eCommerce',
                'Logistics',
                'more...',
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-white font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-2 text-sm">
              {[
                'KFC',
                'Adidas',
                'IKEA',
                'Hukoomi',
                "Domino's",
                'Pizza Hut',
                'YouCOMM',
                'more...',
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {['Blog', 'Press Release', 'Guides', 'Ebooks'].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="md:flex justify-between items-center gap-6 text-sm text-gray-400 ">
          <div className="flex items-center gap-4">
            <img
              src="https://codifiedweb.com/wp-content/uploads/2025/06/codified-white-logo.png"
              alt="DMCA"
              className="w-50"
            />

            <p className="text-gray-400">
              Full stack mobile (iOS, Android)<br></br> and web app design and development agency
            </p>
          </div>
        </div>

        <div className="my-4 border-t border-gray-700"></div>

        <div className="flex justify-between w-full md:w-auto mt-4 md:mt-0 pb-3">
          <p>Codified Web solutions</p>
          <p>
            2025-2026 (c) Appinventiv <span>| SiteMap | Privacy Policy</span>
          </p>
          <span className="ml-4 flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  )
}

const Contactform = () => {
  const [payloadform, setPayloadform] = useState<any[] | null>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        // const response = await fetch(
        //   'https://codified.vercel.app/api/forms/684985828fec93e883afb49d',
        // )
        const response = await fetch('http://localhost:3000/api/forms/684985828fec93e883afb49d')
        const data = await response.json()
        setPayloadform(data?.fields || [])
      } catch (error) {
        console.error('Failed to fetch form data:', error)
        setPayloadform([]) // fallback to empty array on error
      }
    }
    getData()
  }, [])

  return (
    <div className="bg-[#111111] h-[calc(100vh-100px)] pt-[60px] pb-[60px] px-4 text-white flex flex-col md:flex-row gap-3">
      <div className="md:w-1/2 flex flex-col gap-2 md:gap-8 md:justify-center md:items-center h-30 md:h-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Our Tech Experts are Change Catalysts
        </h2>
        <h3 className="text-lg text-gray-400 ">
          Book a Free Consultation Call with Our Experts Today
        </h3>
      </div>

      <form className="grow-1 flex flex-col gap-2 p-3 border-2 border-[#333333] rounded-lg w-full md:max-w-xl justify-between">
        {payloadform !== null && payloadform.length > 0 ? (
          payloadform.map((field, index) => (
            <InputField
              key={index}
              label={field.label || field.name || `Field ${index + 1}`}
              name={field.name}
              type={field.blockType}
              options={field.options}
            />
          ))
        ) : (
          <p className="text-gray-400 italic">No form fields configured.</p>
        )}
        <button className="border-2 p-3 rounded-lg bg-white text-black font-bold hover:bg-gray-100 transition">
          Get Proposal
        </button>
      </form>
    </div>
  )
}

const InputField = ({
  label,
  name,
  type,
  options,
}: {
  label: string
  name: string
  type?: string
  options: []
}) => {
  return (
    <div className="border border-[#222222] w-full px-3 py-4 rounded-lg">
      {type == 'select' ? (
        <select className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none">
          <option className="bg-[#222222]">Select your Budget</option>
          {options &&
            options.map((fe: any, i: number) => {
              return (
                <option key={i} className="bg-[#222222]" value={fe?.value}>
                  {fe.label}
                </option>
              )
            })}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          placeholder={label}
          className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
      )}
    </div>
  )
}

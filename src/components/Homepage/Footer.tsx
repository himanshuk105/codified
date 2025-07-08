'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaLinkedinIn,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowUp,
  FaInstagram,
} from 'react-icons/fa'
import { FAQSection } from './Faq'
import { useForm } from 'react-hook-form'
import codified from '../../../public/codified-logo.png'
type FieldType = {
  label: string
  name: string
  blockType?: string
  options?: { label: string; value: string }[]
}
import { RiTwitterXFill } from 'react-icons/ri'

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
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] opacity-30 z-[-1]" />

      {/* Scroll to top */}
      {showTopBtn && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-105 hover:bg-blue-700 transition-transform backdrop-blur-lg border border-white/20 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}

      <FAQSection />
      {/* Contact Section */}
      <Contactform />

      {/* Main Footer Content */}
      <div className="pt-12 px-6 md:px-16 text-gray-300 mt-10 sm:mt-0 bg-white">
        <motion.div
          initial={{ opacity: 1, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-6 gap-8 backdrop-blur-md  rounded-2xl p-8 border border-white/10"
        >
          {[
            {
              title: 'About',
              items: ['Our company', 'Core Team', 'Career', 'CSR', 'How We Work'],
            },
            {
              title: 'Services',
              items: [
                'iOS App Development',
                'Android App Development',
                'Software Development',
                'Ideation & Design',
                'Mobile App Dev',
                'Research & Innovation',
                'Digital Transformation',
                'more...',
              ],
            },
            {
              title: 'Technologies',
              items: [
                'Blockchain',
                'Artificial Intelligence',
                'AR and VR',
                'Cloud Computing',
                'Internet of Things',
                'Metaverse Development',
                'NFT Development',
                'more...',
              ],
            },
            {
              title: 'Industries',
              items: [
                'Healthcare',
                'Education',
                'SaaS',
                'Finance',
                'On-Demand',
                'eCommerce',
                'Logistics',
                'more...',
              ],
            },
            {
              title: 'Portfolio',
              items: [
                'KFC',
                'Adidas',
                'IKEA',
                'Hukoomi',
                "Domino's",
                'Pizza Hut',
                'YouCOMM',
                'more...',
              ],
            },
            {
              title: 'Resources',
              items: ['Blog', 'Press Release', 'Guides', 'Ebooks'],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-black text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-md leading-relaxed text-gray-400">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-blue-500 text-gray-700 text-md transition-colors cursor-pointer text-sm hover:underline"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Logo + Description */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-gray/10">
          <div className="flex items-center gap-4">
            <img src={codified.src} alt="Logo" className="h-24" />
            <p className="text-gray-700 text-sm leading-relaxed max-w-sm">
              Full stack mobile (iOS, Android) and web app design and development agency.
            </p>
          </div>

          <div className="flex items-center gap-4 text-white/60">
            <a
              href="https://www.linkedin.com/company/codified-web-solutions/posts/?feedView=all"
              target="_blank"
            >
              <FaLinkedinIn className="hover:text-blue-500 text-[#4994cc] text-2xl transition" />
            </a>
            <a href="https://www.facebook.com/codifiedweb" target="_blank">
              <FaFacebookF className="hover:text-blue-500  text-[#4994cc] text-2xl transition" />
            </a>
            <a href="https://www.instagram.com/codified_web/" target="_blank">
              <FaInstagram className="hover:text-blue-500 text-[#4994cc] text-2xl transition" />
            </a>
            <a href="https://x.com/codifiedweb" target="_blank">
              <RiTwitterXFill className="hover:text-blue-500 text-[#4994cc] text-2xl transition" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 py-4 border-t border-white/10">
          <p>© 2025-2026 Codified Web Solutions</p>
          <p>
            <span className="hover:text-blue-500 cursor-pointer">SiteMap</span> |{' '}
            <span className="hover:text-blue-500 cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

const Contactform = () => {
  const [payloadform, setPayloadform] = useState<FieldType[]>([])
  const [formID, setFormID] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    const dataToSend = Object.entries(data).map(([name, value]) => ({
      field: name,
      value,
    }))

    try {
      const response = await fetch(`/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: formID,
          submissionData: dataToSend,
        }),
      })

      if (!response.ok) throw new Error('Form submission failed.')

      console.log('✅ Form submitted successfully!')
      reset()
      // Optional: show toast/success message
    } catch (err) {
      console.error('❌ Submission error:', err)
      // Optional: show error message
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WEB_URI}/api/forms?where[title][equals]=Contactus`,
        )
        const data = await response.json()
        const form = data?.docs?.[0]
        if (form) {
          setPayloadform(form.fields || [])
          setFormID(form.id)
        }
      } catch (error) {
        console.error('Failed to fetch form data:', error)
        setPayloadform([])
      }
    }

    getData()
  }, [])

  return (
    <div className="bg-[linear-gradient(180deg,_#171624_0%,_#171623_100%)]  text-white flex flex-col md:flex-row gap-6 p-8 rounded-0 border border-white/10 shadow-inner">
      <div className="md:w-1/2 flex flex-col gap-4 justify-center">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Our Tech Experts are Change Catalysts
        </h2>
        <h3 className="text-lg text-gray-400">
          Book a Free Consultation Call with Our Experts Today
        </h3>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 p-5 border border-[#333] bg-gray-800 rounded-xl w-full md:max-w-xl shadow-lg"
      >
        {payloadform.length > 0 ? (
          payloadform.map((field, index) => (
            <InputField
              key={index}
              label={field.label || field.name || `Field ${index + 1}`}
              name={field.name}
              type={field.blockType}
              options={field.options || []}
              register={register}
              error={
                typeof errors[field.name]?.message === 'string'
                  ? errors[field.name]?.message
                  : undefined
              }
            />
          ))
        ) : (
          <p className="text-gray-400 italic">No form fields configured.</p>
        )}
        <button
          type="submit"
          className="border-2 p-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 border border-gray-800 cursor-pointer font-bold hover:bg-gray-100 transition"
        >
          Get Proposal
        </button>
      </form>
    </div>
  )
}

// ------------------ Input Field Component ------------------

export const InputField = ({
  label,
  name,
  type = 'text',
  options,
  register,
  error,
}: {
  label: string
  name: string
  type?: string
  options?: { label: string; value: string }[]
  register: any
  error?: any
}) => {
  return (
    <div className="border border-[#222] w-full px-3 py-4 rounded-lg bg-white">
      {type === 'select' ? (
        <select
          {...register(name, { required: 'This field is required' })}
          className="w-full bg-white text-gray-700 placeholder-gray-700 focus:outline-none"
        >
          {options?.map((option, i) => (
            <option key={i} className="bg-[#fff]" value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...register(name, { required: 'This field is required' })}
          type={type === 'email' ? 'email' : type}
          placeholder={label}
          className="w-full bg-transparent text-gray-700 placeholder-gray-700 focus:outline-none"
        />
      )}

      {typeof error === 'string' && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )
}

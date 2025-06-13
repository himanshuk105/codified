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
import { SubmitHandler, useForm } from 'react-hook-form'

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

      <div className="px-6 py-10 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 grid-cols-1 gap-10"
        >
          {/* Logo & Socials */}
          <div className="space-y-4">
            <img
              src="https://codifiedweb.com/wp-content/uploads/2023/10/cropped-Logo1-3-1.webp"
              alt="Logo"
              className="h-30"
            />
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
      </div>
    </footer>
  )
}

type Inputs = {
  fullname: string
  email: string
  contactno: string
  budget: string
  description: string
  requiredservice: string
}

const formsubmission = async (data: any, formId: string) => {
  const req = await fetch('https://codified.vercel.app/api/form-submissions', {
    // const req = await fetch('http://localhost:3000/api/form-submissions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      form: formId,
      submissionData: data,
    }),
  })
  const res = await req.json()
  return res
}

const Contactform = () => {
  const [payloadform, setPayloadform] = useState<any[] | null>(null)
  const { register, reset, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      fullname: '',
      email: '',
      contactno: '',
      budget: '',
      description: '',
      requiredservice: '',
    },
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const dataToSend = Object.entries(data).map(([name, value]) => ({
      field: name,
      value,
    }))
    const res = await formsubmission(dataToSend, '684985828fec93e883afb49d')
    if (res.success) {
      alert('Form submitted successfully')
    }
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://codified.vercel.app/api/forms/684985828fec93e883afb49d',
        )
        // const response = await fetch('http://localhost:3000/api/forms/684985828fec93e883afb49d')
        const data = await response.json()
        setPayloadform(data?.fields || [])
        console.log(data?.id)
        reset({
          fullname: '',
          email: '',
          contactno: '',
          budget: '',
          description: '',
          requiredservice: '',
        })
      } catch (error) {
        console.error('Failed to fetch form data:', error)
        setPayloadform([]) // fallback to empty array on error
      }
    }
    getData()
  }, [])

  return (
    <div className="bg-[#111111] h-[calc(100vh-150px)] p-7 text-white flex flex-col md:flex-row gap-3">
      <div className="md:w-1/2 flex flex-col gap-2 md:gap-8 md:justify-center md:items-center h-30 md:h-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          Our Tech Experts are Change Catalysts
        </h2>
        <h3 className="text-lg text-gray-400">
          Book a Free Consultation Call with Our Experts Today
        </h3>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grow-1 flex flex-col gap-2 p-3 border-2 border-[#333333] rounded-lg w-full md:max-w-xl justify-between"
      >
        {payloadform !== null && payloadform.length > 0 ? (
          payloadform.map((field, index) => (
            <InputField
              key={index}
              label={field.label || field.name || `Field ${index + 1}`}
              name={field.name}
              type={field.blockType}
              options={field.options}
              placeholder={field.placeholder}
              register={register}
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
  placeholder,
  register,
}: {
  label: string
  name: string
  type?: string
  options?: []
  placeholder?: string
  register: any
}) => {
  return (
    <div className="border border-[#222222] w-full px-3 py-4 rounded-lg">
      {type == 'select' ? (
        <select
          name={name}
          {...register(`${name}`)}
          className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
        >
          <option className="bg-[#222222]">{placeholder}</option>
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
          {...register(`${name}`)}
          className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
        />
      )}
    </div>
  )
}

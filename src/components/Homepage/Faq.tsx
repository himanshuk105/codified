'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services does Codified Solutions offer?',
    answer:
      'We specialize in custom software development, AI/ML solutions, mobile apps, web development, UI/UX design, SEO, and cloud infrastructure.',
  },
  {
    question: 'Do you provide AI integration into existing apps?',
    answer:
      'Yes! We can integrate intelligent AI models like ChatGPT, custom LLMs, or ML workflows into your current product with ease.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We work across industries including healthcare, e-commerce, fintech, logistics, and education, delivering tailored digital solutions.',
  },
  {
    question: 'How do I start a project with Codified Solutions?',
    answer:
      'Simply contact us through our website or drop an email. We’ll schedule a discovery call to understand your needs and goals.',
  },
]

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full px-4 md:px-10 py-16 bg-section text-white bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xxl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent leading-tight bg-clip-text mb-6 mx-auto text-center">
          Frequently Asked Questions{' '}
        </h2>

        <div className="space-y-4 mt-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-2xl bg-[#ffffff] hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-white text-left text-lg md:text-xl font-medium focus:outline-none"
              >
                <span className="text-black">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-5 text-gray-700 text-base md:text-lg">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

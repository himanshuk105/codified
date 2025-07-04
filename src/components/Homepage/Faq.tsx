// components/FAQSection.tsx
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
    <section className="w-full px-4 md:px-10 py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
          Frequently Asked <span className="text-cyan-400">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-2xl bg-[#0c0c0c] hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg md:text-xl font-medium text-white focus:outline-none"
              >
                <span>{faq.question}</span>
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
                    <div className="px-6 pb-5 text-gray-300 text-base md:text-lg">{faq.answer}</div>
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

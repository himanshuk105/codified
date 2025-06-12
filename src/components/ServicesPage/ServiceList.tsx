'use client'

import { motion, useAnimate } from 'framer-motion'
import { useRef } from 'react'
import { ServiceTestimonials } from './Servicetestimonial'

export const ServiceList = () => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [scope, animate] = useAnimate()

  const handleHoverStart = async (i: number) => {
    const button = buttonRefs.current[i]
    if (!button) return

    await animate(
      button,
      {
        backgroundColor: '#000',
        color: '#fff',
      },
      { duration: 0.4, ease: 'easeInOut' },
    )

    const arrow = button.querySelector('.arrow')
    if (arrow) {
      animate(arrow, { x: [0, 8, 0] }, { duration: 0.8, ease: 'easeInOut', repeat: Infinity })
    }
  }

  const handleHoverEnd = async (i: number) => {
    const button = buttonRefs.current[i]
    if (!button) return

    await animate(
      button,
      {
        backgroundColor: '#fff',
        color: '#000',
      },
      { duration: 0.4, ease: 'easeInOut' },
    )

    const arrow = button.querySelector('.arrow')
    if (arrow) {
      animate(arrow, { x: 0 }, { duration: 0.2 })
    }
  }

  const developmentType = ['UI/UX Design', 'Consultation', 'Photoshop Expertise', 'Xpro Branding']

  return (
    <div className="mt-20 px-4 md:px-0 " ref={scope}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="text-white space-y-4">
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-extrabold leading-tight">
            Our Premium Services
          </h2>
          <h4 className="text-[clamp(1.2rem,3vw,2.6rem)] font-semibold text-gray-300">
            Designed to Elevate Your Brand
          </h4>
          <p className="text-gray-300">
            We help you bring your vision to life with creativity, strategy, and technology. Our
            services are crafted to deliver measurable impact.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-4 md:gap-6 items-start">
          {developmentType.map((label, i) => (
            <motion.button
              key={i}
              ref={(el) => {
                buttonRefs.current[i] = el
              }}
              onMouseEnter={() => handleHoverStart(i)}
              onMouseLeave={() => handleHoverEnd(i)}
              className="border-2 border-white bg-white text-black px-6 py-3 rounded-xl text-sm font-bold shadow-md flex items-center justify-between w-48 h-14 transition-colors duration-300"
            >
              <span>{label}</span>
              <motion.span className="arrow text-lg font-bold">&gt;</motion.span>
            </motion.button>
          ))}
        </div>
      </div>
      <ServiceTestimonials />
    </div>
  )
}

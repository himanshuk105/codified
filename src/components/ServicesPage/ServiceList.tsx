'use client'

import { motion, useAnimate } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ServiceTestimonials } from './Servicetestimonial'

export const ServiceList = ({ block }: any) => {
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

  return (
    <section className="box-border text-white bg-gray-900 grid grid-cols-1 gap-12 p-5 py-[80px] md:px-20 overflow-hidden">
      <div id={block.blockName} className="mt-20 px-4 md:px-0 " ref={scope}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="text-white space-y-4">
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-extrabold leading-tight">
              {block.heading}
            </h2>
            {block.subheading && (
              <h4 className="text-[clamp(0.2rem,2vw,2.6rem)] font-semibold text-gray-300">
                {block.subheading}
              </h4>
            )}
            {block.description?.root?.children?.map((child: any, idx: number) => (
              <p className="text-gray-300" key={idx}>
                {child?.children?.map((t: any) => t.text).join('')}
              </p>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap gap-4 md:gap-6 items-start">
            {block.Button?.map((btn: any, i: number) => (
              <Link href={btn['Button Link']} key={btn.id} passHref>
                <motion.button
                  ref={(el) => {
                    buttonRefs.current[i] = el
                  }}
                  onMouseEnter={() => handleHoverStart(i)}
                  onMouseLeave={() => handleHoverEnd(i)}
                  className="border-2 border-white bg-white text-black px-6 py-3 rounded-xl text-sm font-bold shadow-md flex items-center justify-between w-48 h-14 transition-colors duration-100 text-md"
                >
                  <span className="text-sm">{btn['Button Text']}</span>
                  <motion.span className="arrow text-lg font-bold">&gt;</motion.span>
                </motion.button>
              </Link>
            ))}
          </div>
        </div>
        <ServiceTestimonials />
      </div>
    </section>
  )
}

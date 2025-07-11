'use client'

import { useRef } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import '../../css/hero3.css'

export const Singleserviceheading = ({ hero }: any) => {
  const sectionRef = useRef(null)
  const size = useWindowSize()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0.3, 0.9], [200, -30])
  const contentY = useTransform(scrollYProgress, [0.3, 0.9], [-40, 40])

  const isLargeScreen = size.width !== null && size.width >= 1024

  // text-white py-24 px-6 md:px-16
  return (
    <motion.section ref={sectionRef} className="py-20  relative w-full overflow-hidden md:py-0">
      {/* Background Image with Parallax */}
      <motion.img
        style={{ translateY: isLargeScreen ? imageY : 0 }}
        src="https://rtslabs.com/wp-content/uploads/2024/05/ai-consulting1-AdobeStock_406334103.png"
        alt="Hero Background"
        className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover opacity-60"
      />

      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        style={{ translateY: isLargeScreen ? contentY : 0 }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-white drop-shadow-md max-w-5xl">
          {hero.heading}
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl text-gray-200 leading-relaxed">
          {hero.subheading}
        </p>
        {hero.button?.[0]?.text && (
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all font-semibold text-lg"
            >
              {hero.button[0].text}
            </motion.button>
          </Link>
        )}
      </motion.div>
    </motion.section>
  )
}

'use client'

import { useRef } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import '../../css/hero3.css'

export const Singleserviceheading = ({ hero }: any) => {
  const sectionRef = useRef(null)
  const size = useWindowSize()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0.3, 0.8], [200, -50])
  const contentY = useTransform(scrollYProgress, [0.3, 0.8], [-40, 60])

  const isLargeScreen = size.width !== null && size.width >= 1024

  // text-white py-24 px-6 md:px-16
  return (
    <motion.section ref={sectionRef} className="py-20  relative w-full overflow-hidden md:py-0">
      {/* Background Image with Parallax */}
      <motion.img
        style={{ translateY: isLargeScreen ? imageY : 0 }}
        src="https://images.unsplash.com/photo-1749456289357-4e5cbffe9fb3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Background"
        className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover "
      />

      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        style={{ translateY: isLargeScreen ? contentY : 0 }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-md max-w-5xl">
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

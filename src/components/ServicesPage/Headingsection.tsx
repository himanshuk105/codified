'use client'

import { motion, useAnimate } from 'framer-motion'

export const HeadingSection = ({ hero1 }: any) => {
  const heading = hero1?.heading
  const subheading = hero1?.subheading
  const [scope, animate] = useAnimate()

  const handleHoverStart = () => {
    animate('#tt', { x: [0, 10, 0] }, { duration: 0.8, ease: 'easeInOut', repeat: Infinity })
  }

  const handleHoverEnd = () => {
    animate('#tt', { x: 0 }) // Stop the animation// Reset to original position
  }

  return (
    <div className="box-border relative z-10 text-center flex flex-col justify-center gap-6 md:h-screen">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-yellow-400 text-transparent bg-clip-text p-2">
        Elevate Your Digital Presence
      </h2>
      <p className="text-lg md:text-xl text-gray-300">
        Build modern, scalable, and visually stunning applications with our expert team.
      </p>
      {hero1.button.map((d: any) => (
        <motion.button
          key={d.text}
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
          className="border-2 border-white bg-black text-white px-6 py-3 rounded-md text-sm sm:text-base shadow-lg mt-6 flex items-center flex-row justify-center gap-3 w-100 self-center cursor-pointer font-extrabold hover:bg-white hover:text-black transition-colors duration-200"
          ref={scope}
        >
          <span>{d.text}</span> <span id="tt">&gt;</span>
        </motion.button>
      ))}
    </div>
  )
}

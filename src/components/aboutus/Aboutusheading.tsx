'use client'

import { motion, useAnimate } from 'motion/react'
import Squares from './Squares'

export const Aboutusheading = () => {
  const [scope, animate] = useAnimate()

  const handleHoverStart = () => {
    animate(scope.current, {
      backgroundColor: 'black',
      color: 'white',
    })

    animate('#tt', { x: [0, 20, 0] }, { duration: 0.8, ease: 'easeInOut', repeat: Infinity })
  }

  const handleHoverEnd = () => {
    animate(scope.current, {
      backgroundColor: 'white',
      color: 'black',
    })

    animate('#tt', { x: 0 })
  }

  return (
    <div className="relative h-screen">
      <div className="relative h-full w-full">
        <Squares />
      </div>
      <div className="z-20 h-full w-full absolute bg-transparent flex flex-col items-center justify-center top-0 text-5xl font-bold py-24 px-3 md:px-20 pointer-events-auto text-center">
        <h2 className="">Innovative Software Development Tailored for Your Success</h2>
        <motion.button
          ref={scope}
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
          className="border-2 border-white bg-black text-white px-4 py-2 rounded-md text-sm sm:text-base shadow-lg mt-6 flex items-center flex-row justify-center gap-3 w-50 self-center cursor-pointer  pointer-events-auto transition-colors duration-300"
        >
          <span>Connect with Us</span> <span id="tt">&gt;</span>
        </motion.button>
      </div>
    </div>
  )
}

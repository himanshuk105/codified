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
    <div
      className="box-border relative z-10 text-center flex flex-col justify-center gap-6 md:h-screen pt-20 bg-[#F8F7F3] px-6"
      style={{
        backgroundImage: `url('https://www.helpfulinsightsolution.com/wp-content/themes/hipl/images/ui-ux-design/bg-left.webp'), url('https://www.helpfulinsightsolution.com/wp-content/themes/hipl/images/ui-ux-design/bg-right.webp')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top left, bottom right',
        backgroundSize: 'auto',
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text p-2">
        Elevate Your Digital Presence
      </h2>
      <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
        Build modern, scalable, and visually stunning applications with our expert team.
      </p>

      {hero1.button.map((d: any) => (
        <motion.button
          key={d.text}
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
          className="border-2 border-black hover:border-[#4993cd] bg-white text-black px-6 py-3 rounded-md text-sm sm:text-base shadow-lg mt-6 flex items-center justify-center gap-3 font-extrabold hover:bg-[#4993cd] hover:text-white transition-colors duration-200"
          ref={scope}
        >
          <span>{d.text}</span> <span id="tt">&gt;</span>
        </motion.button>
      ))}
    </div>
  )
}

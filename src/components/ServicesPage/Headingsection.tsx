'use client'

import { motion, useAnimate } from 'framer-motion'
// Make sure Waves.tsx exists in the same folder, or update the path if it's elsewhere
import Waves from './Waves'

export const HeadingSection = ({ hero1 }: any) => {
  // const heading = hero1?.heading
  // const subheading = hero1?.subheading
  const [scope, animate] = useAnimate()

  const handleHoverStart = () => {
    animate('#tt', { x: [0, 10, 0] }, { duration: 0.8, ease: 'easeInOut', repeat: Infinity })
  }

  const handleHoverEnd = () => {
    animate('#tt', { x: 0 }) // Stop the animation
  }

  return (
    <div className="relative">
      {/* Background Waves */}
      <div className="absolute inset-0 z-0">
        <Waves
          lineColor="#fff"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      {/* Main Content */}
      <div
        className="box-border relative z-10 text-center flex flex-col items-center justify-center gap-6 py-40 bg- px-6"
        style={{
          backgroundImage: `url("https://www.helpfulinsightsolution.com/wp-content/themes/hipl/images/footerbg-left.webp"), url("https://www.helpfulinsightsolution.com/wp-content/themes/hipl/images/footerbg-right.webp")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left, bottom right',
          backgroundSize: 'auto',
          backgroundColor: '#4993cd',
        }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r text-white text-transparent bg-clip-text p-2">
          Elevate Your Digital Presence
        </h2>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
          Build modern, scalable, and visually stunning applications with our expert team.
        </p>

        {hero1.button.map((d: any) => (
          <motion.button
            key={d.text}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            className="border-2 border-[#4993cd] bg-[#fff] hover:border-[#3ca9ff] text-[#000] px-6 py-3 rounded-md text-sm sm:text-base shadow-lg mt-6 flex items-center justify-center gap-3 font-extrabold hover:bg-[#3ca9ff] hover:text-white transition-colors duration-200"
            ref={scope}
          >
            <span>{d.text}</span> <span id="tt">&gt;</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

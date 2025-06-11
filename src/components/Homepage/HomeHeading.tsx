'use client'

import { motion } from 'framer-motion'

type ComponentProps = {
  data: {
    heading: string
    text: string
    para: string
  }
}

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

export const HomeHeading = ({ data }: ComponentProps) => {
  const words = data?.heading.split(' ')

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[90%] z-10 text-white text-center px-4">
      <h1 className="w-[480px] sm:w-[520px] md:w-[720px] flex flex-wrap lg:w-[900px] justify-center text-balance text-center leading-tight mb-6 font-bold text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl">
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={wordAnimation}
            className="mr-2 inline-block"
          >
            {word.split('').map((char, j) => (
              <motion.span key={j} whileHover={{ scale: 1.25 }} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.span>
        ))}
      </h1>

      <p className="text-base sm:text-lg md:text-xl mb-6 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] text-gray-300">
        {data?.para}
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="border-2 border-white bg-black text-white px-6 py-3 rounded-md text-sm sm:text-base shadow-lg"
      >
        {data?.text}
      </motion.button>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'

export const IndustriesHero = () => {
  return (
    <section className="relative text-white py-24 px-6 md:px-16 w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Animated Glowing Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-20"
      >
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-full h-full bg-[radial-gradient(circle_at_30%_30%,#8b5cf6_0%,#ec4899_40%,transparent_80%)] bg-[length:200%_200%] opacity-30 blur-2xl"
        />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-6">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text"
        >
          Empowering Industries with Innovation
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Discover how our digital solutions revolutionize businesses across every industry through
          advanced technology and intelligent automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm md:text-base rounded-full shadow-lg hover:brightness-110 transition-all duration-300">
            Talk with Expert
          </button>
        </motion.div>
      </div>
    </section>
  )
}

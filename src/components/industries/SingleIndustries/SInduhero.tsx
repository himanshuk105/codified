'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

export const SingleIndustryHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black min-h-[90vh] flex items-center px-6 py-20">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-purple-800 via-indigo-900 to-black opacity-40"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <p className="text-sm font-medium text-gray-400">
            <span className="font-bold text-white">Home</span> &gt;{' '}
            <span className="font-bold text-white">Industries</span> &gt; Travel App Development
            Company
          </p> */}

          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-6 leading-tight">
            Travel App Development
            <br /> Services
          </h1>

          <p className="text-lg text-gray-300 mb-6">
            Our travel app development company is breaking the barriers of mediocrity in the travel
            industry, and inspiring tourists with unmatched experiences with dynamic, feature-loaded
            travel apps.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md flex items-center gap-2"
          >
            Get a Free Quote <BsArrowRight />
          </motion.button>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* <motion.div
            className="absolute -bottom-10 left-0 w-full h-[200px]"
            initial={{ x: '-10%' }}
            animate={{ x: '110%' }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="relative">
              <svg
                viewBox="0 0 300 150"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,100 C100,50 200,150 300,100"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
              <motion.div
                className="absolute left-1/2 bottom-0 text-white text-xl"
                animate={{
                  x: ['-50%', '150%'],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: 'linear',
                }}
              >
                ✈️
              </motion.div>
            </div>
          </motion.div> */}

          <div className="relative rounded-[50px] border-[16px] border-gray-800 shadow-xl overflow-hidden w-[300px] h-[420px] bg-gray-900">
            <Image
              src="/60a17488-8d81-42d5-b9b3-d3e8f5812cad.png"
              alt="Travel View"
              layout="fill"
              objectFit="cover"
              className="rounded-[32px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

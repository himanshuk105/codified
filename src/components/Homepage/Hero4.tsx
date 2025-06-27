'use client'

import { motion } from 'framer-motion'
import { FaRobot, FaBrain, FaCodeBranch, FaRocket, FaChartLine, FaComments } from 'react-icons/fa'

export const Hero4 = ({ hero4 }: any) => {
  const icons = [
    <FaBrain className="text-3xl text-blue-400" />,
    <FaRocket className="text-3xl text-purple-400" />,
    <FaChartLine className="text-3xl text-pink-400" />,
    <FaCodeBranch className="text-3xl text-green-400" />,
    <FaComments className="text-3xl text-yellow-400" />,
    <FaRobot className="text-3xl text-red-400" />,
  ]

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {hero4.heading}
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {hero4.subheading}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {hero4.Cards.map((card: any, idx: number) => (
          <motion.div
            key={idx}
            className="bg-[#111] p-6 rounded-2xl shadow-md hover:shadow-blue-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="mb-4">{icons[idx % icons.length]}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{card.heading}</h3>
            <p className="text-gray-400 text-sm">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {hero4.Button.length > 0 && (
        <div className="mt-12 text-center">
          <motion.a
            href={hero4.Button[0]['Button Link']}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-md border-2 text-white font-semibold transition-all relative overflow-hidden group inline-block"
            style={{ borderColor: '#4993cd' }}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">
              {hero4.Button[0]['Button Text']} →
            </span>
            <span
              className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0 z-0"
              style={{ backgroundColor: '#4993cd' }}
            ></span>
          </motion.a>
        </div>
      )}
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const WhyUs = ({ data }: any) => {
  const [selected, setSelected] = useState(data.Cards[0])

  const descriptionText = data?.description?.root?.children?.[0]?.children?.[0]?.text || ''

  return (
    <section className="w-full px-5 sm:px-8 md:px-16 py-16 bg-gradient-to-br from-[#0f0f0f] to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left sm:text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500">
            {data.heading}
          </h2>
          <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {descriptionText}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left List */}
          <ul className="space-y-4 md:w-1/2">
            {data.Cards.map((card: any) => (
              <motion.li
                layout
                key={card.id}
                onClick={() => setSelected(card)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer px-5 py-4 rounded-xl transition-all duration-300 border ${
                  selected.id === card.id
                    ? 'bg-gradient-to-r from-white via-gray-200 to-white text-black font-bold shadow-xl'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900 border-gray-700'
                }`}
              >
                {card.heading}
              </motion.li>
            ))}
          </ul>

          {/* Right Description */}
          <div className="md:w-1/2 text-base text-gray-300 leading-relaxed">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg text-gray-200 bg-[#111111] p-6 rounded-xl border border-gray-800 shadow-md">
                  {selected.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

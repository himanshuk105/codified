'use client'

import { useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
import Image from 'next/image'
import { CiCircleChevDown } from 'react-icons/ci'
import { motion, AnimatePresence } from 'framer-motion'

export const Techstacks = ({ techstack }: any) => {
  const [selected, setSelected] = useState(techstack?.Cards?.[0])
  const size = useWindowSize()

  const handleCardClick = (id: string) => {
    const card = techstack.Cards.find((c: any) => c.id === id)
    setSelected(card)
  }

  return (
    <section className="w-full mt-20 px-4 sm:px-8">
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {techstack.heading}
        </h2>
        <p className="text-xl sm:text-2xl mt-2 font-semibold text-white">{techstack.subheading}</p>
        <p className="mt-4 text-base sm:text-lg text-white leading-relaxed">
          {techstack?.description?.root?.children?.[0]?.children?.[0]?.text ||
            'We use top tools to develop scalable and efficient systems.'}
        </p>
      </div>

      {size.width !== null && size.width >= 640 ? (
        <div className="flex flex-row border rounded-2xl overflow-hidden shadow-md bg-white">
          {/* Sidebar */}
          <div className="w-1/3 border-r divide-y">
            {techstack.Cards.map((card: any) => (
              <motion.button
                layout
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full text-left px-6 py-4 text-lg font-medium transition-all duration-200 cursor-pointer ${
                  selected?.id === card.id
                    ? 'bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-900 font-bold'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {card.heading}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div className="w-2/3 p-6 grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center bg-gray-50">
            <AnimatePresence mode="wait">
              {selected?.['tech-data']?.map((tech: any) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center gap-2 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="w-14 h-14 relative">
                    <Image
                      src={`/media/${tech.logo}`}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{tech.name}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {techstack.Cards.map((card: any) => (
            <MobileTechCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </section>
  )
}

const MobileTechCard = ({ card }: any) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      layout
      className={`transition-all rounded-2xl overflow-hidden border ${
        open ? 'bg-white shadow-md' : 'bg-[#111111] text-white'
      }`}
    >
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-bold text-base">{card.heading}</h3>
        <CiCircleChevDown
          className={`transition-transform text-xl ${
            open ? 'rotate-180 text-black' : 'text-white'
          }`}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-4 p-4 bg-white"
          >
            {card?.['tech-data']?.map((tech: any) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-2 p-2 rounded-xl border shadow-sm cursor-pointer"
              >
                <div className="w-12 h-12 relative">
                  <Image
                    src={`/media/${tech.logo}`}
                    alt={tech.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-800">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

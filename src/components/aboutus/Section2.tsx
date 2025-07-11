'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

function tochangeinsentence(words: string) {
  const arr = words.split(' ')
  const chunks: string[][] = []
  for (let i = 0; i < arr.length; i += 9) {
    chunks.push(arr.slice(i, i + 9))
  }
  return chunks
}

export const Section2 = ({ achievement }: any) => {
  const words = achievement.description.root.children[0].children[0].text
  const word = tochangeinsentence(words)
  const divref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: divref,
    offset: ['center end', 'end center'],
  })

  const gradients = word.map((_, i) => {
    const start = 0.1 + i * 0.1
    const end = start + 0.12
    return useTransform(scrollYProgress, [start, end], [0, 1400], { clamp: true })
  })

  // const gradient = [gradient1, gradient2, gradient3]

  return (
    <div className="py-20 h-screen px-3 md:px-20 flex flex-col justify-center w-full bg-section">
      <div ref={divref} className="text-center w-full ">
        {word.map((chunk, i) => (
          <motion.span
            key={i}
            style={{
              backgroundPositionX: gradients[i],
              backgroundSize: '400%',
              backgroundRepeat: 'repeat',
            }}
            className="text-justify font-bold px-1 inline text-base md:text-3xl bg-gradient-to-r from-gray-800 to-white from bg-clip-text text-white md:text-transparent "
          >
            {chunk.join(' ')}
          </motion.span>
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-center gap-3 md:flex-nowrap mt-5 self-stretch">
        {achievement.blobcard.map(({ label, value, id }: any) => {
          return (
            <div
              key={id}
              className="md:w-1/4 w-[47%] rounded-xl flex flex-col h-32 p-4 bg-[#4994cc] shadow"
            >
              <span className="font-extrabold text-6xl text-black mb-2">{value}</span>
              <span className="text-[18px] text-black">{label}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react'
import { useRef } from 'react'

function tochangeinsentence(words: string) {
  const arr = words.split(' ')
  const chunks: string[][] = []
  for (let i = 0; i < arr.length; i += 15) {
    chunks.push(arr.slice(i, i + 15))
  }
  return chunks
}

export const Section2 = ({ prop }: any) => {
  const words =
    'Dmitriev Agency is a digital product design & development studio crafting bold Dmitriev Agency is a digital product design & development studio crafting bold Dmitriev Agency is a digital product design & development studio crafting bold Dmitriev Agency is a digital product design & development'
  const word = tochangeinsentence(words)
  const divref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: divref,
    offset: ['center end', 'end center'],
  })
  const gradient1 = useTransform(scrollYProgress, [0.17, 0.29], [0, 1400], { clamp: true })
  const gradient2 = useTransform(scrollYProgress, [0.3, 0.41], [0, 1400], { clamp: true })
  const gradient3 = useTransform(scrollYProgress, [0.43, 0.53], [0, 1500], { clamp: true })

  const gradient = [gradient1, gradient2, gradient3]

  return (
    <div className="py-20 h-screen px-3 md:px-20 flex flex-col justify-center w-full">
      <div ref={divref} className="text-center w-full ">
        {word.map((chunk, i) => (
          <motion.span
            key={i}
            style={{
              backgroundPositionX: gradient[i],
              backgroundSize: '200%',
              backgroundRepeat: '',
            }}
            className="text-justify font-bold px-1 inline text-base md:text-3xl bg-gradient-to-r from-gray-800 to-white from bg-clip-text text-transparent "
          >
            {chunk.join(' ')}
          </motion.span>
        ))}
      </div>

      <div className="flex flex-row flex-wrap items-center gap-3 md:flex-nowrap mt-5 self-stretch">
        <div className="md:w-1/4 w-[47%] rounded-xl flex flex-col h-20 p-4 bg-orange-500">
          <span className="font-extrabold text-3xl">01</span>
          <span className="text-[14px]">Global Excellence Centers</span>
        </div>
        <div className="md:w-1/4 w-[47%] rounded-xl flex flex-col h-20 p-4 bg-orange-500">
          <span className="font-extrabold text-3xl">50+</span>
          <span className="text-[14px]">Projects</span>
        </div>
        <div className="md:w-1/4 w-[47%] rounded-xl flex flex-col h-20 p-4 bg-orange-500">
          <span className="font-extrabold text-3xl">90%</span>
          <span className="text-[14px]">Client Satisfaction</span>
        </div>
        <div className="md:w-1/4 w-[47%] rounded-xl flex flex-col h-20 p-4 bg-orange-500">
          <span className="font-extrabold text-3xl">95%</span>
          <span className="text-[14px]">Less Stress</span>
        </div>
      </div>
    </div>
  )
}

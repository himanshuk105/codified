'use client'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export const Achiements = () => {
  return (
    <div className="relative py-20 px-3 md:px-20 w-full ">
      {[1, 2, 3, 4].map((d) => {
        return (
          <motion.div key={d}>
            <Card />
          </motion.div>
        )
      })}
    </div>
  )
}

const Card = () => {
  const sectionref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const imagey = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div
      ref={sectionref}
      className="mt-5 grid grid-cols-5 grid-rows-7 gap-4 
                md:grid-cols-10 md:grid-rows-8 
                lg:grid-cols-10 lg:grid-rows-8 h-120"
    >
      <motion.div
        style={{
          y: y,
        }}
        className="rounded-xl md:relative
      col-span-5 row-span-3 col-start-1 row-start-5
      md:col-span-5 md:row-span-4 md:col-start-1 md:row-start-4
      lg:col-span-4 lg:row-span-4 lg:col-start-1 lg:col-end-6 lg:row-start-4 bg-red-600 z-20
    "
      >
        1
      </motion.div>

      <motion.div
        style={{
          y: imagey,
        }}
        className="rounded-xl md:relative 
      col-span-5 row-span-4 col-start-1 row-start-1
      md:col-span-10 md:row-span-4 md:col-start-1 md:row-start-1
      lg:col-span-6 lg:row-span-6 lg:col-start-5 lg:row-start-2 bg-white text-black
    "
      >
        2
      </motion.div>
    </div>
  )
}

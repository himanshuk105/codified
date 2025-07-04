'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const Achiements = () => {
  return (
    <div className="relative py-24 px-4 md:px-24 bg-neutral-950 text-white">
      {[1, 2, 3, 4].map((d) => (
        <motion.div key={d}>
          <Card />
        </motion.div>
      ))}
    </div>
  )
}

export const Card = () => {
  const sectionref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const imagey = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95])

  return (
    <div
      ref={sectionref}
      className="grid grid-cols-5 grid-rows-7 gap-4 
                md:grid-cols-10 md:grid-rows-8 
                lg:grid-cols-10 lg:grid-rows-8"
    >
      {/* Foreground Card - Dark Text Block */}
      <motion.div
        style={{ y, opacity, scale }}
        className="rounded-2xl md:relative p-8 lg:p-10 shadow-2xl backdrop-blur-xl
        col-span-5 row-span-3 col-start-1 row-start-5
        md:col-span-5 md:row-span-4 md:col-start-1 md:row-start-4
        lg:col-span-4 lg:row-span-4 lg:col-start-1 lg:col-end-6 lg:row-start-4 
        bg-neutral-900 text-white z-20"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-base md:text-lg leading-relaxed text-white/90">
          We’re a team of tech innovators crafting scalable software. Codified Solution was founded
          with a vision to empower digital transformation through clean code, thoughtful design, and
          scalable architecture.
        </p>
        <ul className="mt-1">
          <li>15+ Developers</li>
          <li>Serving 10+ Countries</li>
          <li>Domain Expertise in AI/ML</li>
        </ul>
      </motion.div>

      {/* Background Card - Full-Width Image */}
      <motion.div
        style={{ y: imagey, opacity, scale }}
        className="rounded-2xl md:relative overflow-hidden
        col-span-5 row-span-4 col-start-1 row-start-1
        md:col-span-10 md:row-span-4 md:col-start-1 md:row-start-1
        lg:col-span-6 lg:row-span-6 lg:col-start-5 lg:row-start-2"
      >
        <img
          src="https://media.istockphoto.com/id/1432012178/photo/young-ceo-giving-a-business-presentation-to-colleagues-in-creative-office.jpg?s=1024x1024&w=is&k=20&c=JnmBloqBiR5oLsYFnfhRuj7qVzIFwovpKCWLE5ftcw0=" // 🔁 Replace with your actual image path from /public folder
          alt="Team discussing"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  )
}

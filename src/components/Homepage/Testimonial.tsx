'use client'

import '../../css/hero3.css'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { CiStar } from 'react-icons/ci'

export const Testimonial = () => {
  const scrollRef = useRef(null)

  return (
    <section className="box-border text-white bg-black grid grid-cols-1 gap-5 p-5 mt-[80px] mb-[80px] md:px-20">
      <div className="grid grid-cols-1 w-full gap-3 justify-items-center">
        <div className="w-full max-w-[520px] md:max-w-full flex flex-col gap-7">
          <h1 className="text-3xl w-full font-extrabold lg:text-5xl">Testimonials</h1>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide tohide py-2">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="w-[300px] flex-shrink-0 rounded-2xl p-6 bg-[#111111] backdrop-blur-lg border border-[#222222] shadow-md flex flex-col gap-4"
              >
                <TestimonialCard />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TestimonialCard = () => {
  return (
    <>
      <div className="flex text-yellow-400 text-xl">
        {[...Array(5)].map((_, i) => (
          <CiStar key={i} />
        ))}
      </div>

      <p className="text-sm italic text-gray-300">
        This AI has boosted my productivity tenfold. The predictive features are spot-on and so
        helpful.
      </p>

      <div className="flex items-center gap-4 mt-4">
        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
          I
        </div>
        <div className="text-left">
          <p className="font-semibold">Ishaan Verma</p>
          <p className="text-xs text-gray-400">Product Manager</p>
        </div>
      </div>
    </>
  )
}

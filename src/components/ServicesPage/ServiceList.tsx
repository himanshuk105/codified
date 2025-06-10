'use client'
import { motion, useAnimate } from 'framer-motion'
import { useRef } from 'react'

export const ServiceList = () => {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [scope, animate] = useAnimate()

  const handleHoverStart = (i: number) => {
    const button = buttonRefs.current[i]
    if (!button) return

    animate(
      button,
      {
        backgroundColor: 'black',
        color: 'white',
      },
      { duration: 0.6, ease: 'easeInOut' },
    )

    const arrow = button.querySelector('.arrow')
    if (arrow) {
      animate(arrow, { x: [0, 10, 0] }, { duration: 0.8, ease: 'easeInOut', repeat: Infinity })
    }
  }

  const handleHoverEnd = (i: number) => {
    const button = buttonRefs.current[i]
    if (!button) return

    animate(button, {
      backgroundColor: 'white',
      color: 'black',
    })

    const arrow = button.querySelector('.arrow')
    if (arrow) {
      animate(arrow, { x: 0 })
    }
  }

  const developmentType = ['UI/UX', 'Consultation', 'Adobe Photoshop', 'Xpro']

  return (
    <div className=" mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-9">
        <div className="rounded-lg w-full  relative">
          <div className="relative z-10  text-white">
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-extrabold">Name of Services</h2>
            <h4 className="text-[clamp(1.2rem,3vw,2.6rem)] font-bold">
              Punch Line for the Service
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-8 h-1/2">
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit debitis laudantium
            rem explicabo alias numquam. Omnis harum ex ipsam sit, velit esse.
          </p>
          <div className="flex w-98 flex-col md:flex-row md:flex-wrap md:items-center gap-2">
            {developmentType.map((d, i) => (
              <motion.button
                key={i}
                ref={(el) => (buttonRefs.current[i] = el)}
                onMouseEnter={() => handleHoverStart(i)}
                onMouseLeave={() => handleHoverEnd(i)}
                className="border-2 border-white bg-white text-black  px-4 py-3 rounded-md text-[14px]  shadow-lg flex items-center flex-row justify-between gap-3 w-48 h-15 cursor-pointer font-bold"
              >
                <span>{d}</span> <motion.span className="arrow">&gt;</motion.span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useAnimate, motion } from 'motion/react'
import { FaChevronRight } from 'react-icons/fa'

export const Position = () => {
  return (
    <>
      <div className="pt-24 px-6 md:px-16 flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold">Open Positions</h3>
        <h2 className="text-4xl font-extrabold">Find The Career You Deserve</h2>
        <p className="text-center max-w-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe, odit veniam
          praesentium maxime, eligendi aliquam quos eius magni blanditiis atque vel et nesciunt
          inventore dolores sed ex, voluptas perspiciatis sunt quibusdam labore tenetur. Sed,
          eligendi. Molestias quod minus laborum.
        </p>
      </div>
      <div className="py-24 px-6 md:px-16 flex lg:flex-col flex-wrap lg:flex-nowrap flex-row gap-8 ">
        {[1, 2, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return <PositionCard key={item} />
        })}
      </div>
    </>
  )
}

const PositionCard = () => {
  const [scope, animate] = useAnimate()

  const handleHover = () => {
    console.log('hovered')
    animate(
      '#tohover',
      { backgroundColor: '#845ec2', x: 120 },
      {
        duration: 0.3,
        ease: 'easeInOut',
      },
    )
  }

  const handleLeaverHover = () => {
    console.log('hovered')
    animate(
      '#tohover',
      { backgroundColor: '#c197ff', x: 0 },
      {
        duration: 0.3,
        ease: 'easeInOut',
      },
    )
  }

  return (
    <div className="basis-0.5 grow-1 lg:w-full lg:grow-0 lg:basis-0 bg-white rounded-2xl shadow-2xl text-black gap-2 p-4 items-center flex flex-col lg:flex-row">
      <span className=" w-15 h-15 rounded-full flex items-center justify-center border-2">L</span>
      <h3 className="grow-1 px-10 font-extrabold">Name of Position</h3>
      <span className="text-white text-center lg:text-left w-90 py-2 px-8 border-1 bg-black rounded-3xl">
        Experience from to
      </span>
      <button
        ref={scope}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeaverHover}
        className="relative flex items-center justify-end gap-2"
      >
        <div className="relative z-20 bg-transparent flex flex-row items-center gap-4 py-2 text-[20px] px-5 ">
          <span>Apply Now</span>
          <FaChevronRight size={20} />
        </div>
        <motion.div
          id="tohover"
          className="left-1 z-2 absolute size-10 rounded-full bg-[#c197ff] "
        ></motion.div>
      </button>
    </div>
  )
}

'use client'

import { useState } from 'react'

export const Hero4 = () => {
  const data = [
    {
      l: 'Software Enginner',
      p: 'Company Name',
      t: 'Aug 2022 - Present',
    },
    {
      l: 'Software Enginner',
      p: 'Company Name',
      t: 'Aug 2022 - Present',
    },
    {
      l: 'Software Enginner',
      p: 'Company Name',
      t: 'Aug 2022 - Present',
    },
    {
      l: 'Software Enginner',
      p: 'Company Name',
      t: 'Aug 2022 - Present',
    },
    {
      l: 'Software Enginner',
      p: 'Company Name',
      t: 'Aug 2022 - Present',
    },
    {
      l: 'Software Enginner',
      p: 'Company Name',
      t: 'Aug 2022 - Present',
    },
    {
      l: 'Software Enginner',
      p: 'Company Name',
      t: 'Aug 2022 - Present',
    },
    {
      l: 'Software Enginner',
      p: 'Company Name',
      t: 'Aug 2022 - Present',
    },
  ]

  const [showMore, setShowMore] = useState(false)

  const handleShow = () => {
    setShowMore((prev) => !prev)
  }

  return (
    <section className="box-border text-white bg-black grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:px-20 mt-[50px]">
      <div className="grid grid-cols-1 gap-3 justify-items-center">
        <div className="max-w-[520px] flex flex-col gap-4 md:min-w-full">
          <h1 className="text-3xl font-extrabold lg:text-5xl">Software is Causing More</h1>
          <p className="">
            I founded Design & Code which is a global community with a mission to connect designers
            and developers to create a happy community eager to learn, innovate and grow together.
            We welcome all designers and developers: beginners, intermediates, and experts willing
            to learn together.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-2">
        <div className="max-w-[520px] flex flex-col gap-4 w-full">
          <ul
            className={`${!showMore ? 'h-42 overflow-y-clip ' : 'h-80 overflow-y-scroll'} box-border w-full  md:gap-5 tohide transition-all`}
          >
            {data.map((d, index) => {
              return <CardList key={index} />
            })}
          </ul>
        </div>
        <button
          onClick={handleShow}
          className="border-2 p-3 w-32 bg-white text-black font-bold rounded-2xl hover:bg-gray-200"
        >
          {!showMore ? 'Show More' : 'Show Less'}
        </button>
      </div>
    </section>
  )
}

const CardList = () => {
  return (
    <li className="flex items-center flex-row h-20 justify-between gap-2 border-b border-b-[#222222]">
      <div className="size-15 border-2 rounded-full flex items-center justify-center">L</div>
      <div className="w-3/6 flex flex-col gap-2">
        <span className="text-[18px] font-bold"> Software Engineer</span>
        <span>Company Name</span>
      </div>
      <div className="w-2/6 flex justify-end">Aug 2022 - Present</div>
    </li>
  )
}

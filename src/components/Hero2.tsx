'use client'

import { motion } from 'framer-motion'

export const Hero2 = () => {
  const data = [
    {
      l: 'L',
      h: 'SOFTWARE DEVELOPMENT SERVICES',
      p: 'We develop secure, cloud-ready software to streamline operations and drive growth.',
    },
    {
      l: 'L',
      h: 'MOBILE APP DEVELOPMENT SERVICES',
      p: 'We create fast, scalable mobile apps for iOS, Android, and cross-platform use.',
    },
    {
      l: 'L',
      h: 'WEB DEVELOPMENT SERVICES',
      p: 'We build high-performing websites and platforms that elevate your digital presence.',
    },
    {
      l: 'L',
      h: 'AI Development Services',
      p: 'We integrate AI to automate, analyze, and enhance user experiences.',
    },
  ]
  return (
    <section className="box-border text-white bg-black grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-2">
        {data.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="min-w-[180px] max-w-[520px] flex flex-col gap-1 p-6 rounded-lg border border-[#222222] h-50 md:h-90 lg:h-60 md:gap-3 bg-[#111111]"
              key={index}
            >
              <span className="size-10 flex-shrink-0 rounded-full flex items-center justify-center border-2">
                {item.l}
              </span>
              <h2 className="text-xl font-bold">{item.h}</h2>

              <p>{item.p}</p>
            </motion.div>
          )
        })}
      </div>
      <div className="grid grid-cols-1 gap-3 justify-items-center">
        <div className="max-w-[520px] flex flex-col gap-4 md:min-w-full">
          <h2 className="text-3xl font-extrabold lg:text-5xl">Services</h2>
          <h2 className="text-xl font-bold lg:text-3xl">
            Building Digital Solutions That Drive Growth
          </h2>

          <p className="">
            At Codified Web, we blend creativity, code, and cutting-edge technology to deliver
            digital products that are not only functional but built for impact. Our services are
            crafted for businesses ready to scale, automate, and stand out in a competitive market.
            We work as a true tech partner — understanding your goals, aligning with your vision,
            and building products that solve real problems. Whether you’re a startup building from
            scratch or an enterprise optimizing existing systems, our team is here to bring your
            ideas to life. We believe in clean design, smart development, and future-ready tech
            stacks — because your success is what we code for.
          </p>
          <div className="flex  justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="text-5xl">5k+</span>
              <span>Community Members</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl">5+</span>
              <span>Events Conducted</span>
            </div>
            <div className="flex flex-col  gap-2">
              <span className="text-5xl">4</span>
              <span>Year</span>
            </div>
          </div>
          <div className="text-black border-white ">
            <button className="bg-white font-bold w-40  h-full p-2 text-center flex items-center justify-center rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

export const Hero2 = ({ hero2 }: any) => {
  const heading = hero2?.heading
  const paragraphText = hero2.text.root.children[0].children[0].text
  const button = hero2.button[0].text
  const sidesections = hero2.sidesection
  console.log(sidesections)
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
        {sidesections.map((item: any, index: number) => {
          const para = item?.paragraph.root.children[0].children[0].text
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="min-w-[180px] max-w-[520px] flex flex-col gap-1 p-6 rounded-lg border border-[#222222] h-50 md:h-90 lg:h-60 md:gap-3 bg-[#111111]"
              key={item.id}
            >
              <span className="size-11 flex-shrink-0 rounded-full flex items-center justify-center border-2">
                <img className="size-8" src={item.logoimage.url} alt={item.logoimage.alt} />
              </span>
              <h2 className="text-xl font-bold">{item.heading}</h2>

              <p>{para}</p>
            </motion.div>
          )
        })}
      </div>
      <div className="grid grid-cols-1 gap-3 justify-items-center">
        <div className="max-w-[520px] flex flex-col gap-4 md:min-w-full">
          <h2 className="text-3xl font-extrabold lg:text-5xl">{heading}</h2>
          <h2 className="text-xl font-bold lg:text-3xl">
            Building Digital Solutions That Drive Growth
          </h2>

          <p className="">{paragraphText}</p>
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
              {button}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const Achiements = ({ about_us }: any) => {
  return (
    <div className="relative py-24 px-4 md:px-24 bg-neutral-950 text-white">
      {about_us.map((item: any) => (
        <motion.div key={item.id}>
          <Card item={item} />
        </motion.div>
      ))}
    </div>
  )
}

export const Card = ({ item }: any) => {
  const heading = item?.heading
  const words = item.description.root.children
  const sectionref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const imagey = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95])

  const renderContent = (block: any, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className="text-white/90 leading-relaxed mb-4">
            {block.children?.map((child: any, i: number) => {
              if (child.type === 'linebreak') return <br key={i} />
              return <span key={i}>{child.text}</span>
            })}
          </p>
        )

      case 'list':
        return (
          <ul key={index} className="list-disc list-inside text-white/80 mb-4 space-y-1">
            {block.children?.map((li: any, i: number) => (
              <li key={i} className="font-medium">
                {li.children?.map((child: any, j: number) => (
                  <span key={j} className={child.format === 1 ? 'font-semibold' : ''}>
                    {child.text}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        )

      default:
        return null
    }
  }

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
        bg-[#4994cc] text-white z-20"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">{heading || 'Who We Are'}</h2>

        {words?.map((block: any, index: number) => renderContent(block, index))}
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
          src="https://media.istockphoto.com/id/1432012178/photo/young-ceo-giving-a-business-presentation-to-colleagues-in-creative-office.jpg?s=1024x1024&w=is&k=20&c=JnmBloqBiR5oLsYFnfhRuj7qVzIFwovpKCWLE5ftcw0="
          alt="Team discussing"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  )
}

// 'use client'

// import '../../css/hero3.css'
// import { motion } from 'framer-motion'
// import { useRef } from 'react'
// import { CiStar } from 'react-icons/ci'

// export const Testimonial = () => {
//   const scrollRef = useRef(null)

//   return (
//     <section className="box-border text-white bg-black grid grid-cols-1 gap-5 p-5 mt-[80px] mb-[80px] md:px-20">
//       <div className="grid grid-cols-1 w-full gap-3 justify-items-center">
//         <div className="w-full max-w-[520px] md:max-w-full flex flex-col gap-7">
//           <h1 className="text-3xl w-full font-extrabold lg:text-5xl">Testimonials</h1>

//           <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide tohide py-2">
//             {[...Array(8)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
//                 className="w-[300px] flex-shrink-0 rounded-2xl p-6 bg-[#111111] backdrop-blur-lg border border-[#222222] shadow-md flex flex-col gap-4"
//               >
//                 <TestimonialCard />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const TestimonialCard = () => {
//   return (
//     <>
//       <div className="flex text-yellow-400 text-xl">
//         {[...Array(5)].map((_, i) => (
//           <CiStar key={i} />
//         ))}
//       </div>

//       <p className="text-sm italic text-gray-300">
//         This AI has boosted my productivity tenfold. The predictive features are spot-on and so
//         helpful.
//       </p>

//       <div className="flex items-center gap-4 mt-4">
//         <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
//           I
//         </div>
//         <div className="text-left">
//           <p className="font-semibold">Ishaan Verma</p>
//           <p className="text-xs text-gray-400">Product Manager</p>
//         </div>
//       </div>
//     </>
//   )
// }

// 'use client'

// import '../../css/hero3.css'
// import { motion } from 'framer-motion'
// import { useRef, useEffect } from 'react'
// import { CiStar } from 'react-icons/ci'

// export const Testimonial = ({ testimonials }: any) => {
//   const scrollRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const el = scrollRef.current
//     if (!el) return

//     let scrollAmount = 1
//     const autoScroll = () => {
//       el.scrollLeft += scrollAmount
//       if (el.scrollLeft + el.offsetWidth >= el.scrollWidth || el.scrollLeft <= 0) {
//         scrollAmount *= -1 // reverse scroll direction
//       }
//     }

//     const interval = setInterval(autoScroll, 30)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="box-border text-white bg-black grid grid-cols-1 gap-5 p-5 mt-[80px] mb-[80px] md:px-20">
//       <div className="grid grid-cols-1 w-full gap-3 justify-items-center">
//         <div className="w-full max-w-[520px] md:max-w-full flex flex-col gap-7">
//           <h1 className="text-3xl w-full font-extrabold lg:text-5xl relative inline-block">
//             Testimonials
//             <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
//           </h1>

//           <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide tohide py-2">
//             {[...Array(8)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
//                 className="w-[300px] flex-shrink-0 rounded-3xl p-6 bg-gradient-to-br from-[#111111] via-[#151515] to-[#1a1a1a] border border-[#333] shadow-[0_0_20px_rgba(72,117,255,0.1)] hover:shadow-[0_0_25px_rgba(72,117,255,0.3)] transition-shadow duration-500 ease-in-out"
//               >
//                 <TestimonialCard />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const TestimonialCard = () => {
//   return (
//     <>
//       <div className="flex text-yellow-400 text-xl">
//         {[...Array(5)].map((_, i) => (
//           <CiStar key={i} />
//         ))}
//       </div>

//       <p className="text-sm italic text-gray-300 leading-relaxed">
//         “This AI has boosted my productivity tenfold. The predictive features are spot-on and truly
//         transformative.”
//       </p>

//       <div className="flex items-center gap-4 mt-4">
//         <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
//           I
//         </div>
//         <div className="text-left">
//           <p className="font-semibold text-white">Ishaan Verma</p>
//           <p className="text-xs text-gray-400">Product Manager</p>
//         </div>
//       </div>
//     </>
//   )
// }

// 'use client'

// import '../../css/hero3.css'
// import { motion } from 'framer-motion'
// import { useRef, useEffect } from 'react'
// import { CiStar } from 'react-icons/ci'

// export const Testimonial = ({ testimonials }: any) => {
//   const scrollRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const el = scrollRef.current
//     if (!el) return

//     let scrollAmount = 1
//     const autoScroll = () => {
//       el.scrollLeft += scrollAmount
//       if (el.scrollLeft + el.offsetWidth >= el.scrollWidth || el.scrollLeft <= 0) {
//         scrollAmount *= -1
//       }
//     }

//     const interval = setInterval(autoScroll, 30)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="box-border text-white bg-black grid grid-cols-1 gap-5 p-5 mt-[80px] mb-[80px] md:px-20">
//       <div className="grid grid-cols-1 w-full gap-3 justify-items-center">
//         <div className="w-full max-w-[520px] md:max-w-full flex flex-col gap-7">
//           <h1 className="text-3xl w-full font-extrabold lg:text-5xl relative inline-block">
//             Testimonials
//             <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
//           </h1>

//           <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide tohide py-2">
//             {testimonials?.map((testimonial, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
//                 className="w-[300px] flex-shrink-0 rounded-3xl p-6 bg-gradient-to-br from-[#111111] via-[#151515] to-[#1a1a1a] border border-[#333] shadow-[0_0_20px_rgba(72,117,255,0.1)] hover:shadow-[0_0_25px_rgba(72,117,255,0.3)] transition-shadow duration-500 ease-in-out"
//               >
//                 <TestimonialCard data={testimonial} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const TestimonialCard = ({
//   data,
// }: {
//   data: { name: string; position: string; quote: string; rating?: number; initial?: string }
// }) => {
//   const { name, position, quote, rating = 5, initial = name.charAt(0) } = data

//   return (
//     <>
//       <div className="flex text-yellow-400 text-xl">
//         {[...Array(rating)].map((_, i) => (
//           <CiStar key={i} />
//         ))}
//       </div>

//       <p className="text-sm italic text-gray-300 leading-relaxed">“{quote}”</p>

//       <div className="flex items-center gap-4 mt-4">
//         <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
//           {initial}
//         </div>
//         <div className="text-left">
//           <p className="font-semibold text-white">{name}</p>
//           <p className="text-xs text-gray-400">{position}</p>
//         </div>
//       </div>
//     </>
//   )
// }

'use client'

import '../../css/hero3.css'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { CiStar } from 'react-icons/ci'

export const Testimonial = ({ testimonials }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let scrollAmount = 1
    const autoScroll = () => {
      el.scrollLeft += scrollAmount
      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth || el.scrollLeft <= 0) {
        scrollAmount *= -1
      }
    }

    const interval = setInterval(autoScroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="box-border text-white bg-black grid grid-cols-1 gap-5 p-5 mt-[80px] mb-[80px] md:px-20">
      <div className="grid grid-cols-1 w-full gap-3 justify-items-center">
        <div className="w-full max-w-[520px] md:max-w-full flex flex-col gap-7">
          <h1 className="text-3xl w-full font-extrabold lg:text-5xl relative inline-block">
            Testimonials
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          </h1>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide tohide py-2">
            {testimonials['testimonial data'].map((testimonial: any, i: number) => (
              <motion.div
                key={testimonial.id || i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="w-[300px] flex-shrink-0 rounded-3xl p-6 bg-gradient-to-br from-[#111111] via-[#151515] to-[#1a1a1a] border border-[#333] shadow-[0_0_20px_rgba(72,117,255,0.1)] hover:shadow-[0_0_25px_rgba(72,117,255,0.3)] transition-shadow duration-500 ease-in-out"
              >
                <TestimonialCard data={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TestimonialCard = ({ data }: { data: any }) => {
  const { name, testimonialposition, testimonial, Rating = 5, testimonialname } = data

  const initial = name.charAt(0)

  return (
    <>
      <div className="flex text-yellow-400 text-xl mb-2">
        {[...Array(Rating)].map((_, i) => (
          <CiStar key={i} />
        ))}
      </div>

      <p className="text-sm italic text-gray-300 leading-relaxed">“{testimonial}”</p>

      <div className="flex items-center gap-4 mt-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-md">
          {initial}
        </div>
        <div className="text-left">
          <p className="font-semibold text-white">{name}</p>
          <p className="text-xs text-gray-400">{testimonialposition}</p>
          {testimonialname && <p className="text-xs text-gray-500 italic">{testimonialname}</p>}
        </div>
      </div>
    </>
  )
}

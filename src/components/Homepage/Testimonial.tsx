'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
// import { FaPlay } from 'react-icons/fa'
import '../../css/hero3.css'

export const Testimonial = ({ testimonials }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return

    const screenWidth = window.innerWidth
    const isLargeScreen = screenWidth >= 1024 // lg breakpoint

    const scrollAmount = isLargeScreen
      ? container.scrollWidth / container.children.length
      : container.offsetWidth

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-gray-900 text-white py-20 px-5 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover how{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              we’ve transformed businesses
            </span>
          </h2>
          <p className="mt-4 text-md text-gray-300 max-w-3xl">
            with exceptional user experience design, innovative app development, cutting-edge
            product optimization, and dedicated ongoing support
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
            Exceeding Expectations, Delivering Excellence
          </p>
          <p className="flex items-center gap-1 text-white font-bold text-lg">
            Clutch <span className="text-red-500 text-xl">5.0</span>
            <span className="text-red-500">★★★★★</span>
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex flex-nowrap overflow-x-scroll gap-1 lg:gap-3 py-2 overflow-y-hidden scroll-smooth snap-mandatory custom-scrollbar"
        >
          {testimonials['testimonial data'].map((data: any, i: number) => (
            <motion.div
              key={data.id || i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex w-full lg:w-[600px] rounded-xl overflow-hidden border border-[#222] bg-gradient-to-b from-gray-800 to-gray-700 text-white snap-left flex-none"
            >
              <div className="flex flex-col justify-between p-5 w-[60%]">
                <div>
                  <p className="font-bold text-white underline underline-offset-4 mb-1">
                    {data.testimonialname}
                  </p>
                  <p className="text-sm italic text-gray-300 mb-4 leading-relaxed">
                    “{data.testimonial}”
                  </p>
                  <p className="text-sm font-semibold text-white">{data.name}</p>
                  <p className="text-xs text-gray-500">{data.testimonialposition}</p>
                </div>
              </div>
              <div className="w-[40%] bg-[#222] flex items-center justify-center">
                <div className="w-full h-full bg-[#333]"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-6">
          <button
            onClick={() => scroll('left')}
            className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Prev
          </button>
          <button
            onClick={() => scroll('right')}
            className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  )
}

// 'use client'

// import { motion } from 'framer-motion'
// import { useRef } from 'react'

// import { FaPlay } from 'react-icons/fa'
// import { useMediaQuery } from '@uidotdev/usehooks'

// export const Testimonial = ({ testimonials }: any) => {
//   const scrollRef = useRef<HTMLDivElement>(null)

//   const isLargeScreen = useMediaQuery(
//     'only screen and (min-width : 993px) and (max-width : 1200px)',
//   )

//   const scroll = (direction: 'left' | 'right') => {
//     const container = scrollRef.current
//     if (!container) return

//     const scrollAmount = isLargeScreen ? container.scrollWidth / 3 : container.offsetWidth

//     container.scrollBy({
//       left: direction === 'left' ? -scrollAmount : scrollAmount,
//       behavior: 'smooth',
//     })
//   }

//   return (
//     <section className="bg-black text-white py-20 px-5 md:px-20">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-10">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
//             Discover how{' '}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
//               we’ve transformed businesses
//             </span>
//           </h2>
//           <p className="mt-4 text-lg text-gray-300 max-w-3xl">
//             with exceptional user experience design, innovative app development, cutting-edge
//             product optimization, and dedicated ongoing support
//           </p>
//         </div>

//         <div className="flex items-center justify-between mb-4">
//           <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold">
//             Exceeding Expectations, Delivering Excellence
//           </p>
//           <p className="flex items-center gap-1 text-white font-bold text-lg">
//             Clutch <span className="text-red-500 text-xl">5.0</span>
//             <span className="text-red-500">★★★★★</span>
//           </p>
//         </div>

//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scrollbar-hide py-6 scroll-smooth "
//         >
//           {testimonials['testimonial data'].map((data: any, i: number) => (
//             <motion.div
//               key={data.id || i}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="min-w-[340px] md:min-w-[600px] flex rounded-xl overflow-hidden border border-[#222] bg-[#0e0e0e]"
//             >
//               <div className="flex flex-col justify-between p-5 w-[60%]">
//                 <div>
//                   <p className="font-bold text-white underline underline-offset-4 mb-1">
//                     {data.testimonialname}
//                   </p>
//                   <p className="text-sm italic text-gray-300 mb-4 leading-relaxed">
//                     “{data.testimonial}”
//                   </p>
//                   <p className="text-sm font-semibold text-white">{data.name}</p>
//                   <p className="text-xs text-gray-500">{data.testimonialposition}</p>
//                 </div>
//                 <button className="flex items-center gap-2 mt-4 text-purple-400 text-sm font-semibold hover:underline">
//                   <FaPlay className="text-purple-400" /> Watch
//                 </button>
//               </div>
//               <div className="w-[40%] bg-[#222] flex items-center justify-center">
//                 {/* Placeholder for image or video */}
//                 <div className="w-full h-full bg-[#333]"></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="mt-6 flex justify-center gap-6">
//           <button
//             onClick={() => scroll('left')}
//             className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
//           >
//             Prev
//           </button>
//           <button
//             onClick={() => scroll('right')}
//             className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

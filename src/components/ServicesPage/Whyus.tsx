// // 'use client'

// // import { useState } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'

// // export const WhyUs = ({ data }: any) => {
// //   const [selected, setSelected] = useState(data.Cards[0])

// //   const descriptionText = data?.description?.root?.children?.[0]?.children?.[0]?.text || ''

// //   return (
// //     <section className="w-full px-5 sm:px-8 md:px-16 py-16 bg-gradient-to-br from-[#0f0f0f] to-black text-white">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Header Section */}
// //         <div className="text-left sm:text-center mb-14">
// //           <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500">
// //             {data.heading}
// //           </h2>
// //           <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
// //             {descriptionText}
// //           </p>
// //         </div>

// //         <div className="flex flex-col md:flex-row gap-10">
// //           {/* Left List */}
// //           <ul className="space-y-4 md:w-1/2">
// //             {data.Cards.map((card: any) => (
// //               <motion.li
// //                 layout
// //                 key={card.id}
// //                 onClick={() => setSelected(card)}
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //                 className={`cursor-pointer px-5 py-4 rounded-xl transition-all duration-300 border ${
// //                   selected.id === card.id
// //                     ? 'bg-gradient-to-r from-white via-gray-200 to-white text-black font-bold shadow-xl'
// //                     : 'text-gray-400 hover:text-white hover:bg-gray-900 border-gray-700'
// //                 }`}
// //               >
// //                 {card.heading}
// //               </motion.li>
// //             ))}
// //           </ul>

// //           {/* Right Description */}
// //           <div className="md:w-1/2 text-base text-gray-300 leading-relaxed">
// //             <AnimatePresence mode="wait">
// //               <motion.div
// //                 key={selected.id}
// //                 initial={{ opacity: 0, x: 20 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 exit={{ opacity: 0, x: -20 }}
// //                 transition={{ duration: 0.4 }}
// //               >
// //                 <p className="text-lg text-gray-200 bg-[#111111] p-6 rounded-xl border border-gray-800 shadow-md">
// //                   {selected.description}
// //                 </p>
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// export const WhyUs = ({ data }: any) => {
//   const hasValidCards = data?.Cards?.length > 0
//   const [selected, setSelected] = useState(hasValidCards ? data.Cards[0] : null)

//   const descriptionText = data?.description?.root?.children?.[0]?.children?.[0]?.text || ''

//   useEffect(() => {
//     if (hasValidCards && !selected) {
//       setSelected(data.Cards[0])
//     }
//   }, [data])

//   if (!data || !hasValidCards) {
//     return (
//       <section className="w-full px-5 sm:px-8 md:px-16 py-16 bg-gradient-to-br from-[#0f0f0f] to-black text-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-100">Why Choose Us</h2>
//           <p className="mt-4 text-gray-400">
//             No data available at the moment. Please try again later.
//           </p>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="w-full px-5 sm:px-8 md:px-16 py-16 bg-gradient-to-br from-[#0f0f0f] to-black text-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-left sm:text-center mb-14">
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500">
//             {data.heading || 'Why Choose Us'}
//           </h2>
//           <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             {descriptionText || 'We bring unmatched value and excellence to your business needs.'}
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row gap-10">
//           {/* Left List */}
//           <ul className="space-y-4 md:w-1/2">
//             {data.Cards.map((card: any) => (
//               <motion.li
//                 layout
//                 key={card.id}
//                 onClick={() => setSelected(card)}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className={`cursor-pointer px-5 py-4 rounded-xl transition-all duration-300 border ${
//                   selected?.id === card.id
//                     ? 'bg-gradient-to-r from-white via-gray-200 to-white text-black font-bold shadow-xl'
//                     : 'text-gray-400 hover:text-white hover:bg-gray-900 border-gray-700'
//                 }`}
//               >
//                 {card.heading}
//               </motion.li>
//             ))}
//           </ul>

//           {/* Right Description */}
//           <div className="md:w-1/2 text-base text-gray-300 leading-relaxed">
//             <AnimatePresence mode="wait">
//               {selected && (
//                 <motion.div
//                   key={selected.id}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   <p className="text-lg text-gray-200 bg-[#111111] p-6 rounded-xl border border-gray-800 shadow-md">
//                     {selected.description}
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const WhyUs = ({ data }: any) => {
  const cards = data?.Cards || []
  const [selected, setSelected] = useState(cards[0])

  const descriptionText =
    data?.description?.root?.children?.[0]?.children?.[0]?.text ||
    'We provide unmatched quality, support, and innovation to empower your business.'

  return (
    <section className="w-full px-5 sm:px-8 md:px-16 py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-left sm:text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 p-2">
            {data?.heading || 'Why Choose Us'}
          </h2>
          <p className="mt-5 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {descriptionText}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left List */}
          <ul className="space-y-4 md:w-1/2">
            {cards.map((card: any) => (
              <motion.li
                layout
                key={card.id}
                onClick={() => setSelected(card)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`cursor-pointer px-5 py-4 rounded-xl transition-all duration-300 border ${
                  selected?.id === card.id
                    ? 'bg-gradient-to-r from-white via-gray-200 to-white text-black font-bold shadow-xl'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900 border-gray-700'
                }`}
              >
                {card.heading || 'Untitled Card'}
              </motion.li>
            ))}
          </ul>

          {/* Right Description */}
          <div className="md:w-1/2 text-base text-gray-300 leading-relaxed">
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-lg text-gray-900 bg-white p-6 rounded-xl border border-gray-800 shadow-md">
                    {selected.description ||
                      'Detailed information about this topic is coming soon.'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// 'use client'

// import { useEffect } from 'react'
// import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

// export const Advancetech = () => {
//   const data = [
//     {
//       icon: '🌐',
//       heading: 'Internet of Things',
//       p: 'We integrate IoT technologies to enhance data security, improve operational efficiency, and provide real-time insights, enabling informed decision-making for industries.',
//     },
//     {
//       icon: '🤖',
//       heading: 'Artificial Intelligence',
//       p: 'Our AI-powered systems bring automation, smart analytics, and intelligent user interactions to drive superior business outcomes.',
//     },
//     {
//       icon: '☁️',
//       heading: 'Cloud Computing',
//       p: 'We utilize cloud infrastructure to ensure scalability, security, and seamless deployment for your applications.',
//     },
//     {
//       icon: '🔐',
//       heading: 'Blockchain',
//       p: 'Empower your app with decentralized security and transparency through our blockchain integration services.',
//     },
//     {
//       icon: '📡',
//       heading: '5G Connectivity',
//       p: 'We integrate 5G technologies for ultra-fast data exchange and real-time responsiveness in mobile solutions.',
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gray-950 text-white font-sans px-4 py-20 md:px-16 lg:px-32">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
//         {/* Left Side */}
//         <div className="md:sticky top-24 h-fit space-y-6">
//           <h3 className="text-indigo-400 text-lg tracking-wide uppercase font-medium">
//             Advanced Technologies for AI Development
//           </h3>
//           <h2 className="text-3xl md:text-4xl font-bold leading-snug text-white">
//             Integrate Advanced Technologies With Our Mobile App Development Services
//           </h2>
//           <p className="text-gray-300 text-md">
//             The modern mobile app industry needs the use of advanced technologies to integrate for
//             your business growth and stand out from the competition. Our goal is to solve tough
//             challenges and deliver smooth, powerful app experiences that truly make a difference.
//           </p>
//         </div>

//         {/* Right Side */}
//         <ul className="space-y-10 md:overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-800">
//           {data.map((d, i) => (
//             <li key={i} className="p-6 rounded-2xl">
//               <motion.span
//                 whileInView={{ scale: 2 }}
//                 viewport={{ once: false, amount: 0.5 }} // Required
//                 transition={{ duration: 0.5 }}
//                 className="text-3xl"
//               >
//                 {d.icon}
//               </motion.span>
//               <h3 className="text-xl font-semibold mt-3 text-indigo-300">
//                 {i + 1}. {d.heading}
//               </h3>
//               <p className="text-gray-400 mt-2">{d.p}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export const Advancetech = () => {
  const data = [
    {
      icon: '🌐',
      heading: 'Internet of Things',
      p: 'We integrate IoT technologies to enhance data security, improve operational efficiency, and provide real-time insights, enabling informed decision-making for industries.',
    },
    {
      icon: '🤖',
      heading: 'Artificial Intelligence',
      p: 'Our AI-powered systems bring automation, smart analytics, and intelligent user interactions to drive superior business outcomes.',
    },
    {
      icon: '☁️',
      heading: 'Cloud Computing',
      p: 'We utilize cloud infrastructure to ensure scalability, security, and seamless deployment for your applications.',
    },
    {
      icon: '🔐',
      heading: 'Blockchain',
      p: 'Empower your app with decentralized security and transparency through our blockchain integration services.',
    },
    {
      icon: '📡',
      heading: '5G Connectivity',
      p: 'We integrate 5G technologies for ultra-fast data exchange and real-time responsiveness in mobile solutions.',
    },
  ]

  return (
    <div className="mt-2 min-h-screen  text-white font-sans px-4 py-20 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        {/* Left Side */}
        <div className="md:sticky top-24 h-fit space-y-6">
          <h3 className="text-indigo-400 text-lg tracking-wide uppercase font-medium">
            Advanced Technologies for AI Development
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-white">
            Integrate Advanced Technologies With Our Mobile App Development Services
          </h2>
          <p className="text-gray-300 text-md">
            The modern mobile app industry needs the use of advanced technologies to integrate for
            your business growth and stand out from the competition. Our goal is to solve tough
            challenges and deliver smooth, powerful app experiences that truly make a difference.
          </p>
        </div>

        {/* Right Side */}
        <ul className="space-y-10 pr-4 ">
          {data.map((d, i) => {
            const ref = useRef(null)
            const inView = useInView(ref, {
              amount: 0.5,
              once: false,
            })

            return (
              <li key={i} className="p-6 rounded-2xl transition-transform duration-300">
                <motion.span
                  ref={ref}
                  animate={{ scale: inView ? 1.2 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl inline-block"
                >
                  {d.icon}
                </motion.span>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mt-3 text-indigo-300">
                  {i + 1}. {d.heading}
                </h3>
                <p className="text-lg text-gray-400 mt-2">{d.p}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

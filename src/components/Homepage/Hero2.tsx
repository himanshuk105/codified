// 'use client'

// import { motion } from 'framer-motion'

// export const Hero2 = ({ hero2 }: any) => {
//   const heading = hero2?.heading
//   const paragraphText = hero2.text.root.children[0].children[0].text
//   const button = hero2.button[0].text
//   const sidesections = hero2.sidesection

//   return (
//     <section className="box-border text-white bg-black grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:px-20">
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-2">
//         {sidesections.map((item: any, index: number) => {
//           const para = item?.paragraph.root.children[0].children[0].text
//           return (
//             <motion.div
//               initial={{ opacity: 0, scale: 0 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
//               className="min-w-[180px] max-w-[520px] flex flex-col gap-1 p-6 rounded-lg border border-[#222222] h-50 md:h-90 lg:h-60 md:gap-3 bg-[#111111]"
//               key={item.id}
//             >
//               <span className="size-11 flex-shrink-0 rounded-full flex items-center justify-center border-2">
//                 <img className="size-8" src={item.logoimage.url} alt={item.logoimage.alt} />
//               </span>
//               <h2 className="text-xl font-bold">{item.heading}</h2>

//               <p>{para}</p>
//             </motion.div>
//           )
//         })}
//       </div>
//       <div className="grid grid-cols-1 gap-3 justify-items-center ms-4">
//         <div className="max-w-[520px] flex flex-col gap-4 md:min-w-full">
//           <h2 className="text-3xl font-extrabold lg:text-5xl">{heading}</h2>
//           <h2 className="text-xl font-bold lg:text-3xl">
//             Building Digital Solutions That Drive Growth
//           </h2>

//           <p className="">{paragraphText}</p>
//           <div className="flex  justify-between items-center">
//             <div className="flex flex-col gap-2">
//               <span className="text-5xl">5k+</span>
//               <span>Community Members</span>
//             </div>
//             <div className="flex flex-col gap-2">
//               <span className="text-5xl">5+</span>
//               <span>Events Conducted</span>
//             </div>
//             <div className="flex flex-col  gap-2">
//               <span className="text-5xl">4</span>
//               <span>Year</span>
//             </div>
//           </div>
//           <div className="text-black border-white ">
//             {/* <button className="bg-white font-bold w-40  h-full p-2 text-center flex items-center justify-center rounded">
//               Contact Us
//             </button> */}

//             <motion.button
//               className="relative px-6 py-2 border-2 text-white font-medium rounded-md overflow-hidden group "
//               style={{ borderColor: '#4993cd' }} // Custom border color
//             >
//               {/* Text Layer */}
//               <span className="relative z-10 group-hover:text-white transition-colors duration-500">
//                 Contact Us
//               </span>

//               {/* Animated Background Layer */}
//               <span
//                 className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0 z-0"
//                 style={{ backgroundColor: '#4993cd' }} // Custom hover background
//               ></span>
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// 'use client'

// import { motion } from 'framer-motion'
// import { Cpu, Server, Globe, Layers } from 'lucide-react'

// const icons = [Cpu, Server, Globe, Layers] // Add more icons as needed

// export const Hero2 = ({ hero2 }: any) => {
//   const heading = hero2?.heading
//   const paragraphText = hero2.text.root.children[0].children[0].text
//   const button = hero2.button[0].text
//   const sidesections = hero2.sidesection

//   return (
//     <section className="bg-black text-white px-6 py-16 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//       {/* Side Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {sidesections.map((item: any, index: number) => {
//           const para = item?.paragraph.root.children[0].children[0].text
//           const Icon = icons[index % icons.length] // Loop through predefined icons

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-[#0f0f0f] border border-[#222222] rounded-2xl p-6 flex flex-col gap-3 shadow-lg hover:shadow-[#4993cd]/30 transition-shadow duration-300"
//             >
//               <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#4993cd] bg-black/50">
//                 <Icon className="w-6 h-6 text-[#4993cd]" />
//               </div>
//               <h3 className="text-xl font-semibold text-[#e0e0e0]">{item.heading}</h3>
//               <p className="text-sm text-gray-400">{para}</p>
//             </motion.div>
//           )
//         })}
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col gap-6">
//         <motion.h2
//           className="text-4xl lg:text-5xl font-extrabold leading-tight text-white"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {heading}
//         </motion.h2>

//         <h3 className="text-2xl lg:text-3xl font-semibold text-[#4993cd]">
//           Building Digital Solutions That Drive Growth
//         </h3>

//         <p className="text-gray-400">{paragraphText}</p>

//         <div className="flex gap-8 text-center">
//           <div>
//             <p className="text-4xl font-bold text-white">5k+</p>
//             <span className="text-sm text-gray-400">Community Members</span>
//           </div>
//           <div>
//             <p className="text-4xl font-bold text-white">5+</p>
//             <span className="text-sm text-gray-400">Events Conducted</span>
//           </div>
//           <div>
//             <p className="text-4xl font-bold text-white">4</p>
//             <span className="text-sm text-gray-400">Years of Experience</span>
//           </div>
//         </div>

//         {/* Animated Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white border-2 border-[#4993cd] rounded-lg overflow-hidden group"
//         >
//           <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
//             {button || 'Contact Us'}
//           </span>
//           <span className="absolute inset-0 w-full h-full bg-[#4993cd] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
//         </motion.button>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { Cpu, Server, Globe, Layers } from 'lucide-react'

const icons = [Cpu, Server, Globe, Layers]

export const Hero2 = ({ hero2 }: any) => {
  if (!hero2) return null

  const headingLeft = hero2?.['Side-1']?.['Left Heading']
  const descriptionLeft =
    hero2?.['Side-1']?.Description?.root?.children?.[0]?.children?.[0]?.text || ''
  const buttonText = hero2?.['Side-1']?.Button?.[0]?.['Button Text'] || 'Explore Services'

  const headingRight = hero2?.['Side-2']?.['Right Heading']
  const descriptionRight =
    hero2?.['Side-2']?.Description?.root?.children?.[0]?.children?.[0]?.text || ''
  const cards = hero2?.['Side-2']?.Cards || []

  return (
    <section className="bg-black text-white px-6 py-16 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div className="flex flex-col gap-6">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold leading-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {headingLeft}
        </motion.h2>

        <h3 className="text-2xl lg:text-3xl font-semibold text-[#4993cd]">{headingRight}</h3>

        <p className="text-gray-400">{descriptionLeft}</p>

        <div className="flex gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-white">5k+</p>
            <span className="text-sm text-gray-400">Community Members</span>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">5+</p>
            <span className="text-sm text-gray-400">Events Conducted</span>
          </div>
          <div>
            <p className="text-4xl font-bold text-white">4</p>
            <span className="text-sm text-gray-400">Years of Experience</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white border-2 border-[#4993cd] rounded-lg overflow-hidden group"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            {buttonText}
          </span>
          <span className="absolute inset-0 w-full h-full bg-[#4993cd] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
        </motion.button>
      </div>

      {/* Right Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((card: any, index: number) => {
          const Icon = icons[index % icons.length]
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0f0f0f] border border-[#222222] rounded-2xl p-6 flex flex-col gap-3 shadow-lg hover:shadow-[#4993cd]/30 transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#4993cd] bg-black/50">
                <Icon className="w-6 h-6 text-[#4993cd]" />
              </div>
              <h3 className="text-xl font-semibold text-[#e0e0e0]">{card.heading}</h3>
              <p className="text-sm text-gray-400">{card.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

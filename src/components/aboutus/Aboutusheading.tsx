// 'use client'

// import { motion, useAnimate } from 'motion/react'
// import Squares from './Squares'

// export const Aboutusheading = ({ hero }: any) => {
//   const [scope, animate] = useAnimate()
//   console.log(hero)
//   const handleHoverStart = () => {
//     animate(scope.current, {
//       backgroundColor: 'black',
//       color: 'white',
//     })

//     animate('#tt', { x: [0, 20, 0] }, { duration: 0.8, ease: 'easeInOut', repeat: Infinity })
//   }

//   const handleHoverEnd = () => {
//     animate(scope.current, {
//       backgroundColor: 'white',
//       color: 'black',
//     })

//     animate('#tt', { x: 0 })
//   }

//   return (
//     <div className="relative h-screen">
//       <div className="relative h-full w-full">
//         <Squares />
//       </div>
//       <div className="z-20 h-full w-full absolute bg-transparent flex flex-col items-center justify-center top-0 text-5xl font-bold py-24 px-3 md:px-20 pointer-events-auto text-center">
//         <h2 className="">{hero?.heading}</h2>
//         <motion.button
//           ref={scope}
//           onMouseEnter={handleHoverStart}
//           onMouseLeave={handleHoverEnd}
//           className="border-2 border-white bg-black text-white px-4 py-2 rounded-md text-sm sm:text-base shadow-lg mt-6 flex items-center flex-row justify-center gap-3 w-50 self-center cursor-pointer  pointer-events-auto transition-colors duration-300"
//         >
//           <span>Connect with Us</span> <span id="tt">&gt;</span>
//         </motion.button>
//       </div>
//     </div>
//   )
// }

'use client'

import { motion, useAnimate } from 'motion/react'
import Squares from './Squares'
import { useRef } from 'react'

// Utility to extract plain text from the Lexical content (basic for now)
export const getPlainText = (textObject: any) => {
  const paragraph = textObject?.root?.children?.[0]?.children || []
  return paragraph.map((child: any) => child.text).join(' ')
}

export const Aboutusheading = ({ hero }: any) => {
  const [scope, animate] = useAnimate()
  const textRef = useRef(null)

  const handleHoverStart = () => {
    animate(scope.current, {
      backgroundColor: '#000',
      color: '#fff',
    })

    animate('#tt', { x: [0, 8, 0] }, { duration: 0.8, ease: 'easeInOut', repeat: Infinity })
  }

  const handleHoverEnd = () => {
    animate(scope.current, {
      backgroundColor: '#fff',
      color: '#000',
    })

    animate('#tt', { x: 0 })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <Squares />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6 md:px-20 py-24">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-5xl">
          {hero?.heading}
        </h1>
        <h3 className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
          {hero?.subheading}
        </h3>

        {hero?.text && (
          <p
            ref={textRef}
            className="mt-6 text-base md:text-lg max-w-2xl text-gray-400 leading-relaxed"
          >
            {getPlainText(hero.text)}
          </p>
        )}

        {hero?.button?.[0]?.text && (
          <motion.button
            ref={scope}
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-semibold rounded-full border-2 border-white hover:bg-transparent hover:text-white transition duration-300 ease-in-out shadow-lg"
          >
            <span>{hero.button[0].text}</span>
            <motion.span id="tt">&gt;</motion.span>
          </motion.button>
        )}
      </div>
    </section>
  )
}

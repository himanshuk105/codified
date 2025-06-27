// 'use client'

// import Link from 'next/link'
// import { useEffect, useState } from 'react'
// import { GiHamburgerMenu } from 'react-icons/gi'
// import { IoMdClose } from 'react-icons/io'
// import { motion, AnimatePresence, useAnimation, useAnimate } from 'framer-motion'
// import { FaChevronDown } from 'react-icons/fa'
// import { usePathname } from 'next/navigation'
// import { useScrollDirection } from '@/hooks/useScrollDirection'
// import { useWindowSize } from '@uidotdev/usehooks'

// export const Header = () => {
//   const [data, setData] = useState<string[] | null>(null)

//   const [activeCategory, setActiveCategory] = useState<any>(null)

//   useEffect(() => {
//     const an = async () => {
//       const codifiedWeb = process.env.NEXT_PUBLIC_WEB_URI
//       const req = await fetch(`${codifiedWeb}/api/Menu?where[title][equals]=Navigation`)
//       const res = await req.json()
//       const items = res.docs[0].Items
//       setData(items)
//     }
//     an()
//   }, [])

//   const controls = useAnimation()
//   const { direction, scrollY } = useScrollDirection()
//   const size = useWindowSize()
//   const pathname = usePathname()
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null)
//   const handleMobileChange = () => {
//     setMobileOpen(!mobileOpen)
//     setOpenDropdown(null)
//   }

//   const handleDefaultCategory = (d: any) => {
//     const defaultCategory = d.dropdownItems[0]
//     setActiveCategory(defaultCategory)
//   }

//   useEffect(() => {
//     if (pathname === '/services' && size?.width && size.width >= 1024) {
//       if (direction === 'down' && scrollY > 200) {
//         controls.start({ y: '-100%' })
//       } else if (direction === 'up') {
//         controls.start({ y: '0%' })
//       }
//     }
//   }, [direction, scrollY, pathname, size])

//   const toggleDropdown = (key: string) => {
//     setOpenDropdown((prev) => (prev === key ? null : key))
//   }

//   const u = /^\/insights\/blog\/[^\/]+$/.test(pathname)

//   return (
//     <motion.header
//       animate={controls}
//       initial={{ y: 0 }}
//       transition={{ duration: 0.3 }}
//       className={`${u ? 'bg-black' : 'bg-transparent'} text-white fixed w-screen top-0 z-52 backdrop-blur-md`}
//     >
//       <nav className="relative flex justify-between items-center h-[80px] px-5 md:px-20">
//         <Link href="/">
//           <img
//             src="https://codifiedweb.com/wp-content/uploads/2025/06/codified-white-logo.png"
//             alt="logo"
//             className="h-15"
//           />
//         </Link>

//         <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
//           {data &&
//             data?.map((d: any) => (
//               <li key={d.id} onMouseEnter={() => handleDefaultCategory(d)} className="group">
//                 <Link
//                   href={d.href}
//                   className={`hover:text-blue-400 flex items-center gap-1 transition-all ${
//                     pathname !== d.href ? 'text-white' : 'text-white/50 hover:text-white border-b'
//                   }`}
//                 >
//                   {d.label}
//                   {d.hasDropdown && <FaChevronDown className="text-xs" />}
//                 </Link>

//                 {d.hasDropdown && (
//                   <div
//                     className="absolute left-0 mt-3 bg-white text-black p-4 shadow-lg flex flex-row gap-2 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 w-screen h-[200px]"
//                     onMouseLeave={() => setActiveCategory(null)}
//                   >
//                     <ul className="flex flex-col gap-2  w-4/12">
//                       {d.dropdownItems?.map((d: any) => {
//                         return (
//                           <li
//                             key={d.id}
//                             className={` ${activeCategory && activeCategory?.categoryTitle == d.categoryTitle ? 'bg-gray-100' : ''}   rounded-xl transition-colors duration-300 cursor-pointer`}
//                             onMouseEnter={() => setActiveCategory(d)}
//                           >
//                             {d.link ? (
//                               <Link className="block p-4 border-black h-full w-full" href={d.link}>
//                                 {d.categoryTitle}
//                               </Link>
//                             ) : (
//                               <span>{d.categoryTitle}</span>
//                             )}
//                           </li>
//                         )
//                       })}
//                     </ul>
//                     <div className="border-2"></div>
//                     <ul
//                       className={`box-border flex w-8/12 flex-row flex-shrink-0 gap-5 flex-wrap h-full ${activeCategory && activeCategory.subServices.length ? 'overflow-y-scroll' : ''}`}
//                     >
//                       {activeCategory && activeCategory.subServices.length == 0 ? (
//                         <li className="flex items-center justify-start gap-2 hover:bg-gray-100 h-30 rounded-xl p-3 border-2 w-6/12 ">
//                           <div className="size-6 border-2 rounded-full">M</div>
//                           <div className="flex flex-col">
//                             <span>{activeCategory.categoryTitle}</span>
//                             <span>{activeCategory.description}</span>
//                           </div>
//                           <div className="w-[400px] h-[400px] flex items-center justify-center">
//                             <div className="w-[180px] h-[60px] relative">
//                               <button className="w-[180px] h-[60px] border border-blue-300 bg-[white] transition-colors duration-1000 ease-in-out relative overflow-hidden">
//                                 <motion.svg
//                                   width="180"
//                                   height="60"
//                                   viewBox="0 0 180 60"
//                                   className="absolute left-0 top-0 pointer-events-none"
//                                   fill="none"
//                                   stroke="black"
//                                   strokeWidth="6"
//                                   initial={{ strokeDasharray: '150 480', strokeDashoffset: 150 }}
//                                   animate={{ strokeDashoffset: [-480, 100] }}
//                                   transition={{
//                                     duration: 2,
//                                     ease: 'easeInOut',
//                                     repeat: Infinity,
//                                     repeatType: 'loop',
//                                   }}
//                                 >
//                                   <polyline points="179,1 179,59 1,59 1,1 179,1" />
//                                 </motion.svg>
//                                 <span className="text-black text-lg font-light relative z-10">
//                                   Explore
//                                 </span>
//                               </button>
//                             </div>
//                           </div>
//                         </li>
//                       ) : (
//                         activeCategory &&
//                         activeCategory.subServices.map((d: any) => {
//                           return (
//                             <li
//                               className="flex items-center justify-start hover:bg-gray-100 transition-all duration-500 rounded-xl grow-1 basis-1/4 p-4 h-20 lg:w-80 xl:w-65 cursor-pointer"
//                               key={d.id}
//                             >
//                               <Link className="w-full p-4 block" href={d.link}>
//                                 {d?.label}
//                               </Link>
//                             </li>
//                           )
//                         })
//                       )}
//                     </ul>
//                   </div>
//                 )}
//               </li>
//             ))}
//           <li>
//             <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
//               Free Consultation
//             </button>
//           </li>
//         </ul>

//         <div className="block lg:hidden">
//           <button onClick={handleMobileChange}>
//             {mobileOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={26} />}
//           </button>
//         </div>
//       </nav>
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//             className="lg:hidden fixed top-14 right-0 h-120 w-3/4 text-black p-6 z-50 bg-transparent"
//           >
//             <ul className="p-5 bg-white space-y-4 text-lg overflow-y-auto h-full">
//               {data?.map((d: any) => (
//                 <li key={d.id}>
//                   <div className="flex justify-between items-center">
//                     <Link href={d.href} onClick={() => setMobileOpen(false)}>
//                       {d.label}
//                     </Link>
//                     {d.hasDropdown && (
//                       <FaChevronDown
//                         size={12}
//                         onClick={() => toggleDropdown(d.label.toLowerCase())}
//                         className={`cursor-pointer ml-2 transition-transform ${
//                           openDropdown === d.label.toLowerCase() ? 'rotate-180' : ''
//                         }`}
//                       />
//                     )}
//                   </div>

//                   {d.hasDropdown && openDropdown === d.label.toLowerCase() && (
//                     <ul className="ml-4 mt-2 space-y-2 text-sm">
//                       {d &&
//                         d.dropdownItems.map((d: any) => (
//                           <li key={d.id}>
//                             <p className="font-semibold mt-2">{d.categoryTitle}</p>
//                             <ul className="ml-2">
//                               {d && d.subServices.length == 0}
//                               {d &&
//                                 d?.subServices.map((item: any) => (
//                                   <li key={item.id}>
//                                     <Link href={item.link} onClick={() => setMobileOpen(false)}>
//                                       {item.label}
//                                     </Link>
//                                   </li>
//                                 ))}
//                             </ul>
//                           </li>
//                         ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//               <li>
//                 <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-500 hover:text-white w-full transition">
//                   Free Consultation
//                 </button>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   )
// }

'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence, useAnimation, useAnimate } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useWindowSize } from '@uidotdev/usehooks'

export const Header = () => {
  const [data, setData] = useState<string[] | null>(null)

  const [activeCategory, setActiveCategory] = useState<any>(null)

  useEffect(() => {
    const an = async () => {
      const codifiedWeb = process.env.NEXT_PUBLIC_WEB_URI
      const req = await fetch(`${codifiedWeb}/api/Menu?where[title][equals]=Navigation`)
      const res = await req.json()
      const items = res.docs[0].Items
      setData(items)
    }
    an()
  }, [])

  const controls = useAnimation()
  const { direction, scrollY } = useScrollDirection()
  const size = useWindowSize()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const handleMobileChange = () => {
    setMobileOpen(!mobileOpen)
    setOpenDropdown(null)
  }

  const handleDefaultCategory = (d: any) => {
    const defaultCategory = d.dropdownItems[0]
    setActiveCategory(defaultCategory)
  }

  useEffect(() => {
    if (pathname === '/services' && size?.width && size.width >= 1024) {
      if (direction === 'down' && scrollY > 200) {
        controls.start({ y: '-100%' })
      } else if (direction === 'up') {
        controls.start({ y: '0%' })
      }
    }
  }, [direction, scrollY, pathname, size])

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }

  const u = /^\/insights\/blog\/[^\/]+$/.test(pathname)

  return (
    <motion.header
      animate={controls}
      initial={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${u ? 'bg-black' : 'bg-transparent'} text-white fixed w-screen top-0 z-52 backdrop-blur-md`}
    >
      <nav className="relative flex justify-between items-center h-[80px] px-5 md:px-20">
        <Link href="/">
          <img
            src="https://codifiedweb.com/wp-content/uploads/2025/06/codified-white-logo.png"
            alt="logo"
            className="h-15"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {data &&
            data?.map((d: any) => (
              <li key={d.id} onMouseEnter={() => handleDefaultCategory(d)} className="group">
                <Link
                  href={d.href}
                  className={`hover:text-blue-400 flex items-center gap-1 transition-all ${
                    pathname !== d.href ? 'text-white' : 'text-white/50 hover:text-white border-b'
                  }`}
                >
                  {d.label}
                  {d.hasDropdown && <FaChevronDown className="text-xs" />}
                </Link>

                {d.hasDropdown && (
                  <div
                    className="absolute left-0 mt-3 bg-white text-black p-4 shadow-lg flex flex-row gap-2 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 w-screen"
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <ul className="flex flex-col gap-2 w-4/12">
                      {d.dropdownItems?.map((d: any) => {
                        return (
                          <li
                            key={d.id}
                            className={` ${activeCategory && activeCategory?.categoryTitle == d.categoryTitle ? 'bg-gray-100' : ''}   rounded-xl transition-colors duration-300 cursor-pointer`}
                            onMouseEnter={() => setActiveCategory(d)}
                          >
                            {d.link ? (
                              <Link className="block p-4 border-black h-full w-full" href={d.link}>
                                {d.categoryTitle}
                              </Link>
                            ) : (
                              <span className="block p-4 border-black h-full w-full">
                                {d.categoryTitle}
                              </span>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                    <div className="border-2"></div>
                    <ul
                      className={`box-border flex w-8/12 flex-row flex-shrink-0 gap-5 flex-wrap h-[200px] ${activeCategory && activeCategory.subServices.length ? 'overflow-y-scroll' : ''}`}
                    >
                      {activeCategory && activeCategory.subServices.length == 0 ? (
                        <li className="flex items-center justify-start gap-2 hover:bg-gray-100 h-30 rounded-xl p-3 border-2 w-6/12 ">
                          <div className="size-6 border-2 rounded-full">M</div>
                          <div className="flex flex-col">
                            <span>{activeCategory.categoryTitle}</span>
                            <span>{activeCategory.description}</span>
                          </div>
                          <div className="w-[400px] h-[400px] flex items-center justify-center">
                            <div className="w-[180px] h-[60px] relative">
                              <button className="w-[180px] h-[60px] border border-blue-300 bg-[white] transition-colors duration-1000 ease-in-out relative overflow-hidden">
                                <motion.svg
                                  width="180"
                                  height="60"
                                  viewBox="0 0 180 60"
                                  className="absolute left-0 top-0 pointer-events-none"
                                  fill="none"
                                  stroke="black"
                                  strokeWidth="6"
                                  initial={{ strokeDasharray: '150 480', strokeDashoffset: 150 }}
                                  animate={{ strokeDashoffset: [-480, 100] }}
                                  transition={{
                                    duration: 2,
                                    ease: 'easeInOut',
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                  }}
                                >
                                  <polyline points="179,1 179,59 1,59 1,1 179,1" />
                                </motion.svg>
                                <span className="text-black text-lg font-light relative z-10">
                                  Explore
                                </span>
                              </button>
                            </div>
                          </div>
                        </li>
                      ) : (
                        activeCategory &&
                        activeCategory.subServices.map((d: any) => {
                          return (
                            <li
                              className="flex items-center justify-start hover:bg-gray-100 transition-all duration-500 rounded-xl grow-1 basis-1/4 p-4 h-20 lg:w-80 xl:w-65 cursor-pointer"
                              key={d.id}
                            >
                              <Link className="w-full p-4 block" href={d.link}>
                                {d?.label}
                              </Link>
                            </li>
                          )
                        })
                      )}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          <li>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
              Free Consultation
            </button>
          </li>
        </ul>

        <div className="block lg:hidden">
          <button onClick={handleMobileChange}>
            {mobileOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={26} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="lg:hidden fixed top-14 right-0 h-120 w-3/4 text-black p-6 z-50 bg-transparent"
          >
            <ul className="p-5 bg-white space-y-4 text-lg overflow-y-auto h-full">
              {data?.map((d: any) => (
                <li key={d.id}>
                  <div className="flex justify-between items-center">
                    <Link href={d.href} onClick={() => setMobileOpen(false)}>
                      {d.label}
                    </Link>
                    {d.hasDropdown && (
                      <FaChevronDown
                        size={12}
                        onClick={() => toggleDropdown(d.label.toLowerCase())}
                        className={`cursor-pointer ml-2 transition-transform ${
                          openDropdown === d.label.toLowerCase() ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>

                  {d.hasDropdown && openDropdown === d.label.toLowerCase() && (
                    <ul className="ml-4 mt-2 space-y-2 text-sm">
                      {d &&
                        d.dropdownItems.map((d: any) => (
                          <li key={d.id}>
                            <p className="font-semibold mt-2">{d.categoryTitle}</p>
                            <ul className="ml-2">
                              {d && d.subServices.length == 0}
                              {d &&
                                d?.subServices.map((item: any) => (
                                  <li key={item.id}>
                                    <Link href={item.link} onClick={() => setMobileOpen(false)}>
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-500 hover:text-white w-full transition">
                  Free Consultation
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

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
import { useModal } from '@/context/ModalContext'

export const Header = ({ data }: any) => {
  const [activeCategory, setActiveCategory] = useState<any>(null)
  const { openModal } = useModal()
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
            className="h-20"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {data &&
            data?.map((d: any) => (
              <li key={d.id} onMouseEnter={() => handleDefaultCategory(d)} className="group">
                <Link
                  href={d.href}
                  className={`text-lg flex items-center gap-1 h-[80px] overflow-hidden`}
                >
                  <motion.span className="hover:bg-black/40 hover:border-b-2 hover:border-b-white flex items-center p-2 h-[80px] ">
                    {d.label}
                  </motion.span>
                </Link>

                {d.hasDropdown && (
                  <div
                    className="absolute left-0 top-21 px-20 bg-white text-black py-4 shadow-lg flex flex-col gap-2 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 w-screen font-normal h-100 overflow-hidden"
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div className="h-20 flex flex-col justify-between">
                      <h2 className="text-2xl font-extrabold">Name of Menu</h2>
                      <p className="text-lg font-bold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, fugit.
                      </p>
                    </div>
                    <div className="flex flex-row border-t-2 border-t-black/50 h-full gap-5">
                      {activeCategory && activeCategory.categoryTitle !== 'Industries' && (
                        <ul
                          className={`relative z-30 flex flex-col gap-2 w-3/12 border-r border-gray-200 overflow--hidden`}
                        >
                          {d.dropdownItems?.map((d: any) => {
                            return (
                              <li
                                key={d.id}
                                className={`relative ${activeCategory && activeCategory?.categoryTitle == d.categoryTitle ? 'font-extrabold' : ''}  transition-colors duration-300 cursor-pointer flex items-center`}
                                onClick={() => setActiveCategory(d)}
                              >
                                {d.link ? (
                                  <Link
                                    className="block p-4 border-black h-full w-full text-[18px]"
                                    href={d.link}
                                  >
                                    {d.categoryTitle}
                                  </Link>
                                ) : (
                                  <span className="block p-4 border-black h-full w-full text-[18px]">
                                    {d.categoryTitle}
                                  </span>
                                )}

                                {activeCategory &&
                                  activeCategory?.categoryTitle == d.categoryTitle && (
                                    <div className="absolute right-[-17px] z-50">
                                      <svg
                                        className="rotate-90"
                                        width="20"
                                        height="24"
                                        viewBox="0 0 450 400"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          id="lineAB"
                                          d="M 100 350 l 150 -300"
                                          stroke="gray"
                                          strokeWidth="4"
                                        />
                                        <path
                                          id="lineBC"
                                          d="M 250 50 l 150 300"
                                          stroke="gray"
                                          strokeWidth="4"
                                        />
                                        <path
                                          id="lineMID"
                                          d="M 100 350 l 300 0"
                                          stroke="white"
                                          strokeWidth="40"
                                        />
                                      </svg>
                                    </div>
                                  )}
                              </li>
                            )
                          })}
                        </ul>
                      )}

                      <ul
                        className={`box-border ${activeCategory && activeCategory.categoryTitle === 'Industries' ? 'w-9/12' : 'w-7/12'} ${activeCategory && activeCategory.subServices.length ? 'overflow-y-scroll' : ''} overflow-x-hidden grid grid-cols-3 md:grid-cols-2 h-[99%]`}
                      >
                        {activeCategory && activeCategory.subServices.length == 0 ? (
                          <li className="mt-2 col-span-3 border-2 flex items-center justify-start gap-2 hover:bg-gray-100 h-30 rounded-xl p-3 w-full ">
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
                                    initial={{
                                      strokeDasharray: '150 480',
                                      strokeDashoffset: 150,
                                    }}
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
                              <li className=" hover:bg-gray-300 h-20 hover:border-b-2 " key={d.id}>
                                <Link className="w-full flex items-center p-4 h-full" href={d.link}>
                                  {d?.label}
                                </Link>
                              </li>
                            )
                          })
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          <li>
            <button
              className="bg-white text-black px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
              onClick={openModal}
            >
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
                <button
                  onClick={openModal}
                  className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-500 hover:text-white w-full transition"
                >
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

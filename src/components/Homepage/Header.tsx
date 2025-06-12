'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { useWindowSize } from '@uidotdev/usehooks'

export const Header = () => {
  const controls = useAnimation()
  const { direction, scrollY } = useScrollDirection()
  const size = useWindowSize()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  useEffect(() => {
    if (pathname === '/services' && size?.width !== null && size.width >= 1024) {
      if (direction === 'down' && scrollY > 200) {
        controls.start({ y: '-100%' }) // Hide header
      } else if (direction === 'up') {
        controls.start({ y: '0%' }) // Show header
      }
    }
  }, [direction, scrollY, pathname, size])

  const nav = [
    { href: '/', text: 'Home' },
    { href: '/services', text: 'Services', hasDropdown: true },
    { href: '/industries', text: 'Industries', hasDropdown: true },
    { href: '/insights', text: 'Insights', hasDropdown: true },
    { href: '/about-us', text: 'About' },
    { href: '/contact', text: 'Contact' },
  ]

  const dropdownItems = {
    services: [
      'Web Development',
      'App Development',
      'Software Development',
      'AI Development Services',
    ],
    industries: ['Health & Fitness', 'E-commerce', 'Finance', 'Tour & Travel'],
    insights: ['Blog', 'Newsletter', 'Whitepapers'],
  }

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }

  const u = /^\/insights\/blog\/[^\/]+$/.test(pathname) ? true : false

  return (
    <motion.header
      animate={controls}
      initial={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${u ? 'bg-black' : 'bg-transparent'} text-white fixed w-screen top-0 z-52 backdrop-blur-md`}
    >
      <nav className="flex justify-between items-center h-[80px] px-5 md:px-20">
        <Link href="/">
          <img
            src="https://codifiedweb.com/wp-content/uploads/2023/10/cropped-Logo1-3-1.webp"
            alt="logo"
            className="h-20"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {nav.map(({ href, text, hasDropdown }) => (
            <li key={href} className="relative group">
              <Link
                href={href}
                className={`hover:text-blue-400 flex items-center gap-1 transition-all ${
                  pathname !== href
                    ? 'text-white blur-0'
                    : 'text-white/50 hover:text-white border-b'
                }`}
              >
                {text}
                {hasDropdown && <FaChevronDown className="text-xs" />}
              </Link>

              {/* Dropdown */}
              {hasDropdown && (
                <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 invisible group-hover:visible z-10">
                  {(dropdownItems[text.toLowerCase() as keyof typeof dropdownItems] || []).map(
                    (item, i) => (
                      <li key={i} className="hover:bg-gray-100 px-4 py-2 cursor-pointer text-sm">
                        <Link
                          href={`/${text.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </li>
          ))}

          <li>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
              Free Consultation
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="block md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-14 right-0 h-full w-3/4 text-black p-6 z-50 bg-transparent"
          >
            <ul className="p-5 bg-white space-y-4 text-lg">
              {nav.map(({ href, text, hasDropdown }) => (
                <li key={href}>
                  <div className="flex justify-between items-center">
                    <Link href={href} onClick={() => setMobileOpen(false)}>
                      {text}
                    </Link>
                    {hasDropdown && (
                      <FaChevronDown
                        size={12}
                        onClick={() => toggleDropdown(text.toLowerCase())}
                        className={`cursor-pointer ml-2 transition-transform ${
                          openDropdown === text.toLowerCase() ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {hasDropdown && openDropdown === text.toLowerCase() && (
                    <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-300">
                      {(dropdownItems[text.toLowerCase() as keyof typeof dropdownItems] || []).map(
                        (item, i) => (
                          <li key={i}>
                            <Link
                              href={`/${text.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {item}
                            </Link>
                          </li>
                        ),
                      )}
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

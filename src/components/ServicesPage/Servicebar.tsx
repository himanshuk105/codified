'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Servicebar = ({ sections }: any) => {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.5, 0.6, 0.7], // multiple thresholds for better detection
    }

    const sectionVisibility: Record<string, number> = {}

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.id
        sectionVisibility[id] = entry.intersectionRatio
      })

      const visibleSections = Object.entries(sectionVisibility)
        .filter(([_, ratio]) => ratio > 0.5) // consider only sections visible more than 50%
        .sort((a, b) => b[1] - a[1]) // sort by most visible

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0][0]) // most visible section
      } else {
        setActiveSection(null) // none are sufficiently visible
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((id: string) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sections.forEach((id: string) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  return (
    <ul className="hidden lg:flex flex-row gap-4 border border-[#222222] items-center justify-between bg-black px-7 py-3 z-50 rounded-2xl lg:sticky top-0">
      {sections.map((id: any, i: number) => {
        const label = id.replace(/-/g, ' ')

        const isActive = activeSection === id

        return (
          <Link scroll={true} href={`#${id}`} key={i}>
            <li
              className={`cursor-pointer text-sm capitalize px-4 py-2 rounded-lg transition-colors duration-300 ${
                isActive
                  ? 'bg-yellow-400 text-black font-semibold'
                  : 'text-white hover:text-yellow-400'
              }`}
            >
              {label}
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

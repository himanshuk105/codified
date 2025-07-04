'use client'

export const Trustedby = () => {
  return (
    <section className="mt-2 bg-white/5 text-white font-sans px-4 py-20 md:px-16 lg:px-32">
      <div className="flex items-center flex-col gap-3">
        <h2 className="text-2xl font-extrabold md:text-4xl">Trusted By</h2>
        <p className=" md:w-3/4 sm:text-sm md:text-lg text-center">
          Empowering Global Brands and Startups to Drive Innovation and Success with our unparalled
          expertise and commitment to excellence
        </p>
        <InfiniteTechScroll />
      </div>
      <ul className="flex flex-col gap-3 md:flex-row items-center justify-center">
        <li className="flex flex-col p-2 gap-1">
          <span className="text-3xl md:text-4xl font-bold pl-2 py-2 border-l-2">2550 Years</span>
          <span className="pl-2 text-sm md:text-lg">Apps & Digital Product Delivered</span>
        </li>
        <li className="flex flex-col p-2 gap-1">
          <span className="text-3xl md:text-4xl font-bold pl-2 py-2 border-l-2">2550 Years</span>
          <span className="pl-2 text-sm md:text-lg">Apps & Digital Product Delivered</span>
        </li>
        <li className="flex flex-col p-2 gap-1">
          <span className="text-3xl md:text-4xl font-bold pl-2 py-2 border-l-2">2550 Years</span>
          <span className="pl-2 text-sm md:text-lg">Apps & Digital Product Delivered</span>
        </li>
        <li className="flex flex-col p-2 gap-1">
          <span className="text-3xl md:text-4xl font-bold pl-2 py-2 border-l-2">2550 Years</span>
          <span className="pl-2 text-sm md:text-lg">Apps & Digital Product Delivered</span>
        </li>
      </ul>
    </section>
  )
}

import { useEffect, useRef } from 'react'

interface Tech {
  name: string
  logo: string
}

const technologies: Tech[] = [
  {
    name: 'JavaScript',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Python',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  },
  {
    name: 'HTML',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg',
  },
  {
    name: 'Bootstrap',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    name: 'Material UI',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg',
  },
  {
    name: 'Java',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'MySQL',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
  },
  {
    name: 'Express.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'React',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
  },
  { name: 'Payload CMS', logo: 'https://payloadcms.com/apple-icon.png?ecf0fe126546bd55' }, // fallback logo
]

const InfiniteTechScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const x = useRef<number>(0)
  const requestRef = useRef<number>(null)

  const animate = () => {
    if (!scrollRef.current || !containerRef.current) return

    x.current -= 1 // Scroll speed
    const scrollWidth = scrollRef.current.scrollWidth / 2

    if (Math.abs(x.current) >= scrollWidth) {
      x.current = 0
    }

    scrollRef.current.style.transform = `translateX(${x.current}px)`
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [])

  return (
    <div
      onMouseEnter={() => cancelAnimationFrame(requestRef.current!)}
      onMouseLeave={() => (requestRef.current = requestAnimationFrame(animate))}
      ref={containerRef}
      className="overflow-hidden w-[calc(100vw-120px)] whitespace-nowrap bg-transparent mb-[50px]"
    >
      <div
        ref={scrollRef}
        className="flex gap-6 will-change-transform p-4"
        style={{ transform: 'translateX(0)', whiteSpace: 'nowrap' }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="min-w-[120px] flex flex-col items-center justify-center p-4 rounded-xl bg-transparent backdrop-blur-sm shadow-md"
          >
            <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain mb-2" />
          </div>
        ))}
      </div>
    </div>
  )
}

'use client'

const fallbackData = {
  heading: 'Trusted by Top Technologies',
  description: {
    root: {
      children: [
        {
          type: 'paragraph',
          children: [
            { text: 'We are trusted by leading technologies and enterprises across the globe.' },
          ],
        },
      ],
    },
  },
  blobcard: [
    { id: '1', label: '500+', value: 'Happy Clients' },
    { id: '2', label: '50+', value: 'Team Members' },
    { id: '3', label: '10+', value: 'Years Experience' },
    { id: '4', label: '100+', value: 'Projects Completed' },
    { id: '5', label: '24/7', value: 'Support' },
  ],
}

export const Trustedby = ({ TrustedBy }: any) => {
  const { heading, description, blobcard } = { ...fallbackData, ...TrustedBy }

  const parsedDescription = description?.root?.children?.map((paragraph: any, i: number) => (
    <p key={i} className="text-sm md:text-lg text-center md:w-3/4">
      {paragraph.children.map((child: any, j: number) => {
        const isBold = child.format === 1
        return (
          <span key={j} className={isBold ? 'font-semibold' : ''}>
            {child.text}
          </span>
        )
      })}
    </p>
  ))

  return (
    <section className="mt-2 bg-gray-900 text-white font-sans px-4 py-20 md:px-16 lg:px-32 bg-gray-900">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-extrabold md:text-4xl text-center">{heading}</h2>
        {parsedDescription}

        {/* Replace with <InfiniteTechScroll /> if needed */}
        <InfiniteTechScroll />

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12 w-full max-w-6xl">
          {blobcard?.map((item: any) => (
            <li
              key={item.id}
              className="flex flex-col p-4 bg-gray-800 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl font-bold border-l-2 border-teal-400 pl-2 py-1">
                {item.label}
              </span>
              <span className="pl-2 text-sm md:text-base text-white/90">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
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
            className="min-w-[120px] flex flex-col items-center justify-center p-4 rounded-xl backdrop-blur-sm shadow-md bg-white"
          >
            <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain mb-2" />
          </div>
        ))}
      </div>
    </div>
  )
}

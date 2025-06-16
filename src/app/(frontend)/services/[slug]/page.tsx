'use client'

import { useWindowSize } from '@uidotdev/usehooks'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import '../../../../css/hero3.css'

import { CiCircleChevDown } from 'react-icons/ci'
import { MousewheelEvents } from 'swiper/types'

const appDevelopmentServices = [
  {
    name: 'iOS App Development',
    description:
      "Design and develop high-performance applications for Apple's iOS platform using Swift and Objective-C, ensuring App Store compliance and seamless UX.",
  },
  {
    name: 'Android App Development',
    description:
      'Create robust and scalable Android applications using Kotlin and Java, optimized for diverse screen sizes and Android OS versions.',
  },
  {
    name: 'Cross-Platform App Development',
    description:
      'Build apps that work seamlessly on both Android and iOS using frameworks like Flutter, React Native, or Xamarin, reducing development time and cost.',
  },
  {
    name: 'UI/UX Design',
    description:
      'Craft visually engaging and user-friendly interfaces with wireframes, prototypes, and design systems tailored for mobile experiences.',
  },
  {
    name: 'App Maintenance and Support',
    description:
      'Ensure your app stays up-to-date with regular updates, bug fixes, performance monitoring, and OS compatibility support.',
  },
  {
    name: 'Progressive Web Apps (PWA)',
    description:
      'Develop lightweight web applications that behave like native apps with offline support, fast loading, and cross-browser compatibility.',
  },
  {
    name: 'MVP Development',
    description:
      'Launch faster with Minimum Viable Products tailored for startups and early-stage ideas, enabling market validation with core features.',
  },
  {
    name: 'API Development & Integration',
    description:
      'Build and integrate RESTful or GraphQL APIs for secure and scalable communication between your app and backend systems.',
  },
  {
    name: 'App Testing & QA',
    description:
      'Perform rigorous manual and automated testing for usability, functionality, performance, and security to ensure a bug-free launch.',
  },
  {
    name: 'App Store Optimization (ASO)',
    description:
      'Optimize your app listings on the App Store and Google Play to increase visibility, downloads, and conversion rates.',
  },
  {
    name: 'Wearable App Development',
    description:
      'Design applications for wearable devices like smartwatches and fitness trackers, focusing on real-time tracking and minimal UI.',
  },
  {
    name: 'Enterprise App Development',
    description:
      'Develop secure, scalable mobile solutions tailored for internal enterprise use, featuring role-based access and data integration.',
  },
]

type list = {
  name: string
  description: string
}

const Singleservicepage = () => {
  const sectionRef = useRef(null)
  const ScrollRef = useRef(null)
  const size = useWindowSize()
  const [listshow, setListshow] = useState(appDevelopmentServices[0])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const handleListShowChange = (key: string) => {
    const newList: list = appDevelopmentServices.find((d) => d.name == key) || {
      name: 'Default',
      description: 'Default',
    }
    setListshow(newList)
  }

  const rawImageY = useTransform(scrollYProgress, [0.37, 0.63], [100, -60])
  const rawDivY = useTransform(scrollYProgress, [0.37, 0.63], [-20, 450])

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    console.log('Scroll Progress:', latest)
  })

  // Use conditional values instead of conditional hooks
  const isLargeScreen = size.width !== null && size.width >= 1024
  const imageY = isLargeScreen ? rawImageY : undefined
  const divY = isLargeScreen ? rawDivY : undefined
  // const heightA = isLargeScreen ? rawHeightA : undefined
  return (
    <section
      ref={ScrollRef}
      className="relative h-[300vh] scroll-smooth text-white py-24 px-6 md:px-16"
    >
      <motion.div ref={sectionRef}>
        <motion.div
          style={{
            translateY: divY,
          }}
          className="relative z-20 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 h-50 sm:h-52 md:h-60 lg:h-120"
        >
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Digital Products Design Services
          </h1>
          <p className="text-center text-lg">
            We Ideate, design, and deliver seamless experiences by bridging the gap between your
            idea and the product
          </p>
          <button className="hover:bg-white hover:text-black font-bold transition-colors w-50 border-2 h-12 rounded-2xl cursor-pointer">
            Connect
          </button>
        </motion.div>

        <motion.img
          style={{
            translateY: imageY ?? 0,
          }}
          className="relative z-0 rounded-xl object-cover h-55 sm:h-60 md:h-120 w-full lg:h-120"
          src="https://images.unsplash.com/photo-1749456289357-4e5cbffe9fb3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="unsplash"
        />
      </motion.div>
      <div className="mt-20 sm:mt-3">
        <div className="h-30 flex flex-col gap-3">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            Services we offers in App Development
          </h1>
          <p className="text-lg">
            We Ideate, design, and deliver seamless experiences by bridging the gap between your
            idea and the product
          </p>
        </div>
        {size.width !== null && size.width >= 640 ? (
          <Developmentlist data={{ listshow, handleListShowChange }} />
        ) : (
          <Mobiledevelopmentlist />
        )}
      </div>
    </section>
  )
}

export default Singleservicepage

const Developmentlist = ({ data }: any) => {
  return (
    <div className="hidden sm:flex items-center justify-center  sm:h-80 md:h-80 lg:h-120">
      <ol className="w-1/2 h-full rounded-l-2xl border divide-y-2 overflow-y-scroll scrollhide font-bold bg-white list-decimal list-inside ">
        {appDevelopmentServices.map((d) => {
          return (
            <li
              onClick={() => data.handleListShowChange(d.name)}
              className={`${d.name == data.listshow.name ? 'text-black' : 'text-gray-300 cursor-pointer transition-colors'} p-4`}
              key={d.name}
            >
              {d.name}
            </li>
          )
        })}
      </ol>
      <div className="w-1/2 flex items-center justify-center text-center p-8 h-full rounded-r-2xl border transition-all">
        {data.listshow.description}
      </div>
    </div>
  )
}

const Mobiledevelopmentlist = () => {
  return (
    <div className="mt-7 flex flex-col gap-2">
      {[1, 2, 3].map((d) => {
        return <Mobilelistcard key={d} />
      })}
    </div>
  )
}

const Mobilelistcard = () => {
  const [show, setShow] = useState(false)
  const handleShowList = () => {
    setShow((prev) => !prev)
  }
  return (
    <div className={`${show ? 'h-40' : 'h-15'} w-full transition-all overflow-y-hidden`}>
      <div
        className={`${show ? 'bg-white text-black' : 'text-white bg-[#111111]'} h-15 flex items-center justify-between px-4 rounded-2xl`}
      >
        <h3 className="font-bold">App Development</h3>
        <span onClick={handleShowList}>
          <CiCircleChevDown />
        </span>
      </div>
      <p className="text-justify px-1 mt-5">
        We Ideate, design, and deliver seamless experiences by bridging the gap between your idea
        and the product
      </p>
    </div>
  )
}

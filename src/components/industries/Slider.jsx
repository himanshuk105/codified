'use client'
import { useEffect, useRef, useState } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

export const Indutryslider = () => {
  const [active, setActive] = useState(1)
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7])
  const [load, setLoad] = useState(true)

  const scrollref = useRef(null)

  useEffect(() => {
    const container = scrollref.current
    if (!container) return

    const children = container.children
    const activeCard = children[active]

    if (activeCard) {
      const scrollTo =
        activeCard.offsetLeft - container.clientWidth / 2 + activeCard.clientWidth / 2

      container.scrollTo({
        left: scrollTo,
        behavior: 'auto',
      })
    }
    setLoad(false)
  }, [])

  useEffect(() => {
    const scrollid = setInterval(() => {
      const container = scrollref.current
      if (!container) return

      const newActive = active + 1
      setActive(newActive)

      const children = container.children
      const activeCard = children[newActive]

      if (activeCard) {
        const scrollTo = activeCard.offsetLeft - container.clientWidth + activeCard.clientWidth

        container.scrollTo({
          left: scrollTo,
          behavior: 'smooth',
        })

        // If it's the clone at the end, snap back to real first after scroll completes
        if (newActive === data.length + 1) {
          setTimeout(() => {
            const realFirst = children[1] // real index 1
            const resetScroll = realFirst.offsetLeft - container.clientWidth + realFirst.clientWidth
            container.scrollTo({ left: resetScroll, behavior: 'auto' })
            setActive(1)
          }, 20)
        }
      }
    }, 1500)

    return () => clearInterval(scrollid)
  }, [active])

  const handleActive = () => {
    const container = scrollref.current
    if (!container) return

    const newActive = active + 1
    setActive(newActive)

    const children = container.children
    const activeCard = children[newActive]

    if (activeCard) {
      const scrollTo = activeCard.offsetLeft - container.clientWidth + activeCard.clientWidth

      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      })

      // If it's the clone at the end, snap back to real first after scroll completes
      if (newActive === data.length + 1) {
        setTimeout(() => {
          const realFirst = children[1] // real index 1
          const resetScroll = realFirst.offsetLeft - container.clientWidth + realFirst.clientWidth
          container.scrollTo({ left: resetScroll, behavior: 'auto' })
          setActive(1)
        }, 20)
      }
    }
  }
  const handlePrev = () => {
    const container = scrollref.current
    if (!container) return

    const newActive = active - 1
    setActive(newActive)

    const children = container.children
    const activeCard = children[newActive]

    if (activeCard) {
      const scrollTo = activeCard.offsetLeft - container.clientWidth + activeCard.clientWidth

      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      })

      // If it's the clone at the start, snap back to real last after scroll completes
      if (newActive === 0) {
        setTimeout(() => {
          const realLast = children[data.length] // real last index
          const resetScroll = realLast.offsetLeft - container.clientWidth + realLast.clientWidth
          container.scrollTo({ left: resetScroll, behavior: 'auto' })
          setActive(data.length)
        }, 20)
      }
    }
  }

  return (
    <div className="mt-8 w-screen px-6 md:px-16 min-h-screen flex items-center flex-col justify-center">
      <div className="p-10 text-white flex flex-col items-center gap-4">
        <h2 className="text-xl font-extrabold">{'Explore Industries'.toUpperCase()}</h2>
        <p className="font-normal text-2xl md:text-3xl lg:text-4xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque saepe consequatur qui
          incidunt rem sunt numquam modi nisi dolore. Fuga dignissimos culpa laborum architecto
          expedita.
        </p>
        <h3 className="w-full md:w-[60%] font-normal text-xl text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia doloribus, fugit hic amet
          numquam aliquid.
        </h3>
      </div>

      <div
        ref={scrollref}
        className="lg:w-[76%] w-full flex border-2 snap-mandatory snap-x overflow-hidden items-center h-150"
      >
        {[data[data.length - 1], ...data, data[0]].map((d, i) => {
          return (
            <div
              key={i}
              className={`snap-center flex-none box-border  relative h-120 w-full lg:w-90 flex ${active == i ? 'lg:scale-105 scale-100 z-40 bg-[#333333]' : 'bg-[#808080]'} items-center transition-all duration-150`}
            >
              <div
                className={`relative flex font-bold text-white w-full flex-col p-10 text-4xl transition-all duration-300 transform ${
                  active === i ? 'translate-y-[-80%]' : 'translate-y-0'
                }`}
              >
                <div className="flex justify-between">
                  <h4>{d}</h4>
                  <span>
                    <BsArrowUpRight />
                  </span>
                </div>
                <h2>Finance</h2>
              </div>

              <div
                className={`absolute bottom-0 lg:left-[-50px] right-0 ${active == i ? 'scale-1.5' : 'scale-0'} transition-all duration-200`}
              >
                <img
                  className="h-50"
                  src="https://images.vexels.com/media/users/3/263262/isolated/preview/a0fa3b0e535c2b4e1a512aa8a61794cd-money-business-coin-bag-icon.png"
                  alt=""
                />
              </div>
            </div>
          )
        })}
      </div>

      <div className="text-white mt-5 flex gap-2">
        <span
          className="p-2 rounded-full size-15 flex items-center justify-center border-2"
          onClick={handleActive}
        >
          N
        </span>
        <span
          onClick={handlePrev}
          className="p-2 rounded-full size-15 flex items-center justify-center border-2"
        >
          P
        </span>
      </div>
    </div>
  )
}

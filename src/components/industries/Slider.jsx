'use client'
import { BsArrowUpRight } from 'react-icons/bs'

export const Indutryslider = () => {
  return (
    <div className="w-[90vw]">
      {[1, 2, 3, 4].map((d) => {
        return (
          <div
            key={d}
            className="box-border border-2 border-white relative h-120 w-full sm:w-70 md:w-90"
          >
            <div className="border-2 border-white">
              <div>
                <h4>{d}</h4>
                <span>
                  <BsArrowUpRight />
                </span>
              </div>
              <h2>Finance</h2>
            </div>
            <div className="absolute">
              <img
                className="h-100"
                src="https://images.vexels.com/media/users/3/263262/isolated/preview/a0fa3b0e535c2b4e1a512aa8a61794cd-money-business-coin-bag-icon.png"
                alt=""
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

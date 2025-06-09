'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Swipper = () => {
  const data = [
    {
      l: 'L',
      h: 'Mentoring',
      p: 'Get Connected with a mentor that will help you pave your career path',
    },
    {
      l: 'D',
      h: 'Design',
      p: 'Learn visual design with modern tools and best practices.',
    },
    {
      l: 'C',
      h: 'Coding',
      p: 'Master frontend and backend skills to build real apps.',
    },
    {
      l: 'T',
      h: 'Teamwork',
      p: 'Collaborate in projects and grow your network.',
    },
    {
      l: 'S',
      h: 'Support',
      p: 'Get help and mentoring whenever you’re stuck.',
    },
  ]

  return (
    <div className="w-full px-5 py-10 bg-black text-white">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {data.map((d, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full flex flex-col gap-3 p-6 rounded-xl border border-gray-700 bg-[#111111]">
              <span className="size-14 text-xl font-bold rounded-full flex items-center justify-center border-2 border-gray-500">
                {d.l}
              </span>
              <h3 className="text-xl font-semibold">{d.h}</h3>
              <p className="text-sm text-gray-300">{d.p}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

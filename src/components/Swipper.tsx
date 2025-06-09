'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Swipper = () => {
  const data = [
    {
      industry: 'Tour & Travel',
      description:
        'Modern travel platforms with real-time booking, trip planning, and smart recommendations.',
    },
    {
      industry: 'Food & Restaurant',
      description:
        'Delivery apps, QR menus, POS systems, and kitchen management tools for modern dining.',
    },
    {
      industry: 'Healthcare & Fitness',
      description:
        'HIPAA-compliant apps, telemedicine, virtual coaching, and health tracking solutions.',
    },
    {
      industry: 'Education & E-Learning',
      description:
        'Interactive learning platforms, live classes, LMS, and AI-based adaptive learning.',
    },
    {
      industry: 'Gaming & Sports',
      description:
        'Game development, fantasy leagues, real-time stats, and immersive AR/VR features.',
    },
    {
      industry: 'Social Networking',
      description:
        'Scalable social platforms with messaging, communities, and AI-driven content feeds.',
    },
    {
      industry: 'Finance & Insurance',
      description:
        'Secure fintech solutions including wallets, analytics, KYC, and digital claim systems.',
    },
    {
      industry: 'Ecommerce',
      description:
        'B2B/B2C stores, multi-vendor platforms, smart checkout, and CRM-integrated systems.',
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
                H
              </span>
              <h3 className="text-xl font-semibold">{d.industry}</h3>
              <p className="text-sm text-gray-300 h-18">{d.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

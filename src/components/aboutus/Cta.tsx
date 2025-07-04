'use client'

export const CoreTeamSection = () => {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] bg-[#3ef4a5] overflow-hidden px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">
        {/* Text Content */}
        <div className="z-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
            Want to meet the founding members <br /> and key drivers of our success till now?
          </h2>
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-xl text-lg font-semibold shadow-lg">
            Meet Our Core Team
          </button>
        </div>

        {/* Image with border effects */}
        <div className="relative w-full h-[280px] md:h-[400px]">
          <div className="absolute inset-0 z-0 transform rotate-3 scale-105 rounded-xl border-[6px] border-pink-500"></div>
          <div className="absolute inset-0 z-0 transform -rotate-2 scale-95 rounded-xl border-[6px] border-yellow-400"></div>
          <img
            src="https://media.istockphoto.com/id/1359684836/photo/group-of-creative-people-working-together-on-new-project-young-business-men-and-women.jpg?s=2048x2048&w=is&k=20&c=B00Git5LXuSIcz6otQo1tnQBR-WQzZhtIXEGLTVX5bI="
            alt="Team"
            className="object-cover w-full h-full relative z-10 rounded-xl"
          />
        </div>
      </div>

      {/* Optional decorative shape */}
      <div className="absolute right-16 top-10 w-24 h-24 bg-blue-800 opacity-60 rotate-45 rounded-lg hidden md:block" />
    </section>
  )
}

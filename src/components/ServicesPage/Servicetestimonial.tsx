'use client'

export const ServiceTestimonials = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-9">
        <div className="rounded-lg w-full h-[calc(90vh-200px)] relative">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <img
              className="size-[100%] object-cover"
              src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Service background image"
            />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>
          <div className="relative z-10 p-6 text-white  h-full flex flex-col justify-end">
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-extrabold">Name of Services</h2>
            <h4 className="text-[clamp(1.2rem,3vw,2.6rem)] font-bold">
              Punch Line for the Service
            </h4>
          </div>
        </div>
        <div className="h-auto md:h-[calc(90vh-200px)] flex flex-col justify-between bg-[#111111] border border-[#222] rounded-2xl p-8 text-white shadow-md">
          <div>
            <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center text-lg font-semibold bg-[#1a1a1a]">
              L
            </div>
            <p className="mt-8 text-lg leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi harum maiores fugit
              repellat corrupti a ipsa. Quidem laboriosam cumque maxime molestiae in iusto sequi
              fugit numquam tempore error repellat, molestias debitis modi harum? Itaque maiores
              possimus, eveniet quod aspernatur dicta nisi id.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg shadow">
              I
            </div>
            <div>
              <p className="font-semibold text-white">Ishaan Verma</p>
              <p className="text-sm text-gray-400">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

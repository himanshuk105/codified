import '../css/hero3.css'
import { Swipper } from './Swipper'

export const Hero3 = () => {
  return (
    <section className="box-border text-white bg-black grid grid-cols-1 gap-5 p-5 mt-[80px] md:px-20">
      <div className="grid grid-cols-1 gap-3 justify-items-center">
        <div className="max-w-[520px] flex flex-col gap-7 md:min-w-full">
          <h1 className="text-3xl font-extrabold lg:text-5xl">Industry We Serve</h1>
          <h2 className="text-xl font-bold lg:text-3xl">
            Future-ready digital solutions for every sector.
          </h2>
          <p className="">
            At Codified Web, we empower businesses across diverse sectors with intelligent,
            scalable, and user-first digital solutions. By combining full-stack development, AI/ML
            capabilities, and seamless UI/UX design, we solve real-world challenges through
            technology that adapts, automates, and innovates.
          </p>
        </div>
      </div>
      <Swipper />
    </section>
  )
}

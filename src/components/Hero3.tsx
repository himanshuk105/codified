import '../css/hero3.css'
import { Swipper } from './Swipper'

export const Hero3 = () => {
  return (
    <section className="box-border text-white bg-black grid grid-cols-1 gap-5 p-5 mt-[80px] md:px-20">
      <div className="grid grid-cols-1 gap-3 justify-items-center">
        <div className="max-w-[520px] flex flex-col gap-7 md:min-w-full">
          <h1 className="text-3xl font-extrabold lg:text-5xl">Building a Tech Community</h1>
          <p className="">
            I founded Design & Code which is a global community with a mission to connect designers
            and developers to create a happy community eager to learn, innovate and grow together.
            We welcome all designers and developers: beginners, intermediates, and experts willing
            to learn together. We encourage sharing resources and learning experiences, organizing
            events, and providing feedback for our members to grow as they learn.
          </p>
        </div>
      </div>
      <Swipper />
    </section>
  )
}

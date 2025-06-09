export const Hero2 = () => {
  const data = [
    {
      l: 'L',
      h: 'Mentoring',
      p: 'Get Connected with a mentor that will help you pave your career path',
    },
    {
      l: 'L',
      h: 'Mentoring',
      p: 'Get Connected with a mentor that will help you pave your career path',
    },
    {
      l: 'L',
      h: 'Mentoring',
      p: 'Get Connected with a mentor that will help you pave your career path',
    },
    {
      l: 'L',
      h: 'Mentoring',
      p: 'Get Connected with a mentor that will help you pave your career path',
    },
  ]
  return (
    <section className="box-border text-white bg-black grid grid-cols-1 md:grid-cols-2 gap-5 p-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-2">
        {data.map((item, index) => {
          return (
            <div
              className="min-w-[180px] max-w-[520px] flex flex-col gap-2 p-8 rounded-lg border border-[#222222] h-50 md:h-90 lg:h-60 md:gap-5 bg-[#111111]"
              key={index}
            >
              <span className="size-15 rounded-full flex items-center justify-center border-2">
                {item.l}
              </span>
              <h2 className="text-xl font-bold">{item.h}</h2>
              <p>{item.p}</p>
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-1 gap-3 justify-items-center">
        <div className="max-w-[520px] flex flex-col gap-4 md:min-w-full">
          <h1 className="text-3xl font-extrabold lg:text-5xl">Building a Tech Community</h1>
          <p className="">
            I founded Design & Code which is a global community with a mission to connect designers
            and developers to create a happy community eager to learn, innovate and grow together.
            We welcome all designers and developers: beginners, intermediates, and experts willing
            to learn together. We encourage sharing resources and learning experiences, organizing
            events, and providing feedback for our members to grow as they learn.
          </p>
          <div className="flex  justify-between items-center">
            <div className="flex flex-col gap-2">
              <span className="text-5xl">5k+</span>
              <span>Community Members</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-5xl">5+</span>
              <span>Events Conducted</span>
            </div>
            <div className="flex flex-col  gap-2">
              <span className="text-5xl">4</span>
              <span>Year</span>
            </div>
          </div>
          <div className="text-black border-white ">
            <button className="bg-white font-bold w-40  h-full p-2 text-center flex items-center justify-center rounded">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

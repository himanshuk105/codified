// 'use client'
import Particles from './Particles'

export const LandingHero = ({ hero1 }: any) => {
  const para: string = hero1.text.root.children[0].children[0].text

  const { text } = hero1?.button[0]
  const heading: string = hero1?.heading

  return (
    <section
      className="h-[calc(100vh-80px)] relative overflow-hidden"
      // onMouseOver={(e) => handleBubling(e)}
    >
      {/* Particles background */}
      <Particles
        particleCount={300}
        className="h-full w-full absolute top-0 left-0 z-1 bg-black pointer-events-auto"
        particleColors={['#00d8ff']}
        moveParticlesOnHover
      />

      {/* Content Layer */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[80%] z-10 text-white text-center pointer-events-none">
        <h1 className="text-center sm:w-[90%] md:w-[60%] text-5xl sm:text-6xl md:text-6xl lg:text-7xl mb-4">
          {heading}
        </h1>
        <p className="text-lg mb-6 w-[90%] sm:w[-60%] md:w-[50%] lg:w-[40%]">{para}</p>
        <button className="black border-2 bg-black text-white px-6 py-2 rounded h-12 w-70">
          {text}
        </button>
      </div>
    </section>
  )
}

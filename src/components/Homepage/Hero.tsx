// 'use client'
import { HomeHeading } from './HomeHeading'
import Particles from './Particles'

export const LandingHero = ({ hero1 }: any) => {
  const para: string = hero1.text.root.children[0].children[0].text

  const { text } = hero1?.button[0]
  const heading: string = hero1?.heading

  return (
    <section className="h-[calc(100vh-80px)] relative overflow-hidden">
      <Particles
        particleCount={300}
        className="h-full w-full absolute top-0 left-0 z-1 bg-black"
        particleColors={['#00d8ff']}
      />

      {/* Content Layer */}
      <HomeHeading data={{ heading, text, para }} />
    </section>
  )
}

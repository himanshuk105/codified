import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'
import { LandingHero } from '@/components/Homepage/Hero'
import { InfiniteTechScroll } from '@/components/Homepage/InfiniteSlider'
import { Hero2 } from '@/components/Homepage/Hero2'
import { Hero3 } from '@/components/Homepage/Hero3'
import { Hero4 } from '@/components/Homepage/Hero4'
import { Testimonial } from '@/components/Homepage/Testimonial'

export async function generateMetadata() {
  const payloadInstance = await getPayload({ config })
  const data = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
  })

  const page = data.docs[0]

  return {
    title: page?.metaTitle || 'Codified Solutions',
    description:
      page?.metaDescription || 'Codified Solutions is a global software development company.',
  }
}

export default async function HomePage() {
  const payloadInstance = await getPayload({ config })
  const { docs } = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
  })

  const page = docs[0]
  const blocks = page?.blocks || []

  const hero1 = blocks.find((block: any) => block.blockType === 'hero')
  // const technologies = blocks.find((block: any) => block.blockType === 'Technologies')
  const hero2 = blocks.find((block: any) => block.blockName === 'Services')
  const hero3 = blocks.find(
    (block: any) => block.blockType === 'Single-Column-Section' && block.blockName === 'Industry',
  )
  const hero4 = blocks.find(
    (block: any) => block.blockType === 'Single-Column-Section' && block.blockName === 'Strategy',
  )
  const testimonial = blocks.find((block: any) => block.blockType === 'Testimonials')
  // console.log(testimonial)

  return (
    <>
      <LandingHero hero1={hero1} />
      <InfiniteTechScroll />
      <Hero2 hero2={hero2} />
      <Hero3 hero3={hero3} />
      <Hero4 hero4={hero4} />
      <Testimonial testimonials={testimonial} />
    </>
  )
}

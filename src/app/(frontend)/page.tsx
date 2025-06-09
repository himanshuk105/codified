import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import config from '@/payload.config'
import './styles.css'
import { LandingHero } from '@/components/Hero'
import { Hero2 } from '@/components/Hero2'
import { Hero3 } from '@/components/Hero3'
import { Hero4 } from '@/components/Hero4'
import { Testimonial } from '@/components/Testimonial'

export async function generateMetadata() {
  const headers = await getHeaders()
  const payloadInstance = await getPayload({ config })
  const data = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
  })

  const page = data.docs[0]

  return {
    title: page?.meta?.title || 'Codified Solutions',
    description:
      page?.meta?.description || 'Codified Solutions is a global software development company.',
  }
}

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const data = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
  })

  const hero1 = data?.docs[0]?.blocks?.find((d) => d.blockName === 'hero1')

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <>
      <LandingHero hero1={hero1} />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Testimonial />
    </>
  )
}

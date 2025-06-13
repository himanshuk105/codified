// import { getPayload } from 'payload'
// import config from '@/payload.config'
'use client'
import { Aboutusheading } from '@/components/aboutus/Aboutusheading'
import { Achiements } from '@/components/aboutus/Achievment'
import { Section2 } from '@/components/aboutus/Section2'
import { useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

// export async function generateMetadata() {
//   const payloadInstance = await getPayload({ config })
//   const data = await payloadInstance.find({
//     collection: 'pages',
//     where: { slug: { equals: 'services' } },
//   })

//   const servicepage = data.docs[0]
//   return {
//     title: servicepage?.meta?.title,
//     description: servicepage?.meta?.description,
//   }
// }

const AboutUsPage = () => {
  // const payloadInstance = await getPayload({ config })
  // const pagedata = await payloadInstance.find({
  //   collection: 'pages',
  //   where: { slug: { equals: 'services' } },
  // })

  return (
    <section className="relative  text-white ">
      <Aboutusheading />
      <Section2 />
      <Achiements />
    </section>
  )
}

export default AboutUsPage

// py-24 px-6 md:px-16

import { getPayload } from 'payload'
import config from '@/payload.config'
import { Singleserviceheading } from '@/components/ServicesPage/Singleservice'
import { Techstacks } from '@/components/ServicesPage/Techstack'
import { WhyUs } from '@/components/ServicesPage/Whyus'

import { Trustedby } from '@/components/Trusted'
import { Advancetech } from '@/components/ServicesPage/Advancetech'

export async function generateMetadata({ params }: any) {
  const { slug } = await params
  const payloadInstance = await getPayload({ config })
  const data = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
  })

  const singleservicepage = data.docs[0]
  return {
    title: singleservicepage?.metaTitle || 'Codified Solutions',
    description:
      singleservicepage?.metaDescription ||
      'Codified Solutions is a global software development company.',
  }
}

const SingleServicesPage = async ({ params }: any) => {
  const { slug } = await params
  const payloadInstance = await getPayload({ config })
  const pagedata = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
  })

  const blocks = pagedata.docs[0].blocks
  const hero = blocks?.find((block) => block.blockName == 'Hero')
  const project = blocks?.find((block) => block.blockName == 'Case Study')
  const whyus = blocks?.find((block) => block.blockName == 'Why Us')
  const techstack = blocks?.find((block) => block.blockName == 'Tech Stack')
  const AdvanceTech = blocks?.find((block) => block.blockName == 'Advance Tech')
  const TrustedBy = blocks?.find((block) => block.blockName == 'Trustedby')

  return (
    <section className="relative ">
      <Singleserviceheading hero={hero} />
      <WhyUs data={whyus} />
      <Techstacks techstack={techstack} />
      <Advancetech AdvanceTech={AdvanceTech} />
      <Trustedby TrustedBy={TrustedBy} />
    </section>
  )
}

export default SingleServicesPage

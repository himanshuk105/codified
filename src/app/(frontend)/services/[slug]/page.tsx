import { getPayload } from 'payload'
import config from '@/payload.config'
import { Singleserviceheading } from '@/components/ServicesPage/Singleservice'
import { Techstacks } from '@/components/ServicesPage/Techstack'
import { WhyUs } from '@/components/ServicesPage/Whyus'

export async function generateMetadata({ params }: any) {
  const { slug } = params
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
  const { slug } = params
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

  console.log(hero, project, whyus, techstack)

  return (
    <section className="relative  text-white py-24 px-6 md:px-16">
      <Singleserviceheading hero={hero} />
      <WhyUs data={whyus} />
      <Techstacks techstack={techstack} />
    </section>
  )
}

export default SingleServicesPage

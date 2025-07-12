import { HeadingSection } from '@/components/ServicesPage/Headingsection'

import { getPayload } from 'payload'
import config from '@/payload.config'
import { Servicebar } from '@/components/ServicesPage/Servicebar'
import { ServiceList } from '@/components/ServicesPage/ServiceList'

export async function generateMetadata() {
  const payloadInstance = await getPayload({ config })
  const data = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: 'services' } },
  })

  const servicepage = data.docs[0]
  return {
    title: servicepage?.metaTitle || 'Codified Solutions',
    description:
      servicepage?.metaDescription ||
      'Codified Solutions is a global software development company.',
  }
}

const ServicesPage = async () => {
  const payloadInstance = await getPayload({ config })
  const pagedata = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: 'services' } },
  })

  const hero1 = pagedata?.docs[0]?.blocks?.find((d) => d.blockName === 'Hero')
  const blocks = pagedata.docs[0].blocks
  const bar = pagedata.docs[0].blocks
    ?.map((block) => block.blockName)
    .filter((name) => name != 'Hero')

  return (
    <>
      {/* <section className="relative  text-white "> */}
      <HeadingSection hero1={hero1} className=" md:px-16" />
      <Servicebar sections={bar} />
      {blocks &&
        blocks.map((block: any) => {
          return block && block.blockType !== 'hero' && <ServiceList key={block.id} block={block} />
        })}
      {/* </section> */}
    </>
  )
}

export default ServicesPage

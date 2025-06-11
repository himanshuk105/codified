import { HeadingSection } from '@/components/ServicesPage/Headingsection'
import { Servicebar } from '@/components/ServicesPage/Servicebar'
import { ServiceList } from '@/components/ServicesPage/ServiceList'
import { ServiceTestimonials } from '@/components/ServicesPage/Servicetestimonial'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function generateMetadata() {
  const payloadInstance = await getPayload({ config })
  const data = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: 'services' } },
  })

  const servicepage = data.docs[0]
  return {
    title: servicepage?.meta?.title,
    description: servicepage?.meta?.description,
  }
}

const ServicesPage = async () => {
  const payloadInstance = await getPayload({ config })
  const pagedata = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: 'services' } },
  })

  const hero1 = pagedata?.docs[0]?.blocks?.find((d) => d.blockName === 'hero1')

  return (
    <section className="relative  text-white py-24 px-6 md:px-16">
      <HeadingSection hero1={hero1} />
      <Servicebar />
      <ServiceList />
      <ServiceTestimonials />
    </section>
  )
}

export default ServicesPage

import { getPayload } from 'payload'
import config from '@/payload.config'
import { Aboutusheading } from '@/components/aboutus/Aboutusheading'
import { Achiements } from '@/components/aboutus/Achievment'
import { CoreTeamSection } from '@/components/aboutus/Cta'
import { Section2 } from '@/components/aboutus/Section2'

export async function generateMetadata() {
  const payloadInstance = await getPayload({ config })
  const data = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: 'about-us' } },
  })

  const AboutUsPage = data.docs[0]
  return {
    title: AboutUsPage?.metaTitle || 'Codified Solutions',
    description:
      AboutUsPage?.metaDescription ||
      'Codified Solutions is a global software development company.',
  }
}

const AboutUsPage = async () => {
  const payloadInstance = await getPayload({ config })
  const pagedata = await payloadInstance.find({
    collection: 'pages',
    where: { slug: { equals: 'about-us' } },
  })

  const hero = pagedata?.docs[0]?.blocks?.find((d) => d.blockName === 'hero')

  const achievement = pagedata?.docs[0]?.blocks?.find((d) => d.blockName === 'achievement')

  const about_us = pagedata?.docs[0]?.blocks?.filter((d) => d.blockName === 'section')

  const cta = pagedata?.docs[0]?.blocks?.find((d) => d.blockName === 'cta')

  return (
    <section className="relative  text-white ">
      <Aboutusheading hero={hero} />
      <Section2 achievement={achievement} />
      <Achiements about_us={about_us} />
      <CoreTeamSection cta={cta} />
    </section>
  )
}

export default AboutUsPage

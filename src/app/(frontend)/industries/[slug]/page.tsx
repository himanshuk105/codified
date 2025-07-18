// export async function generateMetadata() {
//   const payloadInstance = await getPayload({ config })
//   const data = await payloadInstance.find({
//     collection: 'pages',
//     where: { slug: { equals: 'services' } },
//   })
//   const servicepage = data.docs[0]
//   return {
//     title: servicepage?.metaTitle || 'Codified Solutions',
//     description:
//       servicepage?.metaDescription ||
//       'Codified Solutions is a global software development company.',
//   }
// }

import { SmartAppFramework } from '@/components/industries/SingleIndustries/Miscellenous'
import { SingleIndustryHeroSection } from '@/components/industries/SingleIndustries/SInduhero'
import { Strategy } from '@/components/industries/SingleIndustries/Strategy'
import { WhyUs } from '@/components/ServicesPage/Whyus'
import { Trustedby } from '@/components/Trusted'

const SingleIndustryPage = async () => {
  // const payloadInstance = await getPayload({ config })
  // const pagedata = await payloadInstance.find({
  //   collection: 'pages',
  //   where: { slug: { equals: 'services' } },
  // })

  // const hero1 = pagedata?.docs[0]?.blocks?.find((d) => d.blockName === 'Hero')
  // const blocks = pagedata.docs[0].blocks
  // const bar = pagedata.docs[0].blocks
  //   ?.map((block) => block.blockName)
  //   .filter((name) => name != 'Hero')

  return (
    <section className="">
      <SingleIndustryHeroSection />
      <WhyUs />
      <Trustedby />
      <SmartAppFramework />
      <Strategy />
    </section>
  )
}

export default SingleIndustryPage

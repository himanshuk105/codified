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

import { HireHero } from '@/components/Hire Developers/Hirehero'
import { HireDeveloperSection } from '@/components/Hire Developers/Hiretech'
import { WhyUseOurTeam } from '@/components/Hire Developers/WhyTeam'
import { ServicesSection } from '@/components/industries/Research'
import { Trustedby } from '@/components/Trusted'

const Hiredevelopers = async () => {
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
      <HireHero />
      <HireDeveloperSection />
      <WhyUseOurTeam />
      <ServicesSection />
      <Trustedby />
    </section>
  )
}

export default Hiredevelopers

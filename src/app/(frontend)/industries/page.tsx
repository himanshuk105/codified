// export async function generateMetadata() {
//   const payloadInstance = await getPayload({ config })
//   const data = await payloadInstance.find({
//     collection: 'pages',
//     where: { slug: { equals: 'services' } },
//   })

import { IndustriesHero } from '@/components/industries/Industryhero'
import { Indutryslider } from '@/components/industries/Slider'

//   const servicepage = data.docs[0]
//   return {
//     title: servicepage?.metaTitle || 'Codified Solutions',
//     description:
//       servicepage?.metaDescription ||
//       'Codified Solutions is a global software development company.',
//   }
// }

const IndustryPage = async () => {
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
      <div>
        <IndustriesHero />
        <Indutryslider />
      </div>
    </section>
  )
}

export default IndustryPage

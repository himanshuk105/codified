import { HeadingSection } from '@/components/ServicesPage/Headingsection'
import { Servicebar } from '@/components/ServicesPage/Servicebar'
import { ServiceList } from '@/components/ServicesPage/ServiceList'
import { ServiceTestimonials } from '@/components/ServicesPage/Servicetestimonial'

const ServicesPage = () => {
  return (
    <section className="relative  text-white py-24 px-6 md:px-16">
      <HeadingSection />
      <Servicebar />
      <ServiceList />
      <ServiceTestimonials />
    </section>
  )
}

export default ServicesPage

// DigitalSolutions.tsx
'use client'

export const Strategy = () => {
  const services = [
    {
      title: 'Manufacturing Execution Systems (MES)',
      description:
        'We build MES solutions that provide real-time visibility into your production processes. Our platforms track, manage, and optimize manufacturing from start to finish, ensuring improved output, reduced downtime, and full operational control on the factory floor.',
    },
    {
      title: 'Factory Automation Software Development',
      description:
        'We develop intelligent automation software that enhances production speed, reduces manual errors, and integrates AI and IoT for smarter decisions. Our solutions modernize your operations and drive consistent, measurable improvements in factory performance and resource utilization.',
    },
    {
      title: 'Warehouse & Inventory Management Apps',
      description:
        'We design smart inventory and warehouse management apps that improve stock visibility, streamline logistics, and optimize space usage. Our systems reduce overhead, prevent stockouts, and ensure real-time tracking of inventory across multiple warehouse locations.',
    },
    {
      title: 'Production Planning & Reporting Solutions',
      description:
        'We engineer planning systems that optimize production schedules, track KPIs, and deliver real-time insights. Our tools improve resource allocation, reduce bottlenecks, and enhance productivity across every layer of your manufacturing operations.',
    },
  ]

  return (
    <section className="bg-[#0A0A1A] text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-sm font-bold uppercase text-blue-400 mb-3">Strategy for Success</h4>
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Digital Solutions that Redefine Industrial Manufacturing
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto mb-8">
          We develop intelligent digital systems that future-proof your manufacturing operations,
          combining automation, analytics, and connectivity to improve precision, scale confidently,
          and position your business for long-term success in the advancing industrial digitization.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition mb-12">
          Get a Quote
        </button>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gradient-to-b from-[#131326] to-[#1C2732] rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center mb-4">
                I
              </div>
              <h3 className="text-white font-semibold text-sm md:text-base mb-2">
                {service.title}
              </h3>
              <hr className="border-gray-600 mb-2" />
              <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

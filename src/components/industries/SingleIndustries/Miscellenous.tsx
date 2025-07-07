// SmartAppFramework.tsx
'use client'

import { FaRobot, FaShieldAlt, FaSyncAlt } from 'react-icons/fa'

export const SmartAppFramework = () => {
  const features = [
    {
      icon: <FaRobot className="text-white text-xl" />,
      title: 'Automation-First Development',
      description:
        'We prioritize automation from the start, streamlining manual processes with intelligent workflows, sensor integration, and auto-alert systems to reduce downtime and boost throughput. This approach ensures consistent output, improved accuracy, and faster response across production systems.',
    },
    {
      icon: <FaShieldAlt className="text-white text-xl" />,
      title: 'Reliability-Focused Engineering',
      description:
        'Every feature we build is tested to ensure uptime, durability, and uninterrupted plant performance, tailored for rugged industrial environments. Our solutions thrive in high-demand settings, delivering dependable performance under real-world conditions.',
    },
    {
      icon: <FaSyncAlt className="text-white text-xl" />,
      title: 'Continuous Process Optimization',
      description:
        'Using analytics and feedback loops, we help manufacturers identify bottlenecks, reduce waste, and make real-time improvements across production lines. This drives leaner operations, higher efficiency, and sustained competitive advantage at scale.',
    },
  ]

  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-sm font-bold tracking-widest text-black uppercase mb-3">
          Framework for Smart App Development
        </h4>
        <h2 className="text-3xl md:text-5xl font-semibold text-black mb-6">
          The Secret Behind Intelligent Manufacturing Apps
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          TechAhead redefines manufacturing with digital solutions built for speed, scale, and
          precision, turning data into decisions and complexity into control across your industrial
          ecosystem. We deliver manufacturing software that’s reliable, responsive, and ready for
          the real world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

const skills = [
  { name: 'Android Developers', icon: '/icons/android.svg' },
  { name: 'iOS Developers', icon: '/icons/ios.svg' },
  { name: 'Flutter Developers', icon: '/icons/flutter.svg' },
  { name: 'React Native Developers', icon: '/icons/react.svg' },
  { name: 'React.JS', icon: '/icons/react.svg' },
  { name: 'Node.JS', icon: '/icons/node.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'AWS', icon: '/icons/aws.svg' },
  { name: 'JavaScript', icon: '/icons/js.svg' },
  { name: 'Ruby on Rails', icon: '/icons/rails.svg' },
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'Angular', icon: '/icons/angular.svg' },
  { name: 'Golang', icon: '/icons/go.svg' },
  { name: 'Django', icon: '/icons/django.svg' },
  { name: 'Laravel', icon: '/icons/laravel.svg' },
  { name: 'Magento', icon: '/icons/magento.svg' },
  { name: 'ASP.NET', icon: '/icons/aspnet.svg' },
  { name: 'C#', icon: '/icons/csharp.svg' },
]

export const HireDeveloperSection = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'role'>('skills')

  return (
    <section className="bg-[#f9f9fc] py-20 px-4 md:px-10 text-center">
      <h4 className="text-sm font-bold text-black uppercase mb-2">Hire TechAhead Developers</h4>
      <h2 className="text-3xl md:text-5xl font-semibold mb-10 leading-snug text-black">
        Empower your projects with expert developers
      </h2>

      {/* Tabs */}
      <div className="relative flex justify-center items-center w-full max-w-2xl mx-auto mb-12">
        <div className="flex justify-between w-full relative text-black text-lg font-medium">
          <button
            onClick={() => setActiveTab('skills')}
            className={classNames('w-1/2 pb-2', {
              'font-extrabold text-black': activeTab === 'skills',
            })}
          >
            Based on Skills
          </button>
          <button
            onClick={() => setActiveTab('role')}
            className={classNames('w-1/2 pb-2', {
              'font-extrabold text-black': activeTab === 'role',
            })}
          >
            Based on Role
          </button>
        </div>

        {/* Animated Gradient Line */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gray-200 rounded-full" />
        <div
          className={classNames(
            'absolute bottom-0 h-[4px] rounded-full transition-all duration-500 ease-in-out',
            {
              'left-0 w-1/2 bg-gradient-to-r from-purple-500 to-pink-500': activeTab === 'skills',
              'left-1/2 w-1/2 bg-gradient-to-r from-pink-500 to-purple-500': activeTab === 'role',
            },
          )}
        />
      </div>

      {/* Tag Grid */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white text-black flex items-center gap-2 py-2 px-4 rounded-full shadow-sm hover:shadow-md transition whitespace-nowrap text-sm md:text-base"
          >
            <Image src={skill.icon} alt={skill.name} width={22} height={22} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

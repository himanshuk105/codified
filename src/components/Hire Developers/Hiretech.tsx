'use client'

import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import iconAndroid from '../../../public/icon-android.svg'
import iconAngular from '../../../public/icon-angular.svg'
import iconFlutter from '../../../public/104_flutter.png'
// import iconIOS from '../../../public/icon-ios.svg'
import iconNode from '../../../public/icon-nodejs.svg'
import iconPython from '../../../public/icon-python.svg'
import iconReact from '../../../public/icon-react.svg'
import iconCSharp from '../../../public/icon-csharp.svg'
import iconAWS from '../../../public/aws.svg'
import iconLaravel from '../../../public/icon-laravel.svg'
import iconMagento from '../../../public/icon-magento.svg'
import iconJava from '../../../public/icon-java.svg'
import iconRuby1 from '../../../public/icon-ruby-on-rails (1).svg'
import iconRuby2 from '../../../public/icon-ruby-on-rails.svg'
import iconDjango from '../../../public/icon-django.svg'
import iconIOSDev from '../../../public/ios-app-development.svg'

const skills = [
  { name: 'Android Developers', icon: iconAndroid.src },
  // { name: 'iOS Developers', icon: iconIOS.src },
  { name: 'Flutter Developers', icon: iconFlutter.src },
  { name: 'React Native Developers', icon: iconReact.src },
  { name: 'React.JS', icon: iconReact.src },
  { name: 'Node.JS', icon: iconNode.src },
  { name: 'Python', icon: iconPython.src },
  { name: 'AWS', icon: iconAWS.src },
  { name: 'JavaScript', icon: iconReact.src },
  { name: 'Ruby on Rails', icon: iconRuby2.src },
  { name: 'Java', icon: iconJava.src },
  { name: 'Angular', icon: iconAngular.src },
  { name: 'Golang', icon: iconNode.src }, // placeholder
  { name: 'Django', icon: iconDjango.src },
  { name: 'Laravel', icon: iconLaravel.src },
  { name: 'Magento', icon: iconMagento.src },
  { name: 'ASP.NET', icon: iconCSharp.src },
  { name: 'C#', icon: iconCSharp.src },
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

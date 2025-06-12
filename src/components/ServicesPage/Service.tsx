'use client'

import { Servicebar } from './Servicebar'
import { ServiceList } from './ServiceList'

export const Service = () => {
  const data = [
    'Product-Development',
    'App-Development',
    'Software-Development',
    'Digital-Marketing',
  ]

  return (
    <div>
      <Servicebar />
      {data.map((d) => {
        return (
          <div key={d} id={d}>
            <ServiceList />
          </div>
        )
      })}
    </div>
  )
}

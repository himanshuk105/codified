import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import { Header } from './Header'

export const Headers = async () => {
  const payloadInstance = await getPayload({ config })
  const { docs } = await payloadInstance.find({
    collection: 'Menu',
    where: { title: { equals: 'Navigation' } },
  })

  const data = docs[0].Items

  return <Header data={data} />
}

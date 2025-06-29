import React from 'react'
import './styles.css'
import { Header } from '@/components/Homepage/Header'
import { Footer } from '@/components/Homepage/Footer'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://codifiedweb.com/wp-content/uploads/2025/06/cws-logo.png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import React from 'react'
import './styles.css'

import { Footer } from '@/components/Homepage/Footer'
import { Headers } from '@/components/Homepage/Headers'
import { ModalProvider } from '@/context/ModalContext'
import { ConsultationModal } from '@/components/ConsultationModal'

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
        <ModalProvider>
          <Headers />
          <ConsultationModal />
          <main>{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  )
}

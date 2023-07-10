import { Suspense } from 'react'
import { Navbar } from '@/components/Navbar'
import { ViewTransitionApi } from '@/components/ViewTransitionApi'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import '@/styles/index.scss'

const { SITE_NAME } = process.env

export const metadata: Metadata = {
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
}

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className='bg-white text-black selection:bg-black dark:selection:bg-white selection:bg-opacity-10 dark:selection:bg-opacity-20 selection:text-orange-500 dark:bg-black dark:text-white'>
        <Navbar />
        <Suspense>
          <main className='max-w-6xl mx-auto p-8'>
            {children}
          </main>
        </Suspense>
        <ViewTransitionApi />
      </body>
    </html>
  )
}

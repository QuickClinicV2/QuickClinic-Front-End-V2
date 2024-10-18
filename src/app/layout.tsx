import './globals.css'

import type { Metadata } from 'next'

import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Quick Clinic',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <div className={cn('min-h-screen', 'lg:grid lg:grid-cols-app')}>
            <Sidebar />

            <main className={cn('p-4', 'lg:col-start-2 lg:py-6')}>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}

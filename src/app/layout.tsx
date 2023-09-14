import { Sidebar } from '@/Components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'LearnHub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='antialiased'>
      <body className={poppins.className}>
        <div className='lg:grid lg:grid-cols-app min-h-screen flex'>
          <aside className='lg:flex hidden'>
            <Sidebar />
          </aside>
          <main className='px-8 pb-12 pt-8 bg-zinc-800'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

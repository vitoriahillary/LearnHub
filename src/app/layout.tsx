import { Sidebar } from '@/Components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { MenuMobile } from '@/Components/Mobile/collapseBar'
import { Header } from '@/Components/Mobile/header'

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
        <div className='lg:grid lg:grid-cols-app min-h-screen min-w-screen flex flex-col'>
          <div className='lg:flex hidden'>
            <Sidebar />
          </div>
          <div className='lg:hidden'>
            <Header/>
          </div>
          <main className='px-8 pb-12 pt-8 bg-zinc-800 min-h-full overflow-y-auto'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

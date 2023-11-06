import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/page'
import Footer from './components/Footer/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bisnis P5',
  description: 'Website untuk memasarkan Bisnis P5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='dark'>
      <head>
      <link rel="icon" href="/jo.co_yellow.png" sizes="any" />
      </head>
      <body className={`${inter.className} `}>
      <Navbar/>
        {children}
      </body>
    </html>
  )
}

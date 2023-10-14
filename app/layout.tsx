import SideBar from '@/components/SideBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clappety - AI-Powered Mock Interviews',
  description: 'Clappety is an AI-powered mock interview platform that helps you practice for your next job interview.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SideBar>
              {children}
          </SideBar>
      </body>
    </html>
  )
}

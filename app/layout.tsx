import type { Metadata } from 'next'
import { IBM_Plex_Serif } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const font = IBM_Plex_Serif({ weight: '400', subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Atelier jolie',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "overflow-x-hidden")}>
        {children}
      </body>
    </html>
  )
}

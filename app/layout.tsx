import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/app/components/theme-provider"
import { Categories } from "@/app/components/categories"


export const metadata: Metadata = {
  title: 'Pit Lane Pals'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
          <body >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
          </body>

    </html>
  )
}

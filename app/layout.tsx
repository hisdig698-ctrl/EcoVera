import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import { CartProvider } from '@/components/ecovera/cart-context'
import { LanguageProvider } from '@/components/ecovera/language-context'
import { ThemeProvider } from '@/components/ecovera/theme-provider'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600']
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'EcoVera Artemisia™ BioSolution',
  description: 'A sustainable agribusiness transforming underutilized rural resources into premium, health-oriented Artemisia products.',
  generator: 'v0.app',
  keywords: ['skincare', 'natural', 'organic', 'beauty', 'body care', 'cruelty-free'],
}

export const viewport: Viewport = {
  themeColor: '#F7F4EF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </LanguageProvider>
          <Toaster position="bottom-center" richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

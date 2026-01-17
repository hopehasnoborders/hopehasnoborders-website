import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { getClient } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import { ClientLayout } from '@/components/layout/ClientLayout'
import { draftMode } from 'next/headers'
import PreviewOverlay from '@/components/PreviewOverlay'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hopehasnoborders.netlify.app'),
  title: {
    default: 'Hope Has No Borders',
    template: '%s | Hope Has No Borders'
  },
  description: 'Providing humanitarian aid and support to immigrants and asylum seekers in Denver, fostering a community where everyone has the opportunity to thrive.',
  keywords: ['nonprofit', 'immigration', 'asylum seekers', 'Denver', 'humanitarian aid', 'community support', 'volunteer', 'donate'],
  authors: [{ name: 'Hope Has No Borders' }],
  creator: 'Hope Has No Borders',
  publisher: 'Hope Has No Borders',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Hope Has No Borders',
    description: 'Providing humanitarian aid and support to immigrants and asylum seekers in Denver.',
    url: 'https://hopehasnoborders.netlify.app',
    siteName: 'Hope Has No Borders',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hope Has No Borders - Supporting Immigrants in Denver',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hope Has No Borders',
    description: 'Providing humanitarian aid and support to immigrants and asylum seekers in Denver.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const draft = await draftMode()
  const settings = await getClient(draft.isEnabled).fetch(siteSettingsQuery)

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans selection:bg-yellow-200 selection:text-black`}
      >
        <ClientLayout announcement={settings?.announcement}>
          {children}
        </ClientLayout>
        <PreviewOverlay />
      </body>
    </html>
  )
}

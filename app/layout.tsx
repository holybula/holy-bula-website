import type { Metadata, Viewport } from 'next'
import { Montserrat, Cinzel } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '../styles/globals.css'

const montserrat = Montserrat({
  subsets:  ['latin'],
  weight:   ['500', '800'],
  variable: '--font-montserrat',
  display:  'swap',
})

const cinzel = Cinzel({
  subsets:  ['latin'],
  weight:   ['500'],
  variable: '--font-cinzel',
  display:  'swap',
})

export const metadata: Metadata = {
  title: {
    default:  'Ascension | Elevate Your Circle',
    template: '%s | Ascension',
  },
  description:
    'Ascension is a premium kava bar and social club in Fort Lauderdale and Hollywood, FL. Kava, kratom teas, mocktails, events, and community. Business by day. Social by night.',
  keywords: [
    'kava bar', 'kratom tea', 'fort lauderdale', 'hollywood fl',
    'social club', 'events', 'trivia night', 'poker night',
    'ladies night', 'bingo', 'kava florida', 'kratom florida',
    'ascension', 'elevate your circle',
  ],
  authors:  [{ name: 'Ascension' }],
  creator:  'Ascension',
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://holybula.com',
    siteName:    'Ascension',
    title:       'Ascension | Elevate Your Circle',
    description: 'Premium kava bar and social club. Fort Lauderdale & Hollywood, FL.',
    images: [
      {
        url:    '/ascension-logo.svg',
        width:  1200,
        height: 630,
        alt:    'Ascension — Elevate Your Circle',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Ascension | Elevate Your Circle',
    description: 'Premium kava bar and social club. Fort Lauderdale & Hollywood, FL.',
    images:      ['/ascension-logo.svg'],
  },
  robots: {
    index:          true,
    follow:         true,
    googleBot: {
      index:             true,
      follow:            true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
  icons: {
    icon:       '/ascension-logo.svg',
    shortcut:   '/ascension-logo.svg',
    apple:      '/ascension-logo.svg',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width:               'device-width',
  initialScale:        1,
  maximumScale:        5,
  themeColor:          '#080808',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cinzel.variable}`}
    >
      <body className="bg-hb-black font-medium text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

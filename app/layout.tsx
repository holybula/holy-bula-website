import type { Metadata, Viewport } from 'next'
import { DM_Sans, Instrument_Serif, Cinzel } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { isMaintenanceMode } from '@/lib/maintenance'
import '../styles/globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })
const instrument = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-instrument', display: 'swap' })

const cinzel = Cinzel({
  subsets:  ['latin'],
  weight:   ['500'],
  variable: '--font-cinzel',
  display:  'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ascensionlounge.com'),
  title: {
    default:  'Ascension | Elevate Your Circle',
    template: '%s | Ascension',
  },
  description:
    'Ascension is a South Florida alcohol-free lounge for meeting up, playing pool, and making a night of it. Visit us in Fort Lauderdale.',
  keywords: [
    'kava bar', 'kratom tea', 'Fort Lauderdale', 'alcohol-free lounge',
    'pool tournaments', 'happy hour', 'Ascension Lounge',
  ],
  authors:  [{ name: 'Ascension' }],
  creator:  'Ascension',
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         '/',
    siteName:    'Ascension Lounge',
    title:       'Ascension | Elevate Your Circle',
    description: 'A South Florida alcohol-free lounge. Visit us in Fort Lauderdale.',
    images: [
      {
        url:    '/images/interior/pic_6.PNG',
        width:  814,
        height: 1086,
        alt:    'Guests inside Ascension Lounge',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Ascension | Elevate Your Circle',
    description: 'A South Florida alcohol-free lounge. Visit us in Fort Lauderdale.',
    images:      ['/images/interior/pic_6.PNG'],
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
}

export const viewport: Viewport = {
  width:               'device-width',
  initialScale:        1,
  maximumScale:        5,
  themeColor:          '#100e10',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const maintenance = isMaintenanceMode()

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrument.variable} ${cinzel.variable}`}
    >
      <body className="bg-hb-black antialiased">
        {maintenance ? (
          children
        ) : (
          <>
            <a href="#main-content" className="btn-gold skip-link">Skip to content</a>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}

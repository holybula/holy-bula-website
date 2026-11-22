import type { Metadata } from 'next'
import EventsThisWeek from '@/components/home/EventsThisWeek'
import HappyHourBar from '@/components/home/HappyHourBar'
import HeroSection from '@/components/home/HeroSection'
import LocationHours from '@/components/home/LocationHours'
import ReviewsSection from '@/components/home/ReviewsSection'
import RewardsTeaser from '@/components/home/RewardsTeaser'
import TheSpace from '@/components/home/TheSpace'
import WhatWePour from '@/components/home/WhatWePour'
import WhosHere from '@/components/home/WhosHere'
import { BRAND } from '@/lib/constants'
import { BUSINESS_HOURS_STRUCTURED_DATA, FORT_LAUDERDALE } from '@/lib/locations'

export const metadata: Metadata = {
  title: { absolute: 'Ascension Kava Bar & Lounge | South Florida' },
  description: 'An alcohol-free night out in South Florida. See what’s on at Ascension and plan your visit to our lounge in Fort Lauderdale.',
  alternates: { canonical: '/' },
}

const { address, googleMapsUrl } = FORT_LAUDERDALE
const venue = {
  '@context': 'https://schema.org',
  '@type': 'BarOrPub',
  name: BRAND.nameFull,
  description: 'Alcohol-free kava bar and lounge in Fort Lauderdale.',
  url: 'https://www.ascensionlounge.com/',
  email: BRAND.email,
  sameAs: [BRAND.instagramUrl],
  hasMap: googleMapsUrl,
  hasMenu: 'https://www.ascensionlounge.com/menu',
  servesCuisine: ['Kava', 'Kratom Tea', 'Coffee', 'Protein Shakes', 'Empanadas', 'Pizza'],
  openingHours: [BUSINESS_HOURS_STRUCTURED_DATA],
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.state,
    postalCode: address.zip,
    addressCountry: 'US',
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(venue) }} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <HappyHourBar />
        <WhatWePour />
        <EventsThisWeek />
        <TheSpace />
        <LocationHours />
        <WhosHere />
        <ReviewsSection />
        <RewardsTeaser />
      </main>
    </>
  )
}

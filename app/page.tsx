import type { Metadata } from 'next'
import HeroSection    from '@/components/home/HeroSection'
import HappyHourBar   from '@/components/home/HappyHourBar'
import WhosHere       from '@/components/home/WhosHere'
import EventsThisWeek from '@/components/home/EventsThisWeek'
import WhatWePour     from '@/components/home/WhatWePour'
import TheSpace       from '@/components/home/TheSpace'
import ReviewsSection from '@/components/home/ReviewsSection'
import RewardsTeaser  from '@/components/home/RewardsTeaser'
import LocationHours  from '@/components/home/LocationHours'

export const metadata: Metadata = {
  title:       'Holy Bula | Elevate Your Circle — Fort Lauderdale & Hollywood, FL',
  description: "Holy Bula is a premium alcohol-free social club in Fort Lauderdale and Hollywood, FL. Kava, kratom teas, mocktails, matcha, coffee. Events every night. Business by day. Social by night.",
  alternates:  { canonical: 'https://holybula.com' },
}

const structuredData = {
  '@context':    'https://schema.org',
  '@type':       'BarOrPub',
  name:          'Holy Bula',
  description:   "Premium alcohol-free social club. Fort Lauderdale & Hollywood, FL.",
  url:           'https://holybula.com',
  email:         'holybulausa@gmail.com',
  servesCuisine: ['Kava', 'Kratom Tea', 'Mocktails', 'Matcha', 'Coffee', 'Protein Shakes'],
  openingHours:  ['Mo-Th 08:00-02:00', 'Fr 08:00-03:00', 'Sa 10:00-03:00', 'Su 10:00-02:00'],
  priceRange:    '$$',
  sameAs: ['https://www.instagram.com/holybulausa'],
  location: [
    {
      '@type':   'Place',
      name:      'Holy Bula Fort Lauderdale',
      address: {
        '@type':         'PostalAddress',
        streetAddress:   '825 N Federal Hwy',
        addressLocality: 'Fort Lauderdale',
        addressRegion:   'FL',
        postalCode:      '33304',
        addressCountry:  'US',
      },
    },
    {
      '@type':   'Place',
      name:      'Holy Bula Hollywood / Cooper City',
      address: {
        '@type':         'PostalAddress',
        streetAddress:   '9630 Stirling Rd Ste 104',
        addressLocality: 'Hollywood',
        addressRegion:   'FL',
        postalCode:      '33024',
        addressCountry:  'US',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main id="main-content">
        {/* 2. Hero */}
        <HeroSection />

        {/* 3. Happy Hour Bar */}
        <HappyHourBar />

        {/* 4. Who's Here */}
        <WhosHere />

        {/* 5. Events This Week */}
        <EventsThisWeek />

        {/* 6. What We Pour */}
        <WhatWePour />

        {/* 7. The Space */}
        <TheSpace />

        {/* 8. Reviews */}
        <ReviewsSection />

        {/* 9. Rewards */}
        <RewardsTeaser />

        {/* 10. Locations + Hours */}
        <LocationHours />
      </main>
    </>
  )
}

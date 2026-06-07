import type { Metadata } from 'next'
import LocationHours from '@/components/home/LocationHours'
import { GOLD_GRADIENT_TEXT } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Locations',
  description: 'Visit Holy Bula in Fort Lauderdale or Hollywood, FL. Hours, happy hour, directions, and online ordering for both locations.',
  alternates:  { canonical: 'https://holybula.com/locations' },
}

export default function LocationsPage() {
  return (
    <main id="main-content">
      <LocationHours
        pageMode
        eyebrow="Find Us"
        title={
          <>
            Choose Your{' '}
            <span style={GOLD_GRADIENT_TEXT}>Nearest Location</span>
          </>
        }
        subtitle="Two South Florida locations. Same premium drinks, events, and community — pick the one closest to you."
      />
    </main>
  )
}

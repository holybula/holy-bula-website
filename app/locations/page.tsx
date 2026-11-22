import type { Metadata } from 'next'
import LocationHours from '@/components/home/LocationHours'

export const metadata: Metadata = {
  title: 'Visit Ascension',
  description: 'Plan a visit to Ascension Lounge at 825 N Federal Hwy in Fort Lauderdale. Find business hours, directions and happy hour.',
  alternates: { canonical: '/locations' },
}

export default function LocationsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="venue-inner venue-inner--locations">
      <LocationHours pageMode />
    </main>
  )
}

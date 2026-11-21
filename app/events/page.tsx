import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EventsThisWeek from '@/components/home/EventsThisWeek'
import HappyHourBar from '@/components/home/HappyHourBar'
import { FORT_LAUDERDALE } from '@/lib/locations'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Weekly events and happy hour at Ascension in Fort Lauderdale. See the schedule for pool, FIFA, Friday Night Party, Football & Free Pizza, and more.',
  alternates: { canonical: '/events' },
}

export default function EventsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen">
      <section aria-labelledby="events-page-heading" className="container-hb pt-28 md:pt-36">
        <div className="grid items-center gap-7 border-b border-white/10 pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:gap-12 md:pb-14">
          <div>
            <p className="eyebrow">Every week in Fort Lauderdale</p>
            <h1 id="events-page-heading" className="text-display-xl font-normal">
              Weekly events
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/75">
              {FORT_LAUDERDALE.address.full}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#weekly-schedule" className="btn-gold">Weekly schedule</Link>
              <Link href="#happy-hour" className="btn-outline">Happy hour</Link>
            </div>
          </div>
          <div className="relative aspect-[5/3] overflow-hidden border border-white/10">
            <Image
              src="/images/interior/holybula-art-4.PNG"
              alt="Pool table beneath framed artwork inside Ascension"
              className="object-cover object-[center_62%]"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
        </div>
      </section>

      <div className="py-10 md:py-14">
        <EventsThisWeek pageMode />
      </div>

      <HappyHourBar pageMode />

      <div className="container-hb flex flex-wrap items-center gap-x-6 gap-y-3 py-8">
        <a href={FORT_LAUDERDALE.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
          Get directions <span aria-hidden="true" className="link-arrow" />
        </a>
        <Link href="/locations" className="btn-outline">Business hours</Link>
      </div>
    </main>
  )
}

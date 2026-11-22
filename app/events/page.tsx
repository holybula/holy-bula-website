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
    <main id="main-content" tabIndex={-1} className="venue-inner venue-inner--events">
      <section aria-labelledby="events-page-heading" className="venue-masthead container-hb pt-28 md:pt-36">
        <div className="venue-events-intro grid items-center gap-7 border-b border-white/10 pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:gap-12 md:pb-14">
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
          <div className="venue-masthead-photo relative aspect-[4/3] w-full max-w-[22.5rem] overflow-hidden border border-hb-gold/35 md:justify-self-end">
            <Image
              src="/images/lounge/pool-night.jpg"
              alt="A player lining up a shot at an Ascension pool tournament in Fort Lauderdale"
              className="object-cover object-[50%_66%]"
              fill
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <div className="venue-schedule py-10 md:py-14">
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

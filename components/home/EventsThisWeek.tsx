'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { FORT_LAUDERDALE_SCHEDULE } from '@/lib/events'
import { getVenueClock } from '@/lib/locations'

interface EventsThisWeekProps {
  pageMode?: boolean
}

export default function EventsThisWeek({ pageMode = false }: EventsThisWeekProps) {
  const [today, setToday] = useState<number | null>(null)

  useEffect(() => {
    const updateToday = () => setToday((getVenueClock().day + 6) % 7)
    updateToday()
    const interval = window.setInterval(updateToday, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      id={pageMode ? 'weekly-schedule' : 'events'}
      aria-labelledby="weekly-schedule-heading"
      className={pageMode ? 'scroll-mt-28' : 'border-y border-white/10 bg-hb-black-2 py-9 md:py-12'}
    >
      <div className="container-hb">
        <div className={pageMode ? '' : 'grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] lg:gap-16'}>
          {pageMode ? (
            <h2 id="weekly-schedule-heading" className="sr-only">Weekly schedule</h2>
          ) : (
            <div className="lg:pt-3">
              <p className="eyebrow">Every week in Fort Lauderdale</p>
              <h2 id="weekly-schedule-heading" className="text-display-lg font-normal">
                The weekly lineup.
              </h2>
              <Link href="/events" className="btn-outline-gold mt-6">
                Explore events <span aria-hidden="true" className="link-arrow" />
              </Link>
            </div>
          )}

          <div>
            <ul className="border-t border-hb-gold-border">
              {FORT_LAUDERDALE_SCHEDULE.map((event, index) => {
                const isToday = index === today

                return (
                  <li
                    key={event.day}
                    aria-current={isToday ? 'date' : undefined}
                    className={`grid grid-cols-[5.65rem_minmax(0,1fr)] items-baseline gap-x-3 border-b border-white/10 px-3 py-4 sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:px-5 sm:py-5 ${isToday ? 'bg-hb-gold-dim' : ''}`}
                  >
                    <div className="row-span-2 flex flex-col items-start gap-1 sm:row-span-1">
                      <span className="text-sm text-hb-gold">{event.day}</span>
                      {isToday && <span className="text-xs text-white/70">Today</span>}
                    </div>
                    <p className="text-base font-medium leading-snug text-hb-white sm:text-lg">{event.name}</p>
                    <p className="mt-1 text-sm leading-snug text-white/70 sm:mt-0 sm:text-right">
                      {event.time}
                    </p>
                  </li>
                )
              })}
            </ul>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Follow{' '}
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-hb-gold underline underline-offset-4 hover:text-hb-gold-2"
              >
                {BRAND.instagram}
              </a>{' '}
              for schedule updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

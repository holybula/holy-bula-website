'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HAPPY_HOUR, isHappyHourNow } from '@/lib/events'
import { formatHour } from '@/lib/locations'

export default function HappyHourBar({ pageMode = false }: { pageMode?: boolean }) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const check = () => setIsActive(isHappyHourNow())
    check()
    const interval = window.setInterval(check, 60_000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      id={pageMode ? 'happy-hour' : undefined}
      aria-labelledby="happy-hour-heading"
      className={pageMode
        ? 'scroll-mt-24 border-t border-white/10 bg-hb-black-2 section-padding'
        : 'border-y border-hb-gold-border bg-hb-black-2'}
    >
      <div className={`container-hb ${pageMode ? '' : 'py-6'}`}>
        <div className={pageMode
          ? 'grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] lg:gap-16'
          : 'grid items-center gap-4 md:grid-cols-[1fr_auto] md:gap-8'}
        >
          <div>
            <h2
              id="happy-hour-heading"
              className={pageMode ? 'text-display-lg font-normal' : 'text-[1.65rem] font-normal leading-none sm:text-[1.9rem]'}
            >
              {pageMode ? 'Happy hour' : 'Happy Hours'}
            </h2>
            {pageMode ? (
              <p className="mt-2 text-sm text-hb-gold">All day {HAPPY_HOUR.allDay}</p>
            ) : (
              <dl className="mt-3 grid gap-1.5 text-sm text-hb-gold">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <dt className="font-semibold">{HAPPY_HOUR.allDay}:</dt>
                  <dd>All Day</dd>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <dt className="font-semibold">Every day:</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-x-3 gap-y-1">
                      {HAPPY_HOUR.windows.map(({ start, end }) => (
                        <li key={start} className="whitespace-nowrap">
                          {formatHour(start)}–{formatHour(end)}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            )}
            {isActive && <p className="mt-2 text-sm text-hb-gold">Happening now</p>}
          </div>

          {pageMode && (
            <div>
              <p className="text-sm font-medium text-hb-gold">Every day</p>
              <ul className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-base">
                {HAPPY_HOUR.windows.map(({ start, end }) => (
                  <li key={start} className="whitespace-nowrap text-hb-white">
                    {formatHour(start)}–{formatHour(end)}
                  </li>
                ))}
              </ul>
              <OfferList offers={HAPPY_HOUR.offers} />
            </div>
          )}

          {!pageMode && (
            <Link href="/events#happy-hour" className="inline-flex min-h-11 w-fit items-center gap-2 text-sm text-hb-gold underline-offset-4 transition-colors hover:text-hb-gold-2 hover:underline">
              Happy hour offers <span aria-hidden="true" className="link-arrow" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}

function OfferList({ offers }: { offers: readonly { name: string; price: string }[] }) {
  return (
    <dl className="mt-5 border-t border-hb-gold-border">
      {offers.map(({ name, price }) => (
        <div key={name} className="flex items-baseline justify-between gap-3 border-b border-white/10 py-3">
          <dt className="text-base text-hb-white">{name}</dt>
          <dd className="text-base font-medium text-hb-gold">{price}</dd>
        </div>
      ))}
    </dl>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BUSINESS_HOURS_TEXT, isOpenNow, type Location } from '@/lib/locations'
import ComingSoonOrderButton from '@/components/shared/ComingSoonOrderButton'

export default function LocationCard({
  location,
  heading: Heading = 'h3',
}: {
  location: Location
  heading?: 'h2' | 'h3'
}) {
  const [open, setOpen] = useState<boolean | null>(null)

  useEffect(() => {
    const update = () => setOpen(isOpenNow(location))
    update()
    const interval = window.setInterval(update, 60_000)
    return () => window.clearInterval(interval)
  }, [location])

  return (
    <div className="border border-[#d6ac76]/25 bg-[#181418] px-5 py-7 sm:p-9 lg:p-11">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <Heading className="text-[clamp(1.8rem,4vw,2.8rem)] font-normal tracking-tight">
          {location.name}
        </Heading>
        {open !== null && (
          <p className="flex items-center gap-2 text-xs font-medium text-[#e1d6ca]">
            <span
              className={`size-2 rounded-full ${open ? 'bg-[#9ec7a4]' : 'bg-[#9d9297]'}`}
              aria-hidden="true"
            />
            {open ? 'Open now' : 'Closed now'}
          </p>
        )}
      </div>
      <address className="mt-3 text-sm not-italic leading-relaxed text-[#e1d6ca] sm:text-base">
        {location.address.street}<br />
        {location.address.city}, {location.address.state} {location.address.zip}
      </address>

      <div className="my-6 border-y border-[#d6ac76]/20 py-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#d6ac76]">
          Business hours
        </p>
        <dl className="flex flex-wrap justify-between gap-x-4 text-sm text-[#e1d6ca] sm:text-base">
          <dt>Daily</dt>
          <dd>{BUSINESS_HOURS_TEXT}</dd>
        </dl>
      </div>

      <Link
        href="/events#happy-hour"
        className="mb-6 inline-flex min-h-11 items-center text-sm font-medium text-[#e6bb85] underline decoration-[#d6ac76]/45 underline-offset-4 hover:decoration-current"
      >
        Happy hour &amp; specials <span aria-hidden="true" className="link-arrow" />
      </Link>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
        >
          Get Directions
        </a>
        <a href={location.textHref} className="btn-outline-gold">
          Text the Lounge
        </a>
      </div>
      <div className="mt-4">
        <ComingSoonOrderButton compact />
      </div>
    </div>
  )
}

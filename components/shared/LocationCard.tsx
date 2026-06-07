'use client'

import { useState, useEffect } from 'react'
import { isOpenNow, type Location } from '@/lib/locations'
import ComingSoonOrderButton from '@/components/shared/ComingSoonOrderButton'
import AnimatedReveal from '@/components/shared/AnimatedReveal'

function OpenIndicator({ location }: { location: Location }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isOpenNow(location))
    const interval = setInterval(() => setOpen(isOpenNow(location)), 60_000)
    return () => clearInterval(interval)
  }, [location])

  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-2 h-2 rounded-full flex-shrink-0 ${open ? 'bg-[#4ade80]' : 'bg-white/20'}`}
        style={open ? { boxShadow: '0 0 6px rgba(74,222,128,0.5)' } : undefined}
        aria-hidden="true"
      />
      <span className={`text-[0.55rem] tracking-[0.15em] uppercase ${open ? 'text-[#4ade80]' : 'text-white/25'}`}>
        {open ? 'Open Now' : 'Closed'}
      </span>
    </div>
  )
}

export default function LocationCard({ location, index = 0 }: { location: Location; index?: number }) {
  return (
    <AnimatedReveal delay={index * 120}>
      <div className="flex flex-col h-full border border-white/[0.08] bg-[#0d0d0d] p-7 md:p-8 transition-colors duration-300 hover:bg-white/[0.02] hover:border-white/[0.12]">
        <div className="flex items-start justify-between gap-3 mb-6">
          <h3 className="text-xl font-extrabold text-white leading-tight">
            {location.name}
          </h3>
          <OpenIndicator location={location} />
        </div>

        <div className="mb-5">
          <p className="text-[0.6rem] tracking-[0.18em] uppercase text-white/25 mb-1.5">Address</p>
          <address className="not-italic text-sm text-white/72 leading-relaxed ">
            {location.address.street}<br />
            {location.address.city}, {location.address.state} {location.address.zip}
          </address>
        </div>

        <div className="mb-5">
          <p className="text-[0.6rem] tracking-[0.18em] uppercase text-white/25 mb-2">Hours</p>
          <ul className="flex flex-col gap-1.5">
            {location.hours.map(h => (
              <li key={h.days} className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-white/58 flex-shrink-0 ">{h.days}</span>
                <span className="text-xs text-white/65 ">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-7 flex-1">
          <p className="text-[0.6rem] tracking-[0.18em] uppercase text-hb-gold/60 mb-2">Happy Hour</p>
          <div className="flex flex-col gap-1">
            {location.id === 'fort-lauderdale' ? (
              <>
                <p className="text-xs text-white/65 ">
                  <span className="text-white/25 mr-1.5">Weekdays</span>
                  {location.happyHourDisplay.weekday}
                </p>
                {location.happyHourDisplay.weekend && (
                  <p className="text-xs text-white/65 ">
                    <span className="text-white/25 mr-1.5">Weekends</span>
                    {location.happyHourDisplay.weekend}
                  </p>
                )}
              </>
            ) : (
              <p className="text-xs text-white/65 ">
                <span className="text-white/25 mr-1.5">Daily</span>
                {location.happyHourDisplay.weekday}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold flex-1 justify-center text-[0.625rem]"
          >
            Get Directions
          </a>
          <ComingSoonOrderButton compact fullWidth className="flex-1" />
        </div>
      </div>
    </AnimatedReveal>
  )
}

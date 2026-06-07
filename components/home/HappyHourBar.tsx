'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LOCATIONS_LIST, isHappyHourNow } from '@/lib/locations'

export default function HappyHourBar() {
  const [happyNow, setHappyNow] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const check = () => {
      const result: Record<string, boolean> = {}
      LOCATIONS_LIST.forEach(loc => { result[loc.id] = isHappyHourNow(loc) })
      setHappyNow(result)
    }
    check()
    // re-check every minute
    const interval = setInterval(check, 60_000)
    return () => clearInterval(interval)
  }, [])

  const anyHappyNow = Object.values(happyNow).some(Boolean)

  return (
    <div
      className="w-full bg-[#0d0d0d] border-b border-white/[0.05]"
      style={{ borderLeft: '2px solid #D4AF37' }}
      aria-label="Happy Hour schedule"
    >
      <div className="container-hb py-5">
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10">

          {/* Label */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className={`w-2 h-2 rounded-full bg-[#D4AF37] ${anyHappyNow ? 'animate-pulse' : ''}`}
              aria-hidden="true"
            />
            <span className="text-[0.625rem] tracking-[0.25em] uppercase font-medium text-[#D4AF37]">
              {anyHappyNow ? 'Happy Hour Now' : 'Happy Hour'}
            </span>
          </div>

          {/* Location schedules */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 flex-1">
            {LOCATIONS_LIST.map(loc => (
              <div key={loc.id} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="text-[0.625rem] tracking-[0.15em] uppercase text-white/35 flex-shrink-0">
                  {loc.nameShort}
                  {loc.flagship && (
                    <span className="ml-1.5 text-[#D4AF37]/50">·</span>
                  )}
                </span>
                <div className="flex flex-col gap-0.5">
                  {loc.id === 'fort-lauderdale' ? (
                    <>
                      <span className="text-xs text-white/55">
                        <span className="text-white/30 text-[0.6rem] tracking-wide mr-1.5">Weekdays</span>
                        {loc.happyHourDisplay.weekday}
                      </span>
                      {loc.happyHourDisplay.weekend && (
                        <span className="text-xs text-white/55">
                          <span className="text-white/30 text-[0.6rem] tracking-wide mr-1.5">Weekends</span>
                          {loc.happyHourDisplay.weekend}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="text-xs text-white/55">
                      <span className="text-white/30 text-[0.6rem] tracking-wide mr-1.5">Daily</span>
                      {loc.happyHourDisplay.weekday}
                    </span>
                  )}
                </div>
                {happyNow[loc.id] && (
                  <span className="text-[0.5rem] tracking-[0.15em] uppercase text-[#4ade80] border border-[rgba(74,222,128,0.3)] px-1.5 py-0.5 self-start sm:self-auto">
                    Active Now
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/locations"
            className="text-[0.6rem] tracking-[0.18em] uppercase text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors duration-200 whitespace-nowrap flex-shrink-0"
          >
            See Full Hours →
          </Link>
        </div>
      </div>
    </div>
  )
}

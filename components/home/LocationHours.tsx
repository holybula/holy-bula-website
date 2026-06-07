'use client'

import type { ReactNode } from 'react'
import { LOCATIONS_LIST } from '@/lib/locations'
import { COPY } from '@/lib/constants'
import AnimatedReveal from '@/components/shared/AnimatedReveal'
import LocationCard from '@/components/shared/LocationCard'

interface LocationHoursProps {
  /** Full-page variant for /locations route */
  pageMode?: boolean
  eyebrow?: string
  title?: ReactNode
  subtitle?: string
}

export default function LocationHours({
  pageMode  = false,
  eyebrow   = COPY.locationEyebrow,
  title     = COPY.locationTitle,
  subtitle,
}: LocationHoursProps) {
  const HeadingTag = pageMode ? 'h1' : 'h2'

  return (
    <section
      id={pageMode ? undefined : 'locations'}
      className={`bg-[#080808] border-t border-white/[0.05] ${
        pageMode ? 'relative min-h-screen pt-28 md:pt-36 overflow-hidden' : ''
      }`}
      aria-labelledby="locations-heading"
    >
      {pageMode && (
        <>
          <div
            className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top right, rgba(147,51,234,0.14) 0%, transparent 60%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at bottom left, rgba(201,162,39,0.06) 0%, transparent 65%)' }}
            aria-hidden="true"
          />
        </>
      )}

      <div className={`container-hb section-padding ${pageMode ? 'relative z-10' : ''}`}>

        <AnimatedReveal>
          <div className="mb-10">
            <p className="eyebrow">{eyebrow}</p>
            <div className="gold-line-left" />
            <HeadingTag
              id="locations-heading"
              className={`font-bold text-white leading-tight tracking-tight ${
                pageMode
                  ? 'text-[clamp(2rem,6vw,3.75rem)] leading-[1.05] max-w-2xl'
                  : 'text-[clamp(1.8rem,4vw,2.8rem)]'
              }`}
            >
              {title}
            </HeadingTag>
            {subtitle && (
              <p className="text-white/72 text-base md:text-lg mt-4 max-w-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {LOCATIONS_LIST.map((loc, i) => (
            <LocationCard key={loc.id} location={loc} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

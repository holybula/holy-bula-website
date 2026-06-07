'use client'

import { useEffect, useCallback } from 'react'
import Link from 'next/link'
import { LOCATIONS_LIST } from '@/lib/locations'
import type { LocationId } from '@/lib/constants'
import ComingSoonOrderButton from '@/components/shared/ComingSoonOrderButton'

interface LocationSelectorModalProps {
  isOpen:         boolean
  onClose:        () => void
  intent:         'order' | 'events' | 'location'
  onSelect?:      (locationId: LocationId) => void
}

const INTENT_COPY = {
  order:    { eyebrow: 'Order Online', title: 'Choose Your Location', sub: 'Online ordering is currently being finalized.' },
  events:   { eyebrow: 'Events',       title: 'Choose Your Location', sub: 'View the event schedule for your location.' },
  location: { eyebrow: 'Locations',    title: 'Find a Location',      sub: 'Two locations. One circle.'               },
} as const

const INTENT_HREFS: Record<'events' | 'location', (id: LocationId) => string> = {
  events:   id => `/events?location=${id}`,
  location: id => `/locations/${id}`,
}

export default function LocationSelectorModal({
  isOpen,
  onClose,
  intent,
  onSelect,
}: LocationSelectorModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  const copy = INTENT_COPY[intent]

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-modal-title"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="w-full max-w-lg bg-[#0d0d0d] border border-white/[0.08] relative"
        style={{ boxShadow: '0 0 80px rgba(0,0,0,0.8)' }}
      >
        <div
          className="h-[1px] w-full"
          style={{ background: 'linear-gradient(90deg, transparent, #D4AF37 50%, transparent)' }}
        />

        <div className="p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">{copy.eyebrow}</p>
              <h2
                id="location-modal-title"
                className="text-2xl font-extrabold text-white"
              >
                {copy.title}
              </h2>
              <p className="text-sm text-white/45 mt-1">{copy.sub}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close location selector"
              className="text-white/30 hover:text-white transition-colors duration-200 p-1 -mt-1 -mr-1"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {LOCATIONS_LIST.map(location => {
              const cardContent = (
                <div
                  className={`
                    group flex items-center justify-between p-5 border
                    transition-all duration-300 cursor-pointer
                    border-white/[0.08] hover:border-white/20 hover:bg-white/[0.03]
                  `}
                >
                  <div>
                    <div className="mb-1">
                      <span className="text-lg font-extrabold text-white">
                        {location.name}
                      </span>
                    </div>
                    <p className="text-xs text-white/40 tracking-wide">
                      {location.address.city}, {location.address.state} · {location.phone}
                    </p>
                  </div>
                  <svg
                    width="20" height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className="text-white/25 group-hover:text-hb-gold transition-colors duration-200 flex-shrink-0"
                  >
                    <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )

              if (intent === 'order') {
                return (
                  <div key={location.id} aria-label={location.name}>
                    {cardContent}
                  </div>
                )
              }

              if (onSelect) {
                return (
                  <button
                    key={location.id}
                    onClick={() => { onSelect(location.id as LocationId); onClose() }}
                    className="text-left w-full"
                    aria-label={`Select ${location.name}`}
                  >
                    {cardContent}
                  </button>
                )
              }

              return (
                <Link
                  key={location.id}
                  href={INTENT_HREFS[intent](location.id)}
                  onClick={onClose}
                  aria-label={`${location.name} — ${copy.eyebrow}`}
                >
                  {cardContent}
                </Link>
              )
            })}
          </div>

          {intent === 'order' && (
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <ComingSoonOrderButton fullWidth showMessage />
            </div>
          )}

          <p className="text-[0.625rem] tracking-[0.12em] uppercase text-white/20 text-center mt-6">
            Holy Bula · Fort Lauderdale & Hollywood, FL
          </p>
        </div>
      </div>
    </div>
  )
}

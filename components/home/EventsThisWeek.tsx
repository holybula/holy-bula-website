'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SCHEDULES, getTodayIndex, DOT_COLORS, type DayEvent } from '@/lib/events'
import { type LocationId, COPY, BRAND } from '@/lib/constants'
import AnimatedReveal from '@/components/shared/AnimatedReveal'

function DayCard({ event, isToday }: { event: DayEvent; isToday: boolean }) {
  return (
    <div
      className={`
        relative flex flex-col p-4 border transition-all duration-200
        ${isToday
          ? 'border-[rgba(212,175,55,0.5)] bg-[rgba(212,175,55,0.05)]'
          : event.active
            ? 'border-white/[0.07] bg-[#0d0d0d] hover:border-white/[0.15] hover:bg-[#111]'
            : 'border-white/[0.04] bg-[#090909]'
        }
      `}
    >
      {isToday && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          aria-hidden="true"
        />
      )}

      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/30">
          {event.dayShort}
        </span>
        {isToday && (
          <span className="text-[0.5rem] tracking-[0.12em] uppercase text-[#D4AF37] border border-[rgba(212,175,55,0.4)] px-1.5 py-0.5">
            Tonight
          </span>
        )}
      </div>

      {event.active ? (
        <>
          <p
            className="text-sm font-bold text-white leading-tight mb-1.5"
          >
            {event.name}
          </p>
          <p className="text-[0.6rem] tracking-[0.12em] uppercase text-white/30 mt-auto">
            {event.time}
          </p>
          {event.dot !== 'none' && (
            <div
              className="w-1.5 h-1.5 rounded-full mt-3"
              style={{ backgroundColor: DOT_COLORS[event.dot] }}
              aria-hidden="true"
            />
          )}
        </>
      ) : (
        <p className="text-sm text-white/15 mt-auto">—</p>
      )}
    </div>
  )
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-3 text-[0.625rem] tracking-[0.18em] uppercase font-medium
        border-b-2 transition-all duration-200 whitespace-nowrap
        ${active ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-white/30 border-transparent hover:text-white/55'}
      `}
    >
      {label}
    </button>
  )
}

interface EventsThisWeekProps {
  /** Hides the section header and CTA — used on /events */
  pageMode?: boolean
}

export default function EventsThisWeek({ pageMode = false }: EventsThisWeekProps) {
  const [activeTab, setActiveTab] = useState<LocationId>('fort-lauderdale')
  const todayIdx = getTodayIndex()
  const schedule = SCHEDULES[activeTab]

  return (
    <section
      id={pageMode ? undefined : 'events'}
      className={pageMode ? 'bg-[#080808]' : 'bg-[#0a0a0a] border-t border-white/[0.05]'}
      aria-labelledby={pageMode ? undefined : 'events-heading'}
    >
      <div className={`container-hb ${pageMode ? 'pt-8 pb-[var(--section-padding)]' : 'section-padding'}`}>

        {!pageMode && (
          <AnimatedReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="eyebrow">{COPY.eventsEyebrow}</p>
                <div className="gold-line-left" />
                <h2
                  id="events-heading"
                  className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white leading-tight"
                >
                  {COPY.eventsTitle}
                </h2>
              </div>
              <Link href="/events" className="btn-outline-gold whitespace-nowrap text-[0.625rem]">
                See Full Schedule →
              </Link>
            </div>
          </AnimatedReveal>
        )}

        <AnimatedReveal delay={pageMode ? 0 : 80}>
          <div className="flex border-b border-white/[0.08] mb-6 overflow-x-auto">
            <TabButton
              label="Fort Lauderdale"
              active={activeTab === 'fort-lauderdale'}
              onClick={() => setActiveTab('fort-lauderdale')}
            />
            <TabButton
              label="Hollywood / Cooper City"
              active={activeTab === 'hollywood'}
              onClick={() => setActiveTab('hollywood')}
            />
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={pageMode ? 80 : 150}>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {schedule.events.map(event => (
              <DayCard
                key={event.dayIndex}
                event={event}
                isToday={event.dayIndex === todayIdx}
              />
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={pageMode ? 150 : 200}>
          <p className="text-[0.6rem] text-white/25 italic mt-5">
            {COPY.eventsNote.replace('@holybulausa', '')}
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors duration-200 not-italic"
            >
              {BRAND.instagram}
            </a>
            {' '}for updates.
          </p>
        </AnimatedReveal>

      </div>
    </section>
  )
}

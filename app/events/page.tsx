import type { Metadata } from 'next'
import EventsThisWeek from '@/components/home/EventsThisWeek'
import { GOLD_GRADIENT_TEXT } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Events',
  description: 'Weekly events at Holy Bula Fort Lauderdale and Hollywood. Trivia, poker, ladies night, bingo, pool tournaments, and more — something every night.',
  alternates:  { canonical: 'https://holybula.com/events' },
}

export default function EventsPage() {
  return (
    <main id="main-content" className="bg-[#080808] min-h-screen">
      <section
        className="relative pt-28 md:pt-36 pb-0 overflow-hidden border-b border-white/[0.05]"
        aria-labelledby="events-page-heading"
      >
        <div
          className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(147,51,234,0.14) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom left, rgba(212,175,55,0.06) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="container-hb relative z-10 pb-8 md:pb-10">
          <p className="eyebrow">Events This Week</p>
          <div className="gold-line-left" />
          <h1
            id="events-page-heading"
            className="text-[clamp(2rem,6vw,3.75rem)] font-extrabold text-white leading-[1.05] tracking-tight max-w-2xl"
          >
            Weekly{' '}
            <span style={GOLD_GRADIENT_TEXT}>Events</span>
          </h1>
          <p className="text-white/72 text-base md:text-lg mt-4 max-w-lg leading-relaxed">
            Seven nights a week. Pick your circle.
          </p>
        </div>
      </section>

      <EventsThisWeek pageMode />
    </main>
  )
}

import type { Metadata } from 'next'
import { GOLD_GRADIENT_TEXT } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Ascension Reviews',
  description: 'Read what guests say about Ascension — premium kava bar and social club in Fort Lauderdale and Hollywood, FL.',
  alternates:  { canonical: 'https://ascensionlounge.com/reviews' },
}

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Holy+Bula+Kava+Bar+Reviews'

const PLACEHOLDER_REVIEWS = [
  {
    name:    'Alex M.',
    rating:  5,
    excerpt: 'Best atmosphere in South Florida. The drinks are incredible and the community is unmatched.',
  },
  {
    name:    'Jordan T.',
    rating:  5,
    excerpt: 'Ascension is my go-to for focus during the day and great energy at night. Truly elevated.',
  },
  {
    name:    'Sam R.',
    rating:  5,
    excerpt: 'Premium vibe, amazing staff, and events every night. This place feels like home.',
  },
  {
    name:    'Chris L.',
    rating:  5,
    excerpt: 'The kratom teas and mocktails are next level. A must-visit for anyone in the area.',
  },
  {
    name:    'Taylor K.',
    rating:  5,
    excerpt: 'Finally a social spot without alcohol that still feels luxurious. Love the circle here.',
  },
  {
    name:    'Morgan P.',
    rating:  5,
    excerpt: 'From trivia nights to the lounge setup — everything about Ascension is intentional and premium.',
  },
] as const

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#D4AF37" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#080808] text-white">
      <section className="relative overflow-hidden border-b border-white/[0.05] pt-28 pb-16 md:pt-36 md:pb-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at top center, rgba(147,51,234,0.18) 0%, transparent 55%)' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full"
          style={{ background: 'radial-gradient(ellipse at bottom center, rgba(212,175,55,0.08) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="container-hb relative z-10 text-center">
          <p className="eyebrow">Ascension Reviews</p>
          <div className="gold-line mx-auto mb-6" style={{ maxWidth: '160px' }} />
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight text-white max-w-4xl mx-auto">
            The Circle Speaks{' '}
            <span style={GOLD_GRADIENT_TEXT}>For Itself.</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-base md:text-lg text-white/72 leading-relaxed">
            Real guests. Real experiences. See why Ascension is South Florida&apos;s premium alcohol-free social club.
          </p>
        </div>
      </section>

      <section className="relative section-padding border-t border-white/[0.05]">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
          style={{ background: 'radial-gradient(ellipse at right center, rgba(147,51,234,0.1) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div className="container-hb relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {PLACEHOLDER_REVIEWS.map((review) => (
              <article
                key={review.name}
                className="relative flex flex-col rounded-xl border border-[rgba(212,175,55,0.2)] bg-[#0d0d0d] p-6 md:p-7 transition-colors duration-200 hover:border-[rgba(212,175,55,0.4)]"
                style={{ boxShadow: '0 0 32px rgba(147,51,234,0.08)' }}
              >
                <div
                  className="absolute left-0 right-0 top-0 h-[2px] rounded-t-xl"
                  style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                  aria-hidden="true"
                />
                <StarRow count={review.rating} />
                <blockquote className="mt-4 flex-1 text-sm md:text-base text-white/70 leading-relaxed">
                  &ldquo;{review.excerpt}&rdquo;
                </blockquote>
                <p className="mt-5 text-[0.65rem] tracking-[0.15em] uppercase text-[#D4AF37]/70">
                  {review.name}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 md:mt-16 text-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[0.7rem] px-8 py-4"
            >
              Read All Google Reviews
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

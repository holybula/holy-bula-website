import Link from 'next/link'
import AnimatedReveal from '@/components/shared/AnimatedReveal'

const REVIEWS = [
  {
    name:   'Alex M.',
    review: 'The atmosphere is calm, grounding, and genuinely comforting. The perfect place to unwind, reset, or just enjoy good vibes with great people.',
  },
  {
    name:   'Brianna S.',
    review: 'The drinks are great, the vibe is cozy, and it\'s the perfect spot to get work done or hang out with friends.',
  },
  {
    name:   'Chris R.',
    review: 'Ascension is more than just a kava spot. Great service, great people, and a community feel that makes you want to come back.',
  },
] as const

function StarRow() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D4AF37" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative bg-[#080808] border-t border-white/[0.05] overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full max-w-[900px] h-[70%]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-hb section-padding relative z-10">
        <AnimatedReveal>
          <div className="mb-10 md:mb-12">
            <p className="eyebrow">Reviews</p>
            <div className="gold-line-left" />
            <h2
              id="reviews-heading"
              className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-white leading-tight"
            >
              The Circle Speaks For Itself.
            </h2>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-10">
          {REVIEWS.map((review, i) => (
            <AnimatedReveal key={review.name} delay={80 + i * 60}>
              <article
                className="relative flex flex-col h-full rounded-xl border border-[rgba(212,175,55,0.2)] bg-[#0d0d0d] p-6 md:p-8 transition-colors duration-200 hover:border-[rgba(212,175,55,0.35)]"
                style={{ boxShadow: '0 0 40px rgba(147,51,234,0.1)' }}
              >
                <div
                  className="absolute left-0 right-0 top-0 h-[2px] rounded-t-xl"
                  style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                  aria-hidden="true"
                />
                <StarRow />
                <blockquote className="mt-5 flex-1 text-base md:text-lg text-white/80 leading-relaxed font-medium">
                  &ldquo;{review.review}&rdquo;
                </blockquote>
                <p className="mt-6 text-[0.65rem] tracking-[0.15em] uppercase text-hb-gold/80">
                  {review.name}
                </p>
              </article>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={280}>
          <Link href="/reviews" className="btn-outline-gold">
            Read More Reviews
          </Link>
        </AnimatedReveal>
      </div>
    </section>
  )
}

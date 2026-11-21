import Link from 'next/link'
import { FORT_LAUDERDALE } from '@/lib/locations'

export default function ReviewsSection() {
  return (
    <section id="reviews" className="border-t border-[#d6ac76]/20 bg-[#100e10]" aria-labelledby="reviews-heading">
      <div className="container-hb grid items-center gap-7 py-12 md:grid-cols-[1fr_auto] md:py-16">
        <div>
          <h2 id="reviews-heading" className="text-[clamp(2rem,4vw,3.8rem)] font-normal tracking-tight">
            Guest reviews
          </h2>
          <p className="mt-4 max-w-lg text-base text-[#e1d6ca]">
            See what guests have shared about their visits to Ascension Fort Lauderdale.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/reviews" className="btn-gold">
            Read Reviews
          </Link>
          <a href={FORT_LAUDERDALE.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
            View on Google
          </a>
        </div>
      </div>
    </section>
  )
}

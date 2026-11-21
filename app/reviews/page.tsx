import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FORT_LAUDERDALE } from '@/lib/locations'

export const metadata: Metadata = {
  title: 'Guest Reviews',
  description: 'Read guest reviews of Ascension Kava Bar & Lounge at 825 N Federal Hwy in Fort Lauderdale, FL.',
  alternates: { canonical: 'https://www.ascensionlounge.com/reviews' },
}

export default function ReviewsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section
        className="border-b border-hb-gold/20 bg-hb-black-2 pb-12 pt-28 md:pb-16 md:pt-36"
        aria-labelledby="reviews-heading"
      >
        <div className="container-hb grid items-center gap-8 md:grid-cols-2 md:gap-14">
          <div>
            <p className="eyebrow">Fort Lauderdale</p>
            <h1 id="reviews-heading" className="text-display-lg font-normal">Guest reviews</h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-hb-off-white/80 md:text-lg">
              Read what guests say about Ascension Kava Bar &amp; Lounge and share your own experience on Google Maps.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={FORT_LAUDERDALE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Read Google reviews <span aria-hidden="true" className="link-arrow" />
              </a>
              <Link href="/locations" className="btn-outline">Plan your visit</Link>
            </div>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden border border-hb-gold/25 bg-hb-black">
            <Image
              src="/images/interior/pic_6.PNG"
              alt="Guests gathered in the lounge under purple lights"
              fill
              sizes="(min-width: 1280px) 520px, (min-width: 768px) 45vw, 90vw"
              className="object-cover object-[center_65%]"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  )
}

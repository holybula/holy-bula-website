import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AboutContent from '@/components/about/AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description: 'Get to know Ascension Kava Bar & Lounge, an alcohol-free lounge in Fort Lauderdale for specialty drinks, a daytime work session, and a night out.',
  alternates: { canonical: 'https://www.ascensionlounge.com/about' },
}

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section
        className="border-b border-hb-gold/20 bg-hb-black-2 pb-12 pt-28 md:pb-16 md:pt-36"
        aria-labelledby="about-page-heading"
      >
        <div className="container-hb grid items-center gap-9 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
          <div>
            <p className="eyebrow">About Ascension</p>
            <h1 id="about-page-heading" className="font-normal leading-[1.02] text-display-lg">
              Business by day. <span className="block text-hb-gold">Social by night.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-hb-off-white/80 md:text-lg">
              Ascension is where entrepreneurs, students, professionals, creators, and friends come together to work, connect, compete, and unwind.
            </p>
            <Link href="/locations" className="btn-gold mt-8">Plan your visit</Link>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden border border-hb-gold/25 bg-hb-black md:aspect-square lg:aspect-[6/5]">
            <Image
              src="/images/interior/holybula-art-1.PNG"
              alt="A warmly lit painting above the lounge seating at Ascension"
              fill
              priority
              sizes="(min-width: 1280px) 490px, (min-width: 768px) 42vw, 90vw"
              className="object-cover object-[center_61%]"
            />
          </div>
        </div>
      </section>

      <AboutContent />
    </main>
  )
}

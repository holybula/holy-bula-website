import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import AnimatedReveal from '@/components/shared/AnimatedReveal'

const PHOTOS = [
  { src: '/images/interior/holybula-art-1.PNG', alt: 'Amber-lit artwork above lounge seating', position: 'object-center', unoptimized: false },
  { src: '/images/lounge/pool-night.jpg', alt: 'A player lining up a shot at a Fort Lauderdale pool night', position: 'object-[50%_65%]', unoptimized: true },
  { src: '/images/lounge/tea-pour.jpg', alt: 'Tea being poured at the Ascension bar', position: 'object-[50%_54%]', unoptimized: true },
  { src: '/images/interior/holybula-art-3.PNG', alt: 'A framed portrait on the wall under violet lighting', position: 'object-center', unoptimized: false },
] as const

export default function TheSpace() {
  return (
    <section id="the-space" className="border-y border-white/10 bg-hb-black-2 section-padding" aria-labelledby="space-heading">
      <div className="container-hb">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-11">
          <div>
            <p className="eyebrow">Inside Ascension</p>
            <h2 id="space-heading" className="text-display-lg">The Lounge.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="btn-outline">About Ascension</Link>
            <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
              More on Instagram <span aria-hidden="true" className="link-arrow" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {PHOTOS.map(({ src, alt, position, unoptimized }, index) => (
            <AnimatedReveal key={src} delay={index * 65} className="group relative aspect-[3/4] overflow-hidden border border-white/10">
              <Image
                src={src}
                alt={alt}
                fill
                unoptimized={unoptimized}
                className={'object-cover transition-transform duration-700 motion-safe:group-hover:scale-105 ' + position}
                sizes="(max-width: 1023px) 48vw, 24vw"
              />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import AnimatedReveal from '@/components/shared/AnimatedReveal'

const PHOTOS = [
  {
    src: '/images/lounge/pool-night.jpg',
    alt: 'A pool player lining up a shot at Ascension',
    frame: 'col-span-2 aspect-[5/4] sm:col-span-1 sm:aspect-[4/5]',
    position: 'object-[50%_62%]',
    sizes: '(min-width: 1280px) 450px, (min-width: 640px) 36vw, 90vw',
    unoptimized: true,
  },
  {
    src: '/images/lounge/tea-pour.jpg',
    alt: 'Tea being poured into a cup at the Ascension bar',
    frame: 'aspect-[4/5]',
    position: 'object-[58%_53%]',
    sizes: '(min-width: 1280px) 375px, (min-width: 640px) 30vw, 45vw',
    unoptimized: true,
  },
  {
    src: '/images/interior/holybula-art-1.PNG',
    alt: 'Amber-lit artwork above a row of lounge chairs',
    frame: 'aspect-[4/5]',
    position: 'object-[50%_68%]',
    sizes: '(min-width: 1280px) 375px, (min-width: 640px) 30vw, 45vw',
    unoptimized: false,
  },
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
        <div className="lounge-photo-grid grid grid-cols-2 items-end gap-3 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-4 lg:gap-5">
          {PHOTOS.map(({ src, alt, frame, position, sizes, unoptimized }, index) => (
            <AnimatedReveal key={src} delay={index * 65} className={'group lounge-photo relative overflow-hidden ' + frame}>
              <Image
                src={src}
                alt={alt}
                fill
                unoptimized={unoptimized}
                className={'object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025] ' + position}
                sizes={sizes}
              />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

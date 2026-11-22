import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'

const PHOTOS = [
  {
    src: '/images/lounge/pool-night.jpg',
    alt: 'A pool player lining up a shot at Ascension',
    width: 360,
    height: 640,
    position: 'object-[50%_62%]',
    sizes: '(min-width: 1280px) 450px, (min-width: 801px) 36vw, calc(100vw - 40px)',
    unoptimized: true,
  },
  {
    src: '/images/lounge/tea-pour.jpg',
    alt: 'Tea being poured into a cup at the Ascension bar',
    width: 360,
    height: 640,
    position: 'object-[58%_53%]',
    sizes: '(min-width: 1280px) 375px, (min-width: 801px) 30vw, calc(100vw - 40px)',
    unoptimized: true,
  },
  {
    src: '/images/interior/holybula-art-1.PNG',
    alt: 'Amber-lit artwork above a row of lounge chairs',
    width: 618,
    height: 936,
    position: 'object-[50%_68%]',
    sizes: '(min-width: 1280px) 375px, (min-width: 801px) 30vw, calc(100vw - 40px)',
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
        <div className="lounge-photo-grid">
          {PHOTOS.map(({ src, alt, width, height, position, sizes, unoptimized }) => (
            <figure key={src} className="group lounge-photo">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                unoptimized={unoptimized}
                className={'object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025] ' + position}
                sizes={sizes}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

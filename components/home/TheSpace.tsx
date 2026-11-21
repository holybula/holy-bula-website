import Image from 'next/image'
import Link from 'next/link'
import AnimatedReveal from '@/components/shared/AnimatedReveal'

const PHOTOS = [
  { file: 'holybula-art-1.PNG', alt: 'Amber-lit artwork above lounge seating' },
  { file: 'holybula-art-4.PNG', alt: 'The pool table under a black-and-white portrait' },
  { file: 'holybula-art-2.PNG', alt: 'Lounge seating beneath a framed black-and-white scene' },
  { file: 'holybula-art-3.PNG', alt: 'A framed portrait on the wall under violet lighting' },
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
          <Link href="/about" className="btn-outline">About Ascension <span aria-hidden="true" className="link-arrow" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {PHOTOS.map(({ file, alt }, index) => (
            <AnimatedReveal key={file} delay={index * 65} className="group relative aspect-[3/4] overflow-hidden border border-white/10">
              <Image
                src={'/images/interior/' + file}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                sizes="(max-width: 1023px) 48vw, 24vw"
              />
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

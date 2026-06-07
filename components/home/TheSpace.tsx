import Image from 'next/image'
import { COPY } from '@/lib/constants'
import AnimatedReveal from '@/components/shared/AnimatedReveal'

// Photos mapped to actual project assets
const PHOTOS = [
  {
    src: '/images/interior/holybula-art-1.PNG',
    alt:   'Holy Bula — packed social night with purple lighting and full bar',
    grid:  'col-span-1 md:col-span-2 md:row-span-2',
  },
  {
    src:   '/images/interior/holybula-art-4.PNG',
    alt:   'Holy Bula — vintage portrait art with purple ambient lighting',
    grid:  'col-span-1',
  },
  {
    src: '/images/interior/holybula-art-3.PNG',
    alt:   'Holy Bula — pool table in dark moody interior',
    grid:  'col-span-1',
  },
  {
    src: '/images/interior/holybula-art-2.PNG',
    alt:   'Holy Bula — intimate social seating and art wall',
    grid:  'col-span-1 md:col-span-2',
  },
] as const

export default function TheSpace() {
  return (
    <section
      id="the-space"
      className="bg-[#0a0a0a] border-t border-white/[0.05]"
      aria-label="The Space"
    >
      {/* Eyebrow only — no headline copy */}
      <div className="container-hb pt-section pb-6">
        <AnimatedReveal>
          <p className="eyebrow">{COPY.spaceEyebrow}</p>
        </AnimatedReveal>
      </div>

      {/* Photo mosaic — photos are the content */}
      <div className="container-hb pb-section">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 auto-rows-[260px] md:auto-rows-[240px]">
          {PHOTOS.map((photo, i) => (
            <AnimatedReveal key={photo.src} delay={i * 60} className={photo.grid}>
              <div className="relative w-full h-full overflow-hidden bg-[#0d0d0d] group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle dark vignette */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)' }}
                  aria-hidden="true"
                />
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

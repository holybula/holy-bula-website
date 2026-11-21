import Image from 'next/image'
import Link from 'next/link'
import { FORT_LAUDERDALE } from '@/lib/locations'

export default function HeroSection() {
  return (
    <section className="lounge-hero" aria-labelledby="hero-heading">
      <div className="container-hb lounge-hero-grid">
        <div className="lounge-hero-content">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-hb-gold" aria-hidden="true" />
            Fort Lauderdale, Florida
          </p>
          <h1 id="hero-heading" className="lounge-hero-heading">
            Elevate{' '}<br />your <em>circle.</em>
          </h1>
          <p className="lounge-hero-description">
            Fort Lauderdale’s alcohol-free lounge for kava, kratom teas, mocktails,
            and a night out on Federal Highway.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link href="/events" className="btn-gold">
              Explore Events <span aria-hidden="true" className="link-arrow" />
            </Link>
            <Link href="/menu" className="btn-outline">View Menu</Link>
          </div>
        </div>
        <figure className="lounge-hero-media">
          <div className="lounge-hero-image">
            <Image
              src="/images/interior/pic_6.PNG"
              alt="Guests gathered at the Ascension bar under violet lights"
              fill
              priority
              sizes="(max-width: 800px) 100vw, (max-width: 1280px) 53vw, 650px"
              className="object-cover"
            />
          </div>
          <span className="lounge-hero-corner lounge-hero-corner-top" aria-hidden="true" />
          <span className="lounge-hero-corner lounge-hero-corner-bottom" aria-hidden="true" />
        </figure>
        <div className="lounge-hero-address">
          <Link href="/locations">
            {FORT_LAUDERDALE.address.street} <span className="hidden sm:inline">· Fort Lauderdale, FL</span>
             <span aria-hidden="true" className="link-arrow" />
          </Link>
          <span className="text-white/60">Business by day. Social by night.</span>
        </div>
      </div>
    </section>
  )
}

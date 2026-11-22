import Image from 'next/image'
import Link from 'next/link'
import { FORT_LAUDERDALE } from '@/lib/locations'

export default function HeroSection() {
  return (
    <section className="lounge-hero" aria-labelledby="hero-heading">
      <div className="lounge-hero-stage">
        <div className="lounge-hero-media">
          <Image
            src="/images/interior/pic_6.PNG"
            alt="Guests gathered at the Ascension bar under violet lights"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="lounge-hero-inner">
          <div className="lounge-hero-content">
            <p className="eyebrow lounge-hero-kicker">
              <span className="h-px w-6 bg-hb-gold" aria-hidden="true" />
              South Florida · Alcohol-free lounge
            </p>
            <h1 id="hero-heading" className="lounge-hero-heading">
              Elevate{' '}<br />your <em>circle.</em>
            </h1>
            <p className="lounge-hero-description">
              The right company brings out the best in us. Come to connect, make something happen, or just unwind with friends.
            </p>
            <div className="lounge-hero-actions">
              <Link href="/events" className="btn-gold">See what&apos;s on <span aria-hidden="true" className="link-arrow" /></Link>
              <Link href="/menu" className="btn-outline">View menu</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-hb lounge-hero-address">
        <span>Business by day. Social by night.</span>
        <Link href="/locations">
          {FORT_LAUDERDALE.address.street} · Fort Lauderdale <span aria-hidden="true" className="link-arrow" />
        </Link>
      </div>
    </section>
  )
}

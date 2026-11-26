import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { FORT_LAUDERDALE } from '@/lib/locations'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Ascension Lounge in Fort Lauderdale, FL for questions, events, partnerships and private gatherings.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const { address, phone, textHref } = FORT_LAUDERDALE
  const emailHref = `mailto:${BRAND.email}`

  return (
    <main id="main-content" tabIndex={-1} className="venue-inner venue-inner--contact">
      <section className="venue-masthead container-hb grid items-stretch gap-8 pb-14 pt-32 sm:gap-12 md:grid-cols-[1.15fr_0.85fr] md:pb-20 md:pt-40" aria-labelledby="contact-heading">
        <div>
          <p className="eyebrow">Fort Lauderdale</p>
          <h1 id="contact-heading" className="text-[clamp(2.8rem,7vw,6.5rem)] font-normal leading-[0.96] tracking-tight">
            Contact <em className="font-normal text-[#e6bb85]">Ascension.</em>
          </h1>
          <p className="mt-5 max-w-md text-base text-[#e1d6ca] sm:text-lg">
            Get in touch with the lounge about your visit, events or partnerships.
          </p>
          <dl className="mt-8 space-y-4 border-y border-[#d6ac76]/20 py-6 text-[#e1d6ca] sm:mt-10">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#d6ac76]">Address</dt>
              <dd className="mt-1">
                <address className="text-sm not-italic sm:text-base">{address.full}</address>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#d6ac76]">Text us</dt>
              <dd className="mt-1">
                <a className="inline-flex min-h-11 items-center text-sm underline underline-offset-4 hover:text-[#e6bb85] sm:text-base" href={textHref} aria-label={`Text Ascension Lounge at ${phone}`}>
                  {phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#d6ac76]">Email</dt>
              <dd className="mt-1">
                <a className="inline-flex min-h-11 items-center break-all text-sm underline underline-offset-4 hover:text-[#e6bb85] sm:text-base" href={emailHref}>
                  {BRAND.email}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/ask" className="btn-gold">Ask the Lounge</Link>
            <Link href="/locations" className="btn-outline-gold">Hours &amp; Directions</Link>
          </div>
        </div>
        <div className="venue-masthead-photo relative min-h-64 overflow-hidden border border-[#d6ac76]/20">
          <Image
            src="/images/interior/holybula-art-1.PNG"
            alt="Framed artwork above the lounge seating at Ascension"
            fill
            priority
            sizes="(max-width: 767px) 90vw, 40vw"
            className="object-cover object-[50%_56%]"
          />
        </div>
      </section>

      <section className="venue-closing-panel border-y border-[#d6ac76]/20 bg-[#1b1519]" aria-labelledby="gathering-heading">
        <div className="container-hb grid items-end gap-7 py-12 sm:grid-cols-[1fr_auto] md:py-16">
          <div>
            <h2 id="gathering-heading" className="text-[clamp(2rem,4vw,3.8rem)] font-normal tracking-tight">
              Events &amp; private gatherings
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#e1d6ca]">
              Planning a meetup, tournament, brand night or private gathering? Email the Ascension team to discuss your event.
            </p>
          </div>
          <a href={emailHref} className="btn-gold justify-self-start">
            Email Us
          </a>
        </div>
      </section>
    </main>
  )
}

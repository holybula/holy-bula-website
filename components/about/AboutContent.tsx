import Link from 'next/link'
import { FORT_LAUDERDALE } from '@/lib/locations'

export default function AboutContent() {
  return (
    <>
      <section
        id="about-us"
        aria-labelledby="about-us-heading"
        className="container-hb section-padding grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-20"
      >
        <div>
          <h2 id="about-us-heading" className="text-display-md font-normal">From the beginning</h2>
        </div>
        <div className="grid max-w-3xl gap-5 text-base leading-relaxed text-hb-off-white/80 md:text-lg">
          <p id="mission">
            Ascension Kava Bar &amp; Lounge started in 2023 with a simple goal: to give people a place to connect over specialty drinks, any time of day.
          </p>
          <p id="why-visit">
            Settle in for a work session, grab a drink to go, or meet up with friends after dark.
          </p>
          <p id="who-you-meet">
            The lounge brings together students, entrepreneurs, athletes, and DJs for everything from quiet afternoons to late-night events.
          </p>
          <Link
            href="/events"
            className="w-fit text-hb-gold underline underline-offset-4 hover:text-hb-off-white"
          >
            Explore weekly events <span aria-hidden="true" className="link-arrow" />
          </Link>
        </div>
      </section>

      <section className="border-y border-hb-gold/20 bg-hb-black-2" aria-labelledby="botanicals-heading">
        <div className="container-hb section-padding">
          <h2 id="botanicals-heading" className="text-display-md font-normal">Kava and kratom</h2>
          <dl className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
            <div id="kava" className="border-t border-hb-gold/40 pt-5">
              <dt className="text-lg font-semibold text-hb-gold">Kava</dt>
              <dd className="mt-2 max-w-md text-base leading-relaxed text-hb-off-white/80">
                The traditional South Pacific drink is made from the root of the kava plant. At Ascension, we serve it by the shell.
              </dd>
            </div>
            <div id="kratom" className="border-t border-hb-gold/40 pt-5">
              <dt className="text-lg font-semibold text-hb-gold">Kratom</dt>
              <dd className="mt-2 max-w-md text-base leading-relaxed text-hb-off-white/80">
                Kratom comes from the leaves of a Southeast Asian tree. At the bar, you&apos;ll find kratom teas alongside mocktails and other alcohol-free drinks.
              </dd>
            </div>
          </dl>
          <Link href="/menu" className="btn-outline mt-8">View the menu</Link>
        </div>
      </section>

      <section id="locations" className="container-hb section-padding-sm" aria-labelledby="about-location-heading">
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <div>
            <p className="eyebrow">Visit the lounge</p>
            <h2 id="about-location-heading" className="text-display-md font-normal">Fort Lauderdale</h2>
            <p className="mt-3 text-base text-hb-off-white/80">{FORT_LAUDERDALE.address.full}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/locations" className="btn-gold">See opening hours</Link>
            <a href={FORT_LAUDERDALE.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Get directions <span aria-hidden="true" className="link-arrow" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

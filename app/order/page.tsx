import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { FORT_LAUDERDALE } from '@/lib/locations'
import { DELIVERY_DISCLAIMER, DELIVERY_LINKS, ORDER_PATH } from '@/lib/ordering'

export const metadata: Metadata = {
  title: 'Order Delivery',
  description: 'Order delivery from Ascension Kava Bar & Lounge in Fort Lauderdale through DoorDash or Uber Eats.',
  alternates: { canonical: ORDER_PATH },
}

export default function OrderPage() {
  return (
    <main id="main-content" tabIndex={-1} className="venue-inner venue-inner--order">
      <section
        aria-labelledby="order-heading"
        className="venue-masthead border-b border-hb-gold/20 bg-hb-black-2 bg-[radial-gradient(ellipse_at_top_right,#291e2b,transparent_65%)] pb-14 pt-28 md:pb-20 md:pt-36 lg:pb-28"
      >
        <div className="container-hb grid items-start gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:items-center md:gap-12 lg:gap-20">
          <div>
            <p className="eyebrow">{FORT_LAUDERDALE.name}</p>
            <h1 id="order-heading" className="text-display-xl font-normal">Order delivery</h1>
            <p className="mt-5 text-base leading-relaxed text-hb-off-white/80 md:text-lg">
              {BRAND.nameFull}<br />
              {FORT_LAUDERDALE.address.street}
            </p>
          </div>

          <div>
            <ul className="grid gap-3" aria-label="Delivery providers">
              {Object.values(DELIVERY_LINKS).map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Order on ${name} (opens in a new tab)`}
                    className="flex min-h-[5.25rem] items-center justify-between gap-4 border border-hb-gold/35 bg-hb-black px-5 py-4 text-hb-off-white transition-colors hover:border-hb-gold hover:bg-hb-black-3 sm:px-7"
                  >
                    <span className="font-display text-3xl leading-tight sm:text-4xl">{name}</span>
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-hb-gold">
                      Order <span aria-hidden="true" className="link-arrow" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-hb-off-white/75">{DELIVERY_DISCLAIMER}</p>
            <Link
              href="/menu"
              className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-hb-gold underline underline-offset-4 hover:text-hb-off-white"
            >
              View the in-lounge menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

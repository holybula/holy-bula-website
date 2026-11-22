import Image from 'next/image'
import Link from 'next/link'
import { MENU_CATEGORIES } from '@/lib/menu-data'
import { ORDER_PATH } from '@/lib/ordering'

export default function WhatWePour() {
  return (
    <section id="menu" className="border-y border-white/10 bg-hb-black-2 section-padding" aria-labelledby="menu-heading">
      <div className="container-hb">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5 md:mb-11">
          <div>
            <p className="eyebrow">Fort Lauderdale</p>
            <h2 id="menu-heading" className="text-display-lg">Drinks &amp; bites.</h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/menu" className="btn-gold">View Full Menu</Link>
            <Link href={ORDER_PATH} className="btn-outline">Order Delivery</Link>
          </div>
        </div>

        <div className="pour-layout overflow-hidden border border-white/10 bg-hb-black">
          <ul className="grid grid-cols-2 self-center px-4 py-2 sm:px-6 sm:py-4 lg:px-9" aria-label="Menu categories">
            {MENU_CATEGORIES.map(({ id, name }) => (
              <li key={id} className="border-b border-white/10 [&:nth-last-child(-n+2)]:border-b-0">
                <Link href={'/menu#' + id} className="menu-preview-link">
                  <span>{name}</span>
                  <span aria-hidden="true" className="link-arrow" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative aspect-[3/1.65] min-w-0 overflow-hidden border-t border-white/10 md:aspect-auto md:border-l md:border-t-0">
            <Image
              src="/images/interior/holybula-art-1.PNG"
              alt="Lounge seating beneath illuminated artwork at Ascension"
              fill
              sizes="(max-width: 767px) 90vw, 35vw"
              className="object-cover object-[50%_56%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

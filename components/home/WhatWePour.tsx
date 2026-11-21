'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { POUR_CATEGORIES } from '@/lib/menu'

interface WhatWePourProps {
  pageMode?: boolean
}

export default function WhatWePour({ pageMode = false }: WhatWePourProps) {
  const [active, setActive] = useState(POUR_CATEGORIES[0].id)
  const current = POUR_CATEGORIES.find(category => category.id === active) ?? POUR_CATEGORIES[0]

  return (
    <section id={pageMode ? undefined : 'menu'} className={pageMode ? 'bg-hb-black' : 'border-t border-white/10 bg-hb-black-2'}
      aria-label={pageMode ? 'Drink categories' : undefined} aria-labelledby={pageMode ? undefined : 'menu-heading'}>
      <div className={pageMode ? 'container-hb pb-12 pt-8' : 'container-hb section-padding'}>
        {!pageMode && (
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-11">
            <div>
              <p className="eyebrow">What we pour</p>
              <h2 id="menu-heading" className="text-display-lg">Drinks at Ascension.</h2>
            </div>
            <Link href="/menu" className="btn-outline">View Full Menu <span aria-hidden="true" className="link-arrow" /></Link>
          </div>
        )}
        <div className="pour-layout border border-white/10 bg-hb-black">
          <div className="min-w-0 p-6 sm:p-9 lg:p-12">
            <div role="group" aria-label="Drink categories" className="mb-7 flex flex-wrap gap-2 sm:mb-10">
              {POUR_CATEGORIES.map(category => (
                <button key={category.id} type="button" onClick={() => setActive(category.id)}
                  aria-pressed={active === category.id} className="category-chip">
                  {category.name}
                </button>
              ))}
            </div>
            <div aria-live="polite">
              <h3 className="mb-3 text-display-md">{current.name}</h3>
              <p className="mb-3 max-w-lg text-white/80">{current.description}</p>
              <p className="text-sm text-white/65">{current.featured}</p>
              <p className="mt-5 text-sm font-semibold text-hb-gold">From ${current.startingPrice.toFixed(2)}</p>
            </div>
          </div>
          <div className="relative min-h-64 overflow-hidden bg-hb-black-3 lg:min-h-full">
            <Image src="/images/interior/holybula-signature-drink.PNG"
              alt="Kratom tea in Ascension’s original Holy Bula cup" fill
              className="object-contain p-5" sizes="(max-width: 1023px) 90vw, 340px" />
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { POUR_CATEGORIES } from '@/lib/menu'
import { COPY } from '@/lib/constants'
import ComingSoonOrderButton from '@/components/shared/ComingSoonOrderButton'
import AnimatedReveal from '@/components/shared/AnimatedReveal'

interface WhatWePourProps {
  /** Hides the section header and CTA — used on /menu */
  pageMode?: boolean
}

export default function WhatWePour({ pageMode = false }: WhatWePourProps) {
  const [active, setActive] = useState(POUR_CATEGORIES[0].id)
  const current = POUR_CATEGORIES.find(c => c.id === active) ?? POUR_CATEGORIES[0]

  return (
    <section
      id={pageMode ? undefined : 'menu'}
      className={pageMode ? 'bg-[#080808]' : 'bg-[#080808] border-t border-white/[0.05]'}
      aria-labelledby={pageMode ? undefined : 'menu-heading'}
    >
      <div className={`container-hb ${pageMode ? 'pt-8 pb-10 md:pb-12' : 'section-padding'}`}>

        {!pageMode && (
          <AnimatedReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="eyebrow">{COPY.menuEyebrow}</p>
                <div className="gold-line-left" />
                <h2
                  id="menu-heading"
                  className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white leading-tight"
                >
                  {COPY.menuTitle}
                </h2>
              </div>
              <Link href="/menu" className="btn-outline-gold whitespace-nowrap text-[0.625rem]">
                Full Menu →
              </Link>
            </div>
          </AnimatedReveal>
        )}

        <AnimatedReveal delay={pageMode ? 0 : 80}>
          <div className="flex gap-2 flex-wrap mb-8">
            {POUR_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`
                  px-4 py-2.5 text-[0.6rem] tracking-[0.18em] uppercase font-medium
                  border transition-all duration-200
                  ${active === cat.id
                    ? 'border-[rgba(212,175,55,0.6)] text-[#D4AF37] bg-[rgba(212,175,55,0.06)]'
                    : 'border-white/[0.08] text-white/40 hover:text-white/65 hover:border-white/20'
                  }
                `}
                aria-pressed={active === cat.id}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </AnimatedReveal>

        {/* Active category panel */}
        <AnimatedReveal delay={pageMode ? 80 : 120}>
          <div
            key={current.id}
            className="flex flex-col md:flex-row md:items-center justify-between gap-8 border border-white/[0.07] bg-[#0d0d0d] p-7 md:p-10"
          >
            <div className="flex-1">
              {/* Category top accent */}
              <div
                className="w-8 h-[2px] mb-5"
                style={{ backgroundColor: current.color }}
                aria-hidden="true"
              />
              <h3
                className="text-[clamp(1.4rem,3vw,2rem)] font-bold text-white mb-3 leading-tight"
              >
                {current.name}
              </h3>
              <p className="text-base text-white/72 leading-relaxed mb-4 max-w-md">
                {current.description}
              </p>
              <p className="text-xs text-white/35 mb-6 leading-relaxed">
                {current.featured}
              </p>
              <div className="flex items-center gap-5">
                <span className="text-base font-medium" style={{ color: current.color }}>
                  From ${current.startingPrice.toFixed(2)}
                </span>
                <ComingSoonOrderButton compact />
              </div>
            </div>

            {/* Product image — kratom cup for kratom, else color block */}
            <div className="flex-shrink-0">
              {current.id === 'kratom-tea' ? (
                <div className="relative w-40 h-40 md:w-52 md:h-52">
                  <Image
                    src="/images/drinks/kratom_cup.PNG"
                    alt="Holy Bula Kratom Tea"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 768px) 160px, 208px"
                  />
                </div>
              ) : (
                <div
                  className="w-40 h-40 md:w-52 md:h-52 flex items-center justify-center border border-white/[0.05]"
                  style={{ background: `radial-gradient(ellipse at center, ${current.color}18 0%, transparent 70%)` }}
                >
                  <span
                    className="text-[2.5rem] font-black opacity-20"
                    style={{
                      color: current.color,
                    }}
                    aria-hidden="true"
                  >
                    {current.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </AnimatedReveal>

        {/* All 6 categories — compact grid below */}
        <AnimatedReveal delay={pageMode ? 150 : 200}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-3">
            {POUR_CATEGORIES.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`
                  text-left p-4 border transition-all duration-200
                  ${active === cat.id
                    ? 'border-[rgba(212,175,55,0.35)] bg-[rgba(212,175,55,0.04)]'
                    : 'border-white/[0.06] bg-[#0d0d0d] hover:bg-[#111] hover:border-white/[0.12]'
                  }
                `}
              >
                <div
                  className="w-4 h-[2px] mb-3"
                  style={{ backgroundColor: cat.color, opacity: active === cat.id ? 1 : 0.4 }}
                  aria-hidden="true"
                />
                <p className="text-xs font-medium text-white/70 leading-tight mb-1">{cat.name}</p>
                <p className="text-[0.6rem] text-white/30">From ${cat.startingPrice.toFixed(2)}</p>
              </button>
            ))}
          </div>
        </AnimatedReveal>

      </div>
    </section>
  )
}

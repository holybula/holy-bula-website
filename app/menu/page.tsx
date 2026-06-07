import type { Metadata } from 'next'
import MenuSection from '@/components/menu/MenuSection'
import { GOLD_GRADIENT_TEXT } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Menu',
  description: 'Holy Bula menu — premium kava, kratom teas, coffees, mocktails, and functional drinks. Fort Lauderdale & Hollywood, FL.',
  alternates:  { canonical: 'https://holybula.com/menu' },
}

export default function MenuPage() {
  return (
    <main id="main-content" className="bg-[#080808] min-h-screen">
      <section
        className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden border-b border-white/[0.05]"
        aria-labelledby="menu-page-heading"
      >
        <div
          className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(147,51,234,0.14) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom left, rgba(212,175,55,0.06) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="container-hb relative z-10">
          <p className="eyebrow">What We Pour</p>
          <div className="gold-line-left" />
          <h1
            id="menu-page-heading"
            className="text-[clamp(2rem,6vw,3.75rem)] font-extrabold text-white leading-[1.05] tracking-tight max-w-2xl"
          >
            What We{' '}
            <span style={GOLD_GRADIENT_TEXT}>Pour</span>
          </h1>
          <p className="text-white/72 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
            Premium kava, kratom, teas, coffees, mocktails, and functional drinks.
          </p>
        </div>
      </section>

      <MenuSection />
    </main>
  )
}

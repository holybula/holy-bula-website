import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import InteractiveMenu from '@/components/menu/InteractiveMenu'
import { MENU_IMAGE } from '@/lib/menu'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Browse the Ascension Fort Lauderdale menu for kava, kratom teas, coffee, matcha, mocktails, and more.',
  alternates: { canonical: '/menu' },
}

export default function MenuPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-hb-black">
      <section className="relative isolate flex min-h-[24rem] items-end overflow-hidden border-b border-white/10 pb-12 pt-32 md:min-h-[30rem] md:pb-16 md:pt-36">
        <div className="absolute inset-0 md:left-[45%]">
          <Image
            src="/images/interior/holybula-art-1.PNG"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover object-[center_59%]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,14,16,0.97),rgba(16,14,16,0.76)_49%,rgba(16,14,16,0.3))] md:bg-[linear-gradient(90deg,#100e10_43%,rgba(16,14,16,0.16)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#100e10,transparent_50%)]" aria-hidden="true" />

        <div className="container-hb relative">
          <p className="eyebrow">Fort Lauderdale</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-normal leading-[0.9] tracking-tight text-[#f5ecdc]">
            The drink menu
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#d8ccc0] md:text-lg">
            Kava, kratom teas, espresso, matcha, and crafted alcohol-free cocktails.
          </p>
          <Link href="/events#happy-hour" className="mt-7 inline-flex min-h-11 items-center border-b border-hb-gold/60 pb-1 text-sm font-medium text-hb-gold transition-colors hover:border-hb-gold hover:text-[#f5ecdc]">
            Happy hour specials
          </Link>
        </div>
      </section>

      <InteractiveMenu />

      <section className="border-t border-white/10 bg-hb-black-2 py-9 sm:py-12">
        <div className="container-hb flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <h2 className="font-display text-3xl font-normal leading-tight text-[#f5ecdc]">Printable menu</h2>
          <a href={MENU_IMAGE} download className="btn-outline-gold">
            Download menu
          </a>
        </div>
      </section>
    </main>
  )
}

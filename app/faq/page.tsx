import type { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from '@/components/faq/FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Find answers about kava, kratom, the menu, and visiting Ascension Kava Bar & Lounge in Fort Lauderdale.',
  alternates: { canonical: 'https://www.ascensionlounge.com/faq' },
}

export default function FaqPage() {
  return (
    <main id="main-content" tabIndex={-1} className="venue-inner venue-inner--faq">
      <section
        className="venue-masthead border-b border-hb-gold/20 bg-hb-black-2 pb-12 pt-28 md:pb-16 md:pt-36"
        aria-labelledby="faq-page-heading"
      >
        <div className="container-hb">
          <h1 id="faq-page-heading" className="text-display-lg font-normal">Frequently asked questions</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-hb-off-white/80 md:text-lg">
            Get to know our drinks and what to expect on your first visit to Ascension.
          </p>
        </div>
      </section>

      <div className="container-hb section-padding grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-16">
        <FaqAccordion />

        <aside className="border border-hb-gold/25 bg-hb-black-2 p-6 sm:p-8" aria-labelledby="faq-contact-heading">
          <h2 id="faq-contact-heading" className="text-display-sm font-normal">Still have a question?</h2>
          <p className="mt-3 text-base leading-relaxed text-hb-off-white/80">
            Get in touch or come see us in Fort Lauderdale.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-gold">Contact us</Link>
            <Link href="/locations" className="btn-outline">Plan your visit</Link>
            <div className="basis-full">
              <Link href="/about" className="text-sm text-hb-gold underline underline-offset-4 hover:text-hb-off-white">
                About Ascension
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

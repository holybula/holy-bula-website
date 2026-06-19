import type { Metadata } from 'next'
import Link from 'next/link'
import FaqAccordion from '@/components/faq/FaqAccordion'
import { GOLD_GRADIENT_TEXT } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'FAQ',
  description: 'Frequently asked questions about Ascension — kava, kratom, alcohol-free social club, events, and locations in Fort Lauderdale and Hollywood, FL.',
  alternates:  { canonical: 'https://ascensionlounge.com/faq' },
}

export default function FaqPage() {
  return (
    <main id="main-content" className="bg-[#080808] min-h-screen">
      <section
        className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden border-b border-white/[0.05]"
        aria-labelledby="faq-page-heading"
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
          <p className="eyebrow">FAQs</p>
          <div className="gold-line-left" />
          <h1
            id="faq-page-heading"
            className="text-[clamp(2rem,6vw,3.75rem)] font-extrabold text-white leading-[1.05] tracking-tight max-w-2xl"
          >
            Questions{' '}
            <span style={GOLD_GRADIENT_TEXT}>Answered.</span>
          </h1>
          <p className="text-white/72 text-base md:text-lg mt-4 max-w-lg leading-relaxed">
            Everything you need to know about kava, kratom, and the Ascension experience.
          </p>
        </div>
      </section>

      <FaqAccordion />

      <section
        className="relative bg-[#0d0d0d] border-t border-white/[0.05] overflow-hidden"
        aria-labelledby="faq-cta-heading"
      >
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none w-1/2 h-full"
          style={{ background: 'radial-gradient(ellipse at right center, rgba(147,51,234,0.09) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at bottom left, rgba(212,175,55,0.06) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="container-hb section-padding relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <p className="eyebrow">Still Curious?</p>
            <div className="gold-line mx-auto mb-6" style={{ maxWidth: '120px' }} />
            <h2
              id="faq-cta-heading"
              className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-white leading-tight mb-5"
            >
              Come see for{' '}
              <span style={GOLD_GRADIENT_TEXT}>yourself.</span>
            </h2>
            <p className="text-base text-white/72 leading-relaxed mb-8 max-w-sm mx-auto">
              Fort Lauderdale and Hollywood. Business by day. Social by night.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/locations" className="btn-gold">
                Visit Ascension
              </Link>
              <Link href="/about" className="btn-outline">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

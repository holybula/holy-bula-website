import type { Metadata } from 'next'
import Link from 'next/link'
import { GOLD_GRADIENT_TEXT } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Contact',
  description: 'Contact Ascension in Fort Lauderdale or Hollywood, FL. Questions, events, partnerships, and private gatherings.',
  alternates:  { canonical: 'https://holybula.com/contact' },
}

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#080808] text-white">
      <section className="relative overflow-hidden border-b border-white/[0.05] pt-28 pb-12 md:pt-36 md:pb-16">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-2/3"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(147,51,234,0.14) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/2"
          style={{ background: 'radial-gradient(ellipse at bottom left, rgba(212,175,55,0.06) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div className="container-hb relative z-10">
          <p className="eyebrow">Contact</p>
          <div className="gold-line-left" />
          <h1 className="max-w-3xl text-[clamp(2rem,6vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-white">
            Contact <span style={GOLD_GRADIENT_TEXT}>Ascension</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg ">
            Questions, events, partnerships, or private gatherings. Reach out and we&apos;ll get you connected.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/[0.05] section-padding">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[60%] w-2/3"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(147,51,234,0.12) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div className="container-hb relative z-10">
          <div className="mb-10 md:mb-14 max-w-2xl">
            <p className="eyebrow">Get In Touch</p>
            <div className="gold-line-left" />
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-white">
              Two locations. <span style={GOLD_GRADIENT_TEXT}>One team.</span>
            </h2>
          </div>

          <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            <div className="group relative">
              <div
                className="pointer-events-none absolute -inset-1 rounded-2xl opacity-70 md:-inset-2"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.2) 0%, transparent 72%)',
                  filter: 'blur(20px)',
                }}
                aria-hidden="true"
              />
              <div
                className="relative overflow-hidden rounded-xl border border-[rgba(212,175,55,0.25)] bg-[#0d0d0d] p-6 md:rounded-2xl md:p-8"
                style={{ boxShadow: '0 0 40px rgba(147,51,234,0.12)' }}
              >
                <div
                  className="absolute left-0 right-0 top-0 h-[2px]"
                  style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                  aria-hidden="true"
                />
                <h2 className="mb-6 text-xl font-extrabold text-white md:text-2xl">
                  Fort Lauderdale
                </h2>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.18em] text-white/25">Address</p>
                <p className="mb-5 text-sm leading-relaxed text-white/60 md:text-base ">
                  825 North Federal Highway, Fort Lauderdale, FL
                </p>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.18em] text-white/25">Phone</p>
                <p className="mb-5 text-sm text-white/60 ">(585) 216-7758</p>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.18em] text-white/25">Email</p>
                <p className="mb-8 text-sm text-white/60 ">info@ascensionlounge.com</p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a href="tel:5852167758" className="btn-gold flex-1 justify-center text-[0.625rem]">
                    Call Fort Lauderdale
                  </a>
                  <a href="mailto:info@ascensionlounge.com" className="btn-outline-gold flex-1 justify-center text-[0.625rem]">
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div
                className="pointer-events-none absolute -inset-1 rounded-2xl opacity-70 md:-inset-2"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.2) 0%, transparent 72%)',
                  filter: 'blur(20px)',
                }}
                aria-hidden="true"
              />
              <div
                className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-6 md:rounded-2xl md:p-8"
                style={{ boxShadow: '0 0 40px rgba(147,51,234,0.12)' }}
              >
                <h2 className="mb-6 text-xl font-extrabold text-white md:text-2xl">
                  Hollywood
                </h2>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.18em] text-white/25">Address</p>
                <p className="mb-5 text-sm leading-relaxed text-white/60 md:text-base ">
                  9630 Stirling Rd Suite 104, Hollywood, FL 33024
                </p>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.18em] text-white/25">Phone</p>
                <p className="mb-5 text-sm text-white/60 ">(954) 541-7937</p>
                <p className="mb-2 text-[0.6rem] uppercase tracking-[0.18em] text-white/25">Email</p>
                <p className="mb-8 text-sm text-white/60 ">info@ascensionlounge.com</p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a href="tel:9545417937" className="btn-gold flex-1 justify-center text-[0.625rem]">
                    Call Hollywood
                  </a>
                  <a href="mailto:info@ascensionlounge.com" className="btn-outline-gold flex-1 justify-center text-[0.625rem]">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative max-w-3xl">
            <div
              className="pointer-events-none absolute -inset-1 rounded-2xl opacity-70 md:-inset-2"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.2) 0%, transparent 72%)',
                filter: 'blur(20px)',
              }}
              aria-hidden="true"
            />
            <div
              className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-6 md:rounded-2xl md:p-8"
              style={{ boxShadow: '0 0 40px rgba(147,51,234,0.12)' }}
            >
              <div className="mb-5 h-[2px] w-8 bg-[#9333ea]" aria-hidden="true" />
              <h2 className="mb-4 text-xl font-extrabold text-white md:text-2xl">
                Events &amp; Private Gatherings
              </h2>
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg ">
                Want to host an event, brand night, meetup, tournament, or private gathering at Ascension?
                Reach out and our team will help you get connected.
              </p>
              <a href="mailto:info@ascensionlounge.com" className="btn-gold text-[0.625rem]">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/[0.05] bg-[#0d0d0d] section-padding">
        <div
          className="pointer-events-none absolute right-0 top-1/2 h-full w-1/2 -translate-y-1/2"
          style={{ background: 'radial-gradient(ellipse at right center, rgba(147,51,234,0.09) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div className="container-hb relative z-10 text-center">
          <p className="eyebrow">Visit Us</p>
          <div className="gold-line mx-auto mb-6" style={{ maxWidth: '120px' }} />
          <h2 className="mb-5 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-white">
            Come through in <span style={GOLD_GRADIENT_TEXT}>person.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-white/72 ">
            Hours, directions, and happy hour for both South Florida locations.
          </p>
          <Link href="/locations" className="btn-gold">
            View Locations
          </Link>
        </div>
      </section>
    </main>
  )
}

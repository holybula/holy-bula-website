import type { Metadata } from 'next'
import { GOLD_GRADIENT_TEXT, REWARDS_MEMBER_URL, REWARDS_SIGNUP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title:       'Rewards',
  description: 'Join Ascension Rewards — earn points on every visit, unlock perks, and stay connected to the circle.',
  alternates:  { canonical: 'https://holybula.com/rewards' },
}

export default function RewardsPage() {
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
          <p className="eyebrow">Ascension Rewards</p>
          <div className="gold-line-left" />
          <h1 className="max-w-3xl text-[clamp(2rem,6vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-white">
            Elevate Your Circle.{' '}
            <span style={GOLD_GRADIENT_TEXT}>Earn As You Sip.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
            Earn rewards, stay updated on events, unlock member perks, and become part of the Ascension community.
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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
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
                <h2 className="mb-4 text-xl font-extrabold text-white md:text-2xl">
                  Join Ascension Rewards
                </h2>
                <p className="mb-8 text-base leading-relaxed text-white/72 md:text-lg">
                  Sign up for rewards and start earning perks when you visit Ascension.
                </p>
                <a
                  href={REWARDS_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Join Rewards
                </a>
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
                <div className="mb-5 h-[2px] w-8 bg-[#9333ea]" aria-hidden="true" />
                <h2 className="mb-4 text-xl font-extrabold text-white md:text-2xl">
                  Already A Member?
                </h2>
                <p className="mb-8 text-base leading-relaxed text-white/72 md:text-lg">
                  Check your rewards balance, available offers, and account details.
                </p>
                <a
                  href={REWARDS_MEMBER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold"
                >
                  View My Rewards
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

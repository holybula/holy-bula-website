import type { Metadata } from 'next'
import Image from 'next/image'
import { REWARDS_MEMBER_URL, REWARDS_SIGNUP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Rewards',
  description: 'Join Ascension Rewards to earn points on every visit and unlock member perks at the Fort Lauderdale lounge.',
  alternates: { canonical: '/rewards' },
}

export default function RewardsPage() {
  return (
    <main id="main-content" tabIndex={-1} className="venue-inner venue-inner--rewards">
      <section
        className="venue-masthead container-hb grid items-center gap-8 pb-14 pt-32 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:pb-20 md:pt-40"
        aria-labelledby="rewards-heading"
      >
        <div>
          <p className="eyebrow">Ascension Rewards</p>
          <h1 id="rewards-heading" className="text-[clamp(2.8rem,7vw,6.5rem)] font-normal leading-[0.96] tracking-tight">
            Earn as you <em className="font-normal text-[#e6bb85]">sip.</em>
          </h1>
          <p className="mt-5 max-w-lg text-base text-[#e1d6ca] sm:text-lg">
            Earn 10 points for every $1 spent. Redeem points for free drinks, event upgrades and member perks.
          </p>
          <a href={REWARDS_SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-7">
            Join Rewards
          </a>
        </div>
        <div className="venue-masthead-photo relative aspect-[5/4] overflow-hidden border border-[#d6ac76]/20 bg-[#1b1519]">
          <Image
            src="/images/interior/holybula-art-3.PNG"
            alt="Framed portrait inside Ascension Lounge"
            fill
            sizes="(max-width: 767px) 90vw, 40vw"
            className="object-cover object-[50%_54%]"
            priority
          />
        </div>
      </section>

      <section className="venue-closing-panel border-y border-[#d6ac76]/20 bg-[#1b1519]" aria-labelledby="member-heading">
        <div className="container-hb grid items-center gap-7 py-12 sm:grid-cols-[1fr_auto] md:py-16">
          <div>
            <h2 id="member-heading" className="text-[clamp(2rem,4vw,3.8rem)] font-normal tracking-tight">
              Already a member?
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#e1d6ca]">
              Check your rewards balance, available offers and account details.
            </p>
          </div>
          <a href={REWARDS_MEMBER_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold justify-self-start">
            View My Rewards
          </a>
        </div>
      </section>
    </main>
  )
}

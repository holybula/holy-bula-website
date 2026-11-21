import Link from 'next/link'
import { COPY, REWARDS_SIGNUP_URL } from '@/lib/constants'

export default function RewardsTeaser() {
  return (
    <section id="rewards" className="border-y border-[#d6ac76]/20 bg-[#1b1519]" aria-labelledby="rewards-heading">
      <div className="container-hb grid items-end gap-7 py-12 md:grid-cols-[1fr_auto] md:py-16">
        <div>
          <p className="eyebrow">{COPY.rewardsEyebrow}</p>
          <h2 id="rewards-heading" className="text-[clamp(2rem,4vw,3.8rem)] font-normal tracking-tight">
            {COPY.rewardsTitle}
          </h2>
          <p className="mt-4 max-w-lg text-base text-[#e1d6ca]">{COPY.rewardsBody}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href={REWARDS_SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            {COPY.rewardsCTA}
          </a>
          <Link href="/reviews" className="btn-outline-gold">
            Read Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { COPY, REWARDS_SIGNUP_URL } from '@/lib/constants'
import AnimatedReveal from '@/components/shared/AnimatedReveal'

export default function RewardsTeaser() {
  return (
    <section
      id="rewards"
      className="relative bg-[#0d0d0d] border-t border-white/[0.05] overflow-hidden"
      aria-labelledby="rewards-heading"
    >
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none w-1/2 h-full"
        style={{ background: 'radial-gradient(ellipse at right center, rgba(147,51,234,0.09) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="container-hb section-padding relative z-10">
        <AnimatedReveal>
          <div className="max-w-xl">
            <p className="eyebrow">{COPY.rewardsEyebrow}</p>
            <div className="gold-line-left" />
            <h2
              id="rewards-heading"
              className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-white leading-tight mb-5"
            >
              {COPY.rewardsTitle}
            </h2>
            <p className="text-base text-white/72 leading-relaxed mb-8 max-w-sm">
              {COPY.rewardsBody}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={REWARDS_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                {COPY.rewardsCTA}
              </a>
              <Link href="/reviews" className="btn-outline-gold text-[0.625rem]">
                Read Reviews →
              </Link>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}

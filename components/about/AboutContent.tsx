import type { ReactNode } from 'react'
import Link from 'next/link'
import { GOLD_GRADIENT_TEXT } from '@/lib/constants'
import { LOCATIONS_LIST } from '@/lib/locations'
import LocationCard from '@/components/shared/LocationCard'

function SectionBlock({
  eyebrow,
  title,
  titleAccent,
  children,
  className = 'bg-[#080808]',
  id,
}: {
  eyebrow: string
  title: string
  titleAccent?: string
  children: ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={`${className} border-t border-white/[0.05] section-padding`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container-hb">
        <div className="mb-8 md:mb-10">
          <p className="eyebrow">{eyebrow}</p>
          <div className="gold-line-left" />
          <h2
            id={id ? `${id}-heading` : undefined}
            className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-white leading-tight tracking-tight"
          >
            {title}
            {titleAccent && (
              <>
                {' '}
                <span style={GOLD_GRADIENT_TEXT}>{titleAccent}</span>
              </>
            )}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="text-base md:text-lg text-white/72 leading-relaxed max-w-3xl">
      {children}
    </p>
  )
}

export default function AboutContent() {
  return (
    <>
      <SectionBlock eyebrow="Our Mission" title="Our Mission" id="mission">
        <Prose>
          Our mission is to curate and fuel a culture of like minded individuals via specialty drinks, a comforting ambiance, and most importantly, the right people.
        </Prose>
      </SectionBlock>

      <SectionBlock eyebrow="About Us" title="About Us" className="bg-[#0a0a0a]" id="about-us">
        <Prose>
          Ascension Kava Bar &amp; Lounge started in 2023 with a simple goal: to create an enjoyable space and culture built upon individuals who are seeking to be more. We opened doors to grow a community via a bar &amp; lounge that feels welcoming any time of the day or night. Whether you come to study, grab-n&apos;-go, or hang out, we are determined to have you leaving with a smile.
        </Prose>
      </SectionBlock>

      <SectionBlock
        eyebrow="Why Visit"
        title="Why Visit Ascension Kava Bar & Lounge?"
        id="why-visit"
      >
        <Prose>
          We believe the people you surround yourself with determines your trajectory. Ascension isn&apos;t just a bar; it&apos;s a community curated for those who strive for more. Between our specialty drinks and amazing culture, you&apos;ll find a comforting ambiance designed for good times, deep focus, and genuine connection. Come for the drinks, stay for the culture, and leave better than you came.
        </Prose>
      </SectionBlock>

      <SectionBlock
        eyebrow="The Circle"
        title="Who Will You Meet?"
        className="bg-[#0a0a0a]"
        id="who-you-meet"
      >
        <Prose>
          Connect with a circle of purpose driven individuals. Whether it be entrepreneurs, athletes, faithful youth, or DJ&apos;s, In this dedicated space built to work, lounge, recover, and sharpen your mind, you will leave nothing but satisfied.
        </Prose>
      </SectionBlock>

      <SectionBlock eyebrow="Botanicals" title="Kratom" id="kratom">
        <div
          className="relative overflow-hidden rounded-xl border border-[rgba(212,175,55,0.2)] bg-[#0d0d0d] p-6 md:p-8"
          style={{ boxShadow: '0 0 40px rgba(147,51,234,0.1)' }}
        >
          <div className="w-8 h-[2px] bg-[#9333ea] mb-5" aria-hidden="true" />
          <Prose>
            Kratom is a versatile botanical that beats the caffeine crash, offering &quot;smooth&quot; energy and sharp focus at lower servings. For recovery, higher amounts provide natural pain relief for muscle soreness and inflammation. Beyond the physical, its euphoric qualities lift your mood and ease social anxiety, making you more talkative and optimistic. It&apos;s the ultimate all-in-one tool for clean energy, deep recovery, and a mental edge.
          </Prose>
        </div>
      </SectionBlock>

      <SectionBlock eyebrow="Botanicals" title="Kava" className="bg-[#0a0a0a]" id="kava">
        <div
          className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-6 md:p-8"
          style={{ boxShadow: '0 0 40px rgba(147,51,234,0.1)' }}
        >
          <div className="w-8 h-[2px] bg-[#D4AF37] mb-5" aria-hidden="true" />
          <Prose>
            Kava provides a &quot;buzz&quot; similar to a drink, but without the alcohol that nukes your testosterone and hydration. Kava enhances sleep quality. It preps your CNS for deep REM sleep, which remember is where the real muscle growth occurs.
          </Prose>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Find Us"
        title="Two Locations"
        className="bg-[#0d0d0d]"
        id="locations"
      >
        <p className="text-base text-white/72 leading-relaxed max-w-xl mb-10 -mt-4">
          Fort Lauderdale and Hollywood.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {LOCATIONS_LIST.map((loc, i) => (
            <LocationCard key={loc.id} location={loc} index={i} />
          ))}
        </div>
      </SectionBlock>

      <section
        className="relative bg-[#080808] border-t border-white/[0.05] overflow-hidden"
        aria-labelledby="about-cta-heading"
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
            <p className="eyebrow">Come Through</p>
            <div className="gold-line mx-auto mb-6" style={{ maxWidth: '120px' }} />
            <h2
              id="about-cta-heading"
              className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold text-white leading-tight mb-5"
            >
              Visit <span style={GOLD_GRADIENT_TEXT}>Ascension</span> Today
            </h2>
            <p className="text-base text-white/72 leading-relaxed mb-8 max-w-sm mx-auto">
              Two South Florida locations. Same premium drinks, events, and community.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/locations" className="btn-gold">
                Visit Ascension Today
              </Link>
              <Link href="/events" className="btn-outline">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

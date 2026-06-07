import { AUDIENCE_LABELS, COPY } from '@/lib/constants'
import AnimatedReveal from '@/components/shared/AnimatedReveal'

export default function WhosHere() {
  return (
    <section
      id="whos-here"
      className="bg-[#080808] border-t border-white/[0.05] py-12 md:py-14"
      aria-label="Who's Here"
    >
      <div className="container-hb">
        <AnimatedReveal>
          <div className="flex flex-col items-center text-center gap-6">

            {/* Eyebrow */}
            <div>
              <p className="eyebrow">{COPY.whosHereEyebrow}</p>
              <p className="text-white/65 text-base tracking-wide font-medium italic">
                {COPY.whosHereSub}
              </p>
            </div>

            {/* Audience labels — Option B: large Playfair with gold dividers */}
            <div className="flex flex-wrap items-center justify-center gap-0">
              {AUDIENCE_LABELS.map((label, i) => (
                <span key={label} className="flex items-center">
                  <span
                    className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-bold text-white/60 tracking-tight px-3 md:px-5 hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {label}
                  </span>
                  {i < AUDIENCE_LABELS.length - 1 && (
                    <span
                      className="w-px h-5 md:h-6 flex-shrink-0"
                      style={{ background: 'rgba(212,175,55,0.3)' }}
                      aria-hidden="true"
                    />
                  )}
                </span>
              ))}
            </div>

          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}

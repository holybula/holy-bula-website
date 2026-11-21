import { AUDIENCE_LABELS, COPY } from '@/lib/constants'

export default function WhosHere() {
  return (
    <section
      id="whos-here"
      className="border-t border-[#d6ac76]/20 bg-[#1b1519]"
      aria-labelledby="whos-here-heading"
    >
      <div className="container-hb flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
        <h2 id="whos-here-heading" className="shrink-0 text-[clamp(1.8rem,4vw,2.6rem)] font-normal">
          {COPY.whosHereEyebrow}
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#e1d6ca] sm:text-base">
          {AUDIENCE_LABELS.map(label => <li key={label}>{label}</li>)}
        </ul>
      </div>
    </section>
  )
}

import Link from 'next/link'

export default function WhosHere() {
  return (
    <section
      id="whos-here"
      className="border-t border-[#d6ac76]/20 bg-[#1b1519]"
      aria-labelledby="whos-here-heading"
    >
      <div className="container-hb flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-10">
        <h2 id="whos-here-heading" className="shrink-0 text-[clamp(1.8rem,4vw,2.6rem)] font-normal">
          The Circle.
        </h2>
        <div className="max-w-2xl text-sm leading-relaxed text-[#e1d6ca] sm:text-base">
          <p>What starts here can go beyond a night out: a new friend, an idea worth building, or someone in your corner.</p>
          <Link href="/about#mission" className="mt-2 inline-flex min-h-11 items-center text-hb-gold underline underline-offset-4">What we&apos;re about</Link>
        </div>
      </div>
    </section>
  )
}

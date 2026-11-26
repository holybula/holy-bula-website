import type { Metadata } from 'next'
import GuestChat from './GuestChat'

export const metadata: Metadata = {
  title: 'Ask the Lounge',
  description: 'Get quick answers about hours, events and visiting Ascension Lounge in Fort Lauderdale.',
  alternates: { canonical: '/ask' },
}

export default function AskPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-[#100a17]">
      <section className="container-hb pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="mx-auto max-w-2xl">
          <p className="eyebrow">Fort Lauderdale · Guest help</p>
          <h1 className="text-[clamp(2.8rem,8vw,5.1rem)] tracking-tight">Ask the <em className="text-[#f0c78f]">Lounge.</em></h1>
          <p className="mb-7 mt-3 text-base text-[#e1d6e3]">Planning a visit? Ask about hours, what’s happening, or how to find us.</p>
          <GuestChat />
        </div>
      </section>
    </main>
  )
}

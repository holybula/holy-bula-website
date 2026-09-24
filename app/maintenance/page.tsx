import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Ascension — Temporarily Unavailable',
  description: 'Website temporarily unavailable. We’ll be back soon.',
  robots: { index: false, follow: false },
}

export default function MaintenancePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-hb-black"
      role="main"
    >
      <div
        className="h-px w-full max-w-md mb-12"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(212,175,55,0.35) 50%, transparent)',
        }}
        aria-hidden="true"
      />
      <Image
        src="/ascension-logo.svg"
        alt="Ascension"
        width={72}
        height={72}
        className="w-[4.5rem] h-[4.5rem] object-contain mb-8"
        priority
      />
      <p className="font-logo text-2xl text-white tracking-wide mb-6">Ascension</p>
      <p className="text-base text-white/70 max-w-md leading-relaxed font-medium">
        Website temporarily unavailable. We&apos;ll be back soon.
      </p>
      <div
        className="h-px w-full max-w-md mt-12"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(212,175,55,0.35) 50%, transparent)',
        }}
        aria-hidden="true"
      />
    </main>
  )
}

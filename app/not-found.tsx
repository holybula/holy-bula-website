import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: '404: This page could not be found.' },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
}

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="venue-inner">
      <section className="container-hb pb-16 pt-28 sm:pb-24 sm:pt-36" aria-labelledby="not-found-heading">
        <p className="eyebrow">404</p>
        <h1 id="not-found-heading" className="text-display-md font-normal">This page could not be found.</h1>
        <nav aria-label="Helpful links" className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="btn-gold">Home</Link>
          <Link href="/menu" className="btn-outline">Menu</Link>
          <Link href="/events" className="btn-outline">Events</Link>
        </nav>
      </section>
    </main>
  )
}

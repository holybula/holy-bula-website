'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BRAND, FOOTER_LINKS } from '@/lib/constants'
import { FORT_LAUDERDALE } from '@/lib/locations'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [requested, setRequested] = useState(false)
  const { address, phone, textHref } = FORT_LAUDERDALE

  function requestUpdates(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const body = encodeURIComponent('Please send me Ascension event updates and specials at ' + email.trim() + '.')
    window.location.href = 'mailto:' + BRAND.email + '?subject=Ascension%20event%20updates&body=' + body
    setRequested(true)
  }

  return (
    <footer className="border-t border-hb-gold/25 bg-hb-black-2">
      <div className="container-hb pb-4 pt-8 md:pt-10">
        <div className="grid gap-x-9 gap-y-6 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="mb-3 inline-flex items-center gap-3" aria-label="Ascension home">
              <Image src="/ascension-header-lockup.svg" alt="" width={80} height={64} />
              <span className="max-w-28 text-lg font-medium leading-snug text-hb-off-white">Elevate your circle.</span>
            </Link>
            <p className="text-sm text-white/70">Business by day. Social by night.</p>
          </div>
          <div>
            <h2 className="footer-label">Explore</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              {FOOTER_LINKS.map(link => (
                <li key={link.href}><Link href={link.href} className="footer-link">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="footer-label">Fort Lauderdale</h2>
            <address className="text-sm not-italic text-white/75">
              {address.street}<br />{address.city}, {address.state} {address.zip}
            </address>
            <Link href="/locations" className="footer-link mt-2 text-sm">Hours &amp; Directions <span aria-hidden="true" className="link-arrow" /></Link>
            <a href={textHref} className="footer-link mt-1 block text-sm">Text {phone}</a>
          </div>
          <div>
            <h2 className="footer-label">Stay in touch</h2>
            <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-link block text-sm">{BRAND.instagram}</a>
            <a href={'mailto:' + BRAND.email} className="footer-link block text-sm">{BRAND.email}</a>
            <form onSubmit={requestUpdates} className="mt-5">
              <label htmlFor="updates-email" className="mb-2 block text-sm text-white/75">Request event updates</label>
              <div className="flex flex-wrap gap-2">
                <input id="updates-email" type="email" autoComplete="email" value={email}
                  onChange={event => { setEmail(event.target.value); setRequested(false) }}
                  placeholder="Email address" required
                  className="min-h-11 min-w-32 flex-1 border border-white/20 bg-hb-black px-3 text-sm text-white placeholder:text-white/55" />
                <button className="btn-outline-gold" type="submit">Open email</button>
              </div>
              {requested && <p role="status" className="mt-2 text-xs text-hb-gold">Send the draft from your email app to request updates.</p>}
            </form>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Ascension Kava Bar &amp; Lounge.</p>
        </div>
      </div>
    </footer>
  )
}

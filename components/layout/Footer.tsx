'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BRAND, FOOTER_LINKS, SOCIAL, ORDERING_COMING_SOON } from '@/lib/constants'
import { LOCATIONS_LIST } from '@/lib/locations'

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

export default function Footer() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="bg-[#050505] border-t border-white/[0.06]" role="contentinfo">
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.35) 50%, transparent)' }} />

      <div className="container-hb pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/ascension-logo.svg"
                alt="Ascension"
                width={36}
                height={36}
                className="w-9 h-9 object-contain flex-shrink-0"
              />
              <span className="font-logo text-[1rem] text-white">
                Ascension
              </span>
            </div>
            <p className="text-base text-hb-gold mb-5 font-medium italic">
              {BRAND.tagline}
            </p>
            <div className="flex gap-2.5">
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ascension on ${s.label}`}
                  className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-white/35 hover:text-hb-gold hover:border-[rgba(212,175,55,0.35)] transition-all duration-200"
                >
                  <InstagramIcon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[0.6rem] tracking-[0.2em] uppercase text-white/25 mb-4">Navigate</h3>
            <ul className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-hb-gold transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span
                  className="text-sm text-hb-gold/50 cursor-not-allowed"
                  title={ORDERING_COMING_SOON.message}
                >
                  {ORDERING_COMING_SOON.label} →
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.6rem] tracking-[0.2em] uppercase text-white/25 mb-4">Locations</h3>
            <div className="flex flex-col gap-5">
              {LOCATIONS_LIST.map(loc => (
                <div key={loc.id}>
                  <p className="text-sm font-medium text-white mb-1">{loc.name}</p>
                  <address className="not-italic text-xs text-white/35 leading-relaxed">
                    {loc.address.street}<br />
                    {loc.address.city}, {loc.address.state} {loc.address.zip}
                  </address>
                  <Link
                    href={`/locations/${loc.id}`}
                    className="text-[0.6rem] tracking-[0.12em] uppercase text-hb-gold/50 hover:text-hb-gold transition-colors duration-200 mt-1.5 inline-block"
                  >
                    Hours & Directions →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[0.6rem] tracking-[0.2em] uppercase text-white/25 mb-4">Connect</h3>
            <div className="flex flex-col gap-2 mb-6">
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-hb-gold transition-colors duration-200"
              >
                {BRAND.instagram}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-sm text-white/50 hover:text-hb-gold transition-colors duration-200"
              >
                {BRAND.email}
              </a>
            </div>

            <p className="text-xs text-white/30 leading-relaxed mb-3">
              Join the circle. Event updates and specials to your inbox.
            </p>
            {submitted ? (
              <p className="text-xs text-hb-gold border border-[rgba(212,175,55,0.3)] px-3 py-2.5">
                You&apos;re in. ✓
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    aria-label="Email for newsletter"
                    className="bg-[#111] border border-white/[0.1] text-white text-sm px-3 py-2.5 placeholder:text-white/20 focus:outline-none focus:border-[rgba(212,175,55,0.4)] transition-colors duration-200"
                  />
                  <button type="submit" className="btn-gold w-full justify-center text-[0.6rem]">
                    Join the Circle
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="gold-line mb-5" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[0.6rem] tracking-[0.1em] uppercase text-white/18">
            © {new Date().getFullYear()} Ascension. All rights reserved.
          </p>
          <div className="flex gap-5">
            {[{ label: 'Privacy Policy', href: '/privacy' }, { label: 'Terms', href: '/terms' }, { label: 'Contact', href: '/contact' }].map(l => (
              <Link key={l.href} href={l.href} className="text-[0.6rem] tracking-[0.1em] uppercase text-white/18 hover:text-white/45 transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BRAND, NAV_LINKS, ORDERING_COMING_SOON } from '@/lib/constants'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }

    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => setOpen(false)
    document.addEventListener('keydown', closeOnEscape)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  return (
    <header className="site-header">
      <nav className="container-hb site-nav" aria-label="Main navigation">
        <Link href="/" onClick={() => setOpen(false)} className="wordmark" aria-label="Ascension home">
          <Image src="/ascension-mark.svg" alt="" width={28} height={36} priority />
          <span>
            <span className="wordmark-name">Ascension</span>
            <span className="wordmark-caption">Kava Bar &amp; Lounge</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
          {NAV_LINKS.filter(link => link.href !== '/locations').map(link => (
            <li key={link.href}>
              <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/locations" className="btn-outline-gold site-nav-visit">
          Visit Us <span aria-hidden="true" className="link-arrow" />
        </Link>
        <button
          ref={toggle}
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="mobile-toggle lg:hidden"
          onClick={() => setOpen(value => !value)}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="m5 5 14 14M19 5 5 19" /> : <path d="M3 8h18M3 16h18" />}
          </svg>
        </button>
        <div id="mobile-navigation" className="mobile-navigation lg:hidden" hidden={!open}>
          <div className="container-hb py-5">
            <ul>
              {NAV_LINKS.map(link => (
                <li key={link.href} className="border-b border-white/10">
                  <Link href={link.href} onClick={() => setOpen(false)}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className="block py-3 text-3xl font-display hover:text-hb-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm text-hb-gold">
              {BRAND.instagram}
            </a>
            <p className="mt-2 text-xs text-white/65">{ORDERING_COMING_SOON.label}</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

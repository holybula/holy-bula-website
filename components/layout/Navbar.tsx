'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BRAND, NAV_LINKS } from '@/lib/constants'
import { ORDER_PATH } from '@/lib/ordering'

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
        <Link href="/" onClick={() => setOpen(false)} className="inline-flex min-h-11 shrink-0 items-center" aria-label="Ascension Kava Bar & Lounge home">
          <Image
            src="/ascension-header-lockup.svg"
            alt=""
            width={98}
            height={79}
            priority
            className="h-[3.625rem] w-auto object-contain sm:h-16"
          />
        </Link>
        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link href={link.href} aria-current={pathname === link.href ? 'page' : undefined} className="nav-link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={ORDER_PATH} aria-current={pathname === ORDER_PATH ? 'page' : undefined} onClick={() => setOpen(false)} className="btn-gold site-nav-order">
          Order{' '}<span className="hidden lg:inline">Delivery</span><span aria-hidden="true" className="link-arrow" />
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
          <div className="container-hb py-4">
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
          </div>
        </div>
      </nav>
    </header>
  )
}

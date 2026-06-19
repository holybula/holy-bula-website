'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'
import ComingSoonOrderButton from '@/components/shared/ComingSoonOrderButton'

function Hamburger({ open, onClick, className = '' }: { open: boolean; onClick: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] relative z-50 ${className}`}
    >
      <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
      <span className={`block h-[1.5px] bg-white transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-5'}`} />
      <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
    </button>
  )
}

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/96 backdrop-blur-md border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-hb flex items-center" aria-label="Main navigation">

          <Link href="/" aria-label="Ascension — Home" className="flex items-center gap-3 group flex-shrink-0">
            <Image
              src="/ascension-logo.svg"
              alt="Ascension logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span className="font-logo text-[1.05rem] text-white tracking-wide leading-none">
              Ascension
            </span>
          </Link>

          <ul className="hidden lg:flex flex-1 items-center justify-center gap-8">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.6875rem] tracking-[0.18em] uppercase font-medium text-white/65 hover:text-hb-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block flex-shrink-0 w-[8.25rem]" aria-hidden="true" />

          <Hamburger open={mobileOpen} onClick={() => setMobileOpen(p => !p)} className="lg:ml-0 ml-auto" />
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[90] bg-[#080808] flex flex-col lg:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="h-20 flex-shrink-0" aria-hidden="true" />

        <div className="gold-line mx-5 mb-8" />

        <ul className="flex flex-col px-6 gap-1 flex-1">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={close}
                className="block py-4 text-[1.75rem] font-extrabold text-white/80 hover:text-hb-gold transition-colors duration-200"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-6 pb-12 pt-8 border-t border-white/[0.06]">
          <p className="eyebrow mb-4">Fort Lauderdale · Hollywood</p>
          <ComingSoonOrderButton fullWidth showMessage />
        </div>
      </div>
    </>
  )
}

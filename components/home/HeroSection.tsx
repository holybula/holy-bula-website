'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'
import { SCHEDULES } from '@/lib/events'

function EventTicker() {
  const events = SCHEDULES['fort-lauderdale'].events
  const items  = [...events, ...events]

  return (
    <div className="ticker-wrap border-t border-b border-white/[0.06] py-3" aria-hidden="true">
      <div className="ticker-inner">
        {items.map((event, i) => (
          <span key={i} className="flex items-center gap-4 pr-14">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                backgroundColor:
                  event.dot === 'purple' ? '#9333ea' :
                  event.dot === 'green'  ? '#4ade80' :
                  event.dot === 'none'   ? 'transparent' : '#D4AF37'
              }}
            />
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/35 font-medium">
              {event.dayShort}
            </span>
            <span className="text-[0.6rem] tracking-[0.15em] uppercase text-white/55">
              {event.active ? event.name : '—'}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col bg-[#080808] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background — real venue photo */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/interior/pic_6.PNG"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#080808]/70" />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: 'linear-gradient(0deg, #080808 0%, transparent 100%)' }}
        />
        {/* Subtle purple tint upper right */}
        <div
          className="absolute top-0 right-0 w-1/2 h-1/2"
          style={{ background: 'radial-gradient(ellipse at top right, rgba(147,51,234,0.12) 0%, transparent 65%)' }}
        />
      </div>

      {/* Content */}
      <div className="container-hb flex-1 flex flex-col justify-center pt-32 pb-16 relative z-10">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="w-8 h-px bg-hb-gold" />
            <span className="text-[0.625rem] tracking-[0.25em] uppercase text-hb-gold font-light">
              Fort Lauderdale · Hollywood, FL
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-extrabold text-white leading-[1.0] tracking-tight mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              transitionDelay: '200ms',
            }}
          >
            <span className="block">Elevate</span>
            <span className="block">Your</span>
            <span
              className="block"
              style={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                backgroundImage: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 45%, #F5D76E 100%)',
              }}
            >
              Circle.
            </span>
          </h1>

          {/* Sub */}
          <p
            className={`text-white/72 leading-relaxed mb-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.125rem)', maxWidth: '520px', transitionDelay: '350ms' }}
          >
            {BRAND.heroSub}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <Link href="/locations" className="btn-gold">Visit Us</Link>
            <Link href="/events"    className="btn-outline">View Events</Link>
          </div>
        </div>
      </div>

      {/* Event ticker */}
      <div
        className={`relative z-10 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '700ms' }}
      >
        <EventTicker />
      </div>
    </section>
  )
}

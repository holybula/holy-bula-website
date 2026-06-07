'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FAQ_ITEMS } from '@/lib/faq'

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={`
        flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full border flex-shrink-0
        transition-all duration-300
        ${open
          ? 'border-[rgba(212,175,55,0.5)] bg-[rgba(212,175,55,0.1)] text-[#D4AF37]'
          : 'border-white/[0.1] bg-white/[0.03] text-white/35 group-hover:border-white/20 group-hover:text-white/55'
        }
      `}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      >
        <path
          d="M4 6l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null)

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <section
      className="relative bg-[#080808] border-t border-white/[0.05] overflow-hidden"
      aria-label="Frequently asked questions"
    >
      <div
        className="absolute top-0 right-0 w-2/3 h-[70%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(147,51,234,0.12) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom left, rgba(212,175,55,0.05) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      <div className="container-hb section-padding relative z-10">
        <div className="mb-10 md:mb-14 max-w-2xl">
          <p className="eyebrow">Common Questions</p>
          <div className="gold-line-left" />
          <h2
            className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white leading-tight tracking-tight"
          >
            Everything you need to know.
          </h2>
        </div>

        <div className="max-w-3xl flex flex-col gap-3 md:gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id
            const panelId = `faq-panel-${item.id}`
            const buttonId = `faq-button-${item.id}`

            return (
              <div key={item.id} className="group relative">
                {/* Purple glow — visible when open */}
                <div
                  className={`
                    absolute -inset-1 md:-inset-2 rounded-2xl pointer-events-none transition-opacity duration-500
                    ${isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}
                  `}
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.2) 0%, transparent 72%)',
                    filter: 'blur(20px)',
                  }}
                  aria-hidden="true"
                />

                <div
                  className={`
                    relative overflow-hidden rounded-xl md:rounded-2xl border transition-all duration-300
                    ${isOpen
                      ? 'border-[rgba(212,175,55,0.4)] bg-[#0d0d0d]'
                      : 'border-white/[0.08] bg-[#0d0d0d] hover:border-white/[0.14] hover:bg-[#111]'
                    }
                  `}
                  style={isOpen ? {
                    boxShadow: '0 0 40px rgba(147, 51, 234, 0.12), 0 0 80px rgba(201, 162, 39, 0.06)',
                  } : undefined}
                >
                  {isOpen && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                      aria-hidden="true"
                    />
                  )}

                  <h3 className="m-0 p-0">
                    <button
                      id={buttonId}
                      type="button"
                      className="
                        w-full flex items-start justify-between gap-4 md:gap-6
                        text-left p-5 md:p-7
                        bg-transparent border-0 outline-none cursor-pointer
                        text-white appearance-none
                      "
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(item.id)}
                    >
                      <span className="flex items-start gap-4 md:gap-5 min-w-0">
                        <span
                          className={`
                            flex-shrink-0 text-[0.6rem] tracking-[0.2em] uppercase font-medium pt-1
                            transition-colors duration-300
                            ${isOpen ? 'text-[#D4AF37]' : 'text-white/25'}
                          `}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`
                            text-[clamp(1.05rem,2.4vw,1.25rem)] font-bold leading-snug transition-colors duration-300
                            ${isOpen ? 'text-white' : 'text-white/85'}
                          `}
                        >
                          {item.question}
                        </span>
                      </span>
                      <Chevron open={isOpen} />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`
                      grid transition-all duration-300 ease-out
                      ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-7 pb-5 md:pb-7 pt-0 ml-[2.75rem] md:ml-[3.25rem] border-t border-white/[0.05]">
                        <p className="pt-4 md:pt-5 text-base md:text-lg text-white/72 leading-relaxed">
                          {item.answer}
                          {item.id === 'locations' && (
                            <>
                              {' '}
                              <Link
                                href="/locations"
                                className="text-[#D4AF37] hover:text-[#F5D76E] transition-colors duration-200 underline-offset-2 hover:underline"
                              >
                                View locations &rarr;
                              </Link>
                            </>
                          )}
                          {item.id === 'events' && (
                            <>
                              {' '}
                              <Link
                                href="/events"
                                className="text-[#D4AF37] hover:text-[#F5D76E] transition-colors duration-200 underline-offset-2 hover:underline"
                              >
                                See this week&apos;s schedule &rarr;
                              </Link>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

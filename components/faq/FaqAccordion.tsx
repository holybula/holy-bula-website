'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FAQ_ITEMS } from '@/lib/faq'

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null)

  return (
    <div className="border-y border-hb-gold/25" aria-label="Questions and answers" role="group">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id
        const panelId = `faq-panel-${item.id}`
        const buttonId = `faq-button-${item.id}`

        return (
          <div key={item.id} className="border-b border-hb-gold/25 last:border-b-0">
            <h2 className="text-lg font-normal md:text-xl">
              <button
                id={buttonId}
                type="button"
                className="group flex min-h-16 w-full items-center justify-between gap-5 px-2 py-5 text-left text-hb-off-white transition-colors hover:text-hb-gold focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-hb-gold md:px-4"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId((previous) => previous === item.id ? null : item.id)}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-hb-gold/50 text-base text-hb-gold transition-colors group-hover:bg-hb-gold/10"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h2>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <div className="px-2 pb-6 md:px-4">
                <p className="max-w-prose text-base leading-relaxed text-hb-off-white/80">{item.answer}</p>
                {item.link && (
                  <Link
                    href={item.link.href}
                    className="mt-3 inline-block text-sm font-medium text-hb-gold underline underline-offset-4 hover:text-hb-off-white"
                  >
                    {item.link.label} <span aria-hidden="true" className="link-arrow" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

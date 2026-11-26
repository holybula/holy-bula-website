'use client'

import { useRef, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { getGuestAnswer, type GuestAnswer } from '@/lib/guest-answers'

const examples = ['What are your hours?', 'Where are you?', 'What’s on tonight?', 'Can I see the menu?', 'Do you deliver?', 'How do rewards work?']
type Turn = { id: number; question: string; reply: GuestAnswer }

export default function GuestChat() {
  const nextId = useRef(0)
  const [input, setInput] = useState('')
  const [turns, setTurns] = useState<Turn[]>([])
  function ask(raw: string) {
    const question = raw.trim().slice(0, 300)
    if (!question) return
    const reply = getGuestAnswer(question)
    const id = nextId.current++
    setTurns(previous => [...previous.slice(-5), { id, question, reply }])
    setInput('')
  }

  return (
    <div className="min-w-0 border border-[#cdb6e94d] bg-[#1c1129] p-4 shadow-xl sm:p-7">
      <p className="mb-4 text-sm text-[#e1d6e3]">Instant, automated answers. This chat doesn’t send or save your messages. Please don’t enter private information.</p>
      <div className="mb-5 flex flex-wrap gap-2" aria-label="Suggested questions">
        {examples.map(q => <button type="button" key={q} onClick={() => ask(q)} className="min-h-11 rounded-full border border-[#cdb6e94d] bg-[#2e1b3e] px-3 text-sm text-white hover:border-[#f0c78f]">{q}</button>)}
      </div>
      <form onSubmit={(event: FormEvent<HTMLFormElement>) => { event.preventDefault(); ask(input) }}>
        <label htmlFor="lounge-question" className="mb-2 block text-sm font-semibold text-white">Your question</label>
        <div className="flex flex-wrap gap-2">
          <input id="lounge-question" autoComplete="off" spellCheck={false} maxLength={300} value={input} onChange={event => setInput(event.target.value)} placeholder="What time do you close?" className="min-h-12 min-w-0 flex-1 border border-[#cdb6e980] bg-[#100a17] px-3 text-base text-white placeholder:text-white/60" />
          <button className="btn-gold" type="submit" disabled={!input.trim()}>Ask</button>
        </div>
      </form>
      <div role="log" aria-label="Chat answers" aria-live="polite" aria-relevant="additions" className="mt-5 space-y-3">
        {turns.slice().reverse().map(turn => (
          <div key={turn.id} className="break-words border-l-2 border-[#cfa5f1] bg-[#100a17] p-4 text-sm">
            <p className="font-semibold text-[#f0c78f]">{turn.question}</p>
            <p className="mt-1 text-white">{turn.reply.text}</p>
            <Link href={turn.reply.href} className="inline-flex min-h-11 items-center text-[#f0c78f] underline underline-offset-4">{turn.reply.label}</Link>
          </div>
        ))}
      </div>
      <noscript><p className="mt-4 text-white">Turn on JavaScript for instant answers or email the team below.</p></noscript>
      <p className="mt-5 border-t border-white/15 pt-4 text-sm text-[#e1d6e3]">Need a person? <a href={'mailto:' + BRAND.email} className="inline-flex min-h-11 items-center text-[#f0c78f] underline underline-offset-4">Email the Lounge</a>.</p>
    </div>
  )
}

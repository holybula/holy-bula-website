'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface AnimatedRevealProps {
  children:   ReactNode
  className?: string
  delay?:     number   // in ms
  threshold?: number   // 0–1
  once?:      boolean  // only reveal once (default true)
}

export default function AnimatedReveal({
  children,
  className = '',
  delay     = 0,
  threshold = 0.12,
  once      = true,
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('visible')
          if (once) observer.disconnect()
        } else if (!once) {
          el.classList.remove('visible')
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold, once])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

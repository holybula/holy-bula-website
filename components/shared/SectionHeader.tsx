import { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow:    string
  title:      string | ReactNode
  subtitle?:  string
  centered?:  boolean
  className?: string
  titleSize?: 'sm' | 'md' | 'lg'
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered   = false,
  className  = '',
  titleSize  = 'lg',
}: SectionHeaderProps) {
  const titleClasses = {
    sm: 'text-[clamp(1.5rem,3vw,2.5rem)]',
    md: 'text-[clamp(2rem,4vw,3rem)]',
    lg: 'text-[clamp(2.25rem,5vw,3.5rem)]',
  }

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <div
        className={`${centered ? 'mx-auto' : ''} w-10 h-[1px] mb-4`}
        style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }}
      />
      <h2
        className={`font-bold text-white leading-[1.08] tracking-tight ${titleClasses[titleSize]}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-white/50 mt-3 leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}

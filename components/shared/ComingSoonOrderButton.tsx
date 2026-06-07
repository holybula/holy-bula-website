import { ORDERING_COMING_SOON } from '@/lib/constants'

interface ComingSoonOrderButtonProps {
  className?:   string
  /** Smaller label text for item cards */
  compact?:     boolean
  /** Show helper message beneath the button */
  showMessage?: boolean
  fullWidth?:   boolean
}

export default function ComingSoonOrderButton({
  className   = '',
  compact     = false,
  showMessage = false,
  fullWidth   = false,
}: ComingSoonOrderButtonProps) {
  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      <button
        type="button"
        onClick={e => e.preventDefault()}
        className={`
          btn-gold cursor-not-allowed opacity-80
          ${compact ? 'text-[0.6rem]' : 'text-[0.625rem]'}
          ${fullWidth ? 'w-full justify-center' : ''}
        `}
        aria-disabled="true"
        title={ORDERING_COMING_SOON.message}
      >
        {ORDERING_COMING_SOON.label}
      </button>
      {showMessage && (
        <p className="text-[0.6rem] text-white/35 mt-2 leading-relaxed">
          {ORDERING_COMING_SOON.message}
        </p>
      )}
    </div>
  )
}

import type { LocationId } from './constants'

export type EventDot = 'gold' | 'purple' | 'green' | 'none'

export interface DayEvent {
  day:      string
  dayShort: string
  dayIndex: number   // 0 = Monday
  name:     string
  time:     string
  dot:      EventDot
  active:   boolean  // has an event
}

export interface LocationSchedule {
  locationId:   LocationId
  locationName: string
  events:       DayEvent[]
}

// ─── Fort Lauderdale — approved schedule ──────────────────────
const fortLauderdaleEvents: DayEvent[] = [
  { day: 'Monday',    dayShort: 'Mon', dayIndex: 0, name: 'Trivia Night',        time: '9pm', dot: 'gold',   active: true  },
  { day: 'Tuesday',   dayShort: 'Tue', dayIndex: 1, name: 'Poker Night',         time: '9pm', dot: 'purple', active: true  },
  { day: 'Wednesday', dayShort: 'Wed', dayIndex: 2, name: 'Ladies Night',        time: '9pm', dot: 'gold',   active: true  },
  { day: 'Thursday',  dayShort: 'Thu', dayIndex: 3, name: 'Bingo Night',         time: '9pm', dot: 'gold',   active: true  },
  { day: 'Friday',    dayShort: 'Fri', dayIndex: 4, name: 'Open Social Night',   time: '9pm', dot: 'green',  active: true  },
  { day: 'Saturday',  dayShort: 'Sat', dayIndex: 5, name: 'Pool Tournament',     time: '9pm', dot: 'purple', active: true  },
  { day: 'Sunday',    dayShort: 'Sun', dayIndex: 6, name: 'Movie Night',         time: '9pm', dot: 'gold',   active: true  },
]

// ─── Hollywood / Cooper City ──────────────────────────────────
const hollywoodEvents: DayEvent[] = [
  { day: 'Monday',    dayShort: 'Mon', dayIndex: 0, name: 'Bingo Night',   time: '9pm', dot: 'gold',   active: true  },
  { day: 'Tuesday',   dayShort: 'Tue', dayIndex: 1, name: 'Trivia Night',  time: '9pm', dot: 'gold',   active: true  },
  { day: 'Wednesday', dayShort: 'Wed', dayIndex: 2, name: '—',             time: '',    dot: 'none',   active: false },
  { day: 'Thursday',  dayShort: 'Thu', dayIndex: 3, name: 'Poker Night',   time: '9pm', dot: 'purple', active: true  },
  { day: 'Friday',    dayShort: 'Fri', dayIndex: 4, name: 'Ladies Night',  time: '9pm', dot: 'gold',   active: true  },
  { day: 'Saturday',  dayShort: 'Sat', dayIndex: 5, name: 'Ladies Night',  time: '9pm', dot: 'gold',   active: true  },
  { day: 'Sunday',    dayShort: 'Sun', dayIndex: 6, name: '—',             time: '',    dot: 'none',   active: false },
]

export const SCHEDULES: Record<LocationId, LocationSchedule> = {
  'fort-lauderdale': {
    locationId:   'fort-lauderdale',
    locationName: 'Fort Lauderdale',
    events:       fortLauderdaleEvents,
  },
  'hollywood': {
    locationId:   'hollywood',
    locationName: 'Hollywood / Cooper City',
    events:       hollywoodEvents,
  },
}

// ─── Get today's day index (0=Mon) ────────────────────────────
export function getTodayIndex(): number {
  const jsDay = new Date().getDay()
  return jsDay === 0 ? 6 : jsDay - 1
}

export const DOT_COLORS: Record<EventDot, string> = {
  gold:   '#D4AF37',
  purple: '#9333ea',
  green:  '#4ade80',
  none:   'transparent',
}

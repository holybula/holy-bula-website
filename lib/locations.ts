import type { LocationId } from './constants'

type Weekday = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'

const WEEKDAYS: readonly Weekday[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const VENUE_CLOCK = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

export interface Location {
  id: LocationId
  name: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    full: string
  }
  phone: string
  textHref: string
  hours: {
    opens: number
    closes: number
  }
  googleMapsUrl: string
}

export const FORT_LAUDERDALE: Location = {
  id: 'fort-lauderdale',
  name: 'Fort Lauderdale',
  address: {
    street: '825 N Federal Hwy',
    city: 'Fort Lauderdale',
    state: 'FL',
    zip: '33304',
    full: '825 N Federal Hwy, Fort Lauderdale, FL 33304',
  },
  phone: '(585) 216-7758',
  textHref: 'sms:+15852167758',
  hours: { opens: 10, closes: 3 },
  googleMapsUrl: 'https://www.google.com/maps?cid=10262279448070022615',
}

export function formatHour(hour: number): string {
  return `${hour % 12 || 12} ${hour < 12 ? 'AM' : 'PM'}`
}

const { opens, closes } = FORT_LAUDERDALE.hours
export const BUSINESS_HOURS_TEXT = `${formatHour(opens)}–${formatHour(closes)}`
export const BUSINESS_HOURS_STRUCTURED_DATA =
  `Mo-Su ${String(opens).padStart(2, '0')}:00-${String(closes).padStart(2, '0')}:00`

export function getVenueClock(date = new Date()) {
  const parts = VENUE_CLOCK.formatToParts(date)
  return {
    day: WEEKDAYS.indexOf(parts.find(part => part.type === 'weekday')?.value as Weekday),
    hour: Number(parts.find(part => part.type === 'hour')?.value),
    minute: Number(parts.find(part => part.type === 'minute')?.value),
  }
}

export function isOpenNow(location: Location, date = new Date()): boolean {
  const { hour } = getVenueClock(date)
  const { opens, closes } = location.hours
  return closes < opens ? hour >= opens || hour < closes : hour >= opens && hour < closes
}

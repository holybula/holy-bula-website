import type { LocationId } from './constants'

export interface HoursEntry {
  days:  string
  hours: string
}

export interface HappyHourWindow {
  label: string   // display label
  start: number   // hour in 24h (e.g. 8 = 8am)
  end:   number   // hour in 24h (e.g. 11 = 11am)
}

export interface HappyHourSchedule {
  weekday: HappyHourWindow[]
  weekend: HappyHourWindow[]
}

export interface Location {
  id:          LocationId
  name:        string
  nameShort:   string
  badge:       string
  flagship:    boolean
  address: {
    street:  string
    city:    string
    state:   string
    zip:     string
    full:    string
  }
  phone:          string
  hours:          HoursEntry[]
  happyHour:      HappyHourSchedule
  happyHourDisplay: { weekday: string; weekend?: string }
  coordinates: { lat: number; lng: number }
  googleMapsUrl:   string
  /** Reserved for future online ordering — not active */
  toastOrderUrl?:  string
}

// ─── Fort Lauderdale — Flagship ───────────────────────────────
const fortLauderdale: Location = {
  id:        'fort-lauderdale',
  name:      'Fort Lauderdale',
  nameShort: 'Fort Lauderdale',
  badge:     '',
  flagship:  true,
  address: {
    street: '825 N Federal Hwy',
    city:   'Fort Lauderdale',
    state:  'FL',
    zip:    '33304',
    full:   '825 N Federal Hwy, Fort Lauderdale, FL 33304',
  },
  phone: '(954) 555-0100',
  hours: [
    { days: 'Mon – Thu', hours: '8am – 2am'  },
    { days: 'Friday',    hours: '8am – 3am'  },
    { days: 'Saturday',  hours: '10am – 3am' },
    { days: 'Sunday',    hours: '10am – 2am' },
  ],
  happyHour: {
    weekday: [
      { label: '8–11am',   start: 8,  end: 11 },
      { label: '3–7pm',    start: 15, end: 19 },
      { label: '12–2am',   start: 24, end: 26 },
    ],
    weekend: [
      { label: '10am–3pm', start: 10, end: 15 },
      { label: '5–7pm',    start: 17, end: 19 },
      { label: '12–3am',   start: 24, end: 27 },
    ],
  },
  happyHourDisplay: {
    weekday: '8–11am · 3–7pm · 12–2am',
    weekend: '10am–3pm · 5–7pm · 12–3am',
  },
  coordinates:   { lat: 26.1224, lng: -80.1373 },
  googleMapsUrl: 'https://maps.google.com/?q=825+N+Federal+Hwy+Fort+Lauderdale+FL+33304',
}

// ─── Hollywood / Cooper City ──────────────────────────────────
const hollywood: Location = {
  id:        'hollywood',
  name:      'Hollywood / Cooper City',
  nameShort: 'Hollywood',
  badge:     '',
  flagship:  false,
  address: {
    street: '9630 Stirling Rd Ste 104',
    city:   'Hollywood',
    state:  'FL',
    zip:    '33024',
    full:   '9630 Stirling Rd Ste 104, Hollywood, FL 33024',
  },
  phone: '(954) 555-0200',
  hours: [
    { days: 'Daily', hours: '11am – 2am' },
  ],
  happyHour: {
    weekday: [
      { label: '12–4pm',  start: 12, end: 16 },
      { label: '12–2am',  start: 24, end: 26 },
    ],
    weekend: [
      { label: '12–4pm',  start: 12, end: 16 },
      { label: '12–2am',  start: 24, end: 26 },
    ],
  },
  happyHourDisplay: {
    weekday: '12–4pm · 12–2am',
  },
  coordinates:   { lat: 26.0112, lng: -80.2717 },
  googleMapsUrl: 'https://maps.google.com/?q=9630+Stirling+Rd+Ste+104+Hollywood+FL+33024',
}

export const LOCATIONS: Record<LocationId, Location> = {
  'fort-lauderdale': fortLauderdale,
  'hollywood':       hollywood,
}

export const LOCATIONS_LIST: Location[] = [fortLauderdale, hollywood]

// ─── Is open now (approximate) ────────────────────────────────
export function isOpenNow(location: Location): boolean {
  const now  = new Date()
  const hour = now.getHours()
  const day  = now.getDay() // 0=Sun

  if (location.id === 'fort-lauderdale') {
    if (day === 5) return hour >= 8              // Fri 8am–3am
    if (day === 6) return hour >= 10             // Sat 10am–3am
    if (day === 0) return hour >= 10             // Sun 10am–2am
    return hour >= 8                             // Mon–Thu 8am–2am
  }
  // Hollywood: Daily 11am–2am
  return hour >= 11
}

// ─── Is happy hour now ────────────────────────────────────────
export function isHappyHourNow(location: Location): boolean {
  const now   = new Date()
  const hour  = now.getHours()
  const day   = now.getDay()
  const isWeekend = day === 0 || day === 6
  const windows = isWeekend
    ? location.happyHour.weekend
    : location.happyHour.weekday

  return windows.some(w => {
    // Handle midnight windows (start >= 24) by checking next-day hour
    if (w.start >= 24) return hour < (w.end - 24)
    return hour >= w.start && hour < w.end
  })
}

import { FORT_LAUDERDALE, getVenueClock, isOpenNow } from './locations'

export interface DayEvent {
  day: string
  name: string
  time: string
}

export const FORT_LAUDERDALE_SCHEDULE: readonly DayEvent[] = [
  { day: 'Monday', name: 'All-Day Happy Hour', time: 'All day' },
  { day: 'Tuesday', name: 'Doubles Pool', time: '10 PM' },
  { day: 'Wednesday', name: '$2 Shells All Day', time: 'All day' },
  { day: 'Thursday', name: 'FIFA Tournament', time: '9:30 PM' },
  { day: 'Friday', name: 'Friday Night Party', time: 'All night' },
  { day: 'Saturday', name: 'Singles Pool', time: '10 PM' },
  { day: 'Sunday', name: 'Football & Free Pizza', time: '1 PM' },
]

// Thanksgiving week only. Friday at 08:00 UTC is 3:00 AM Eastern,
// after the Thursday overnight window for the regular weekly schedule.
const THANKSGIVING_NOTICE_START = Date.parse('2026-11-22T00:00:00-05:00')
const THANKSGIVING_NOTICE_END = Date.parse('2026-11-27T03:00:00-05:00')

export function isThanksgivingSchedule(now = new Date()): boolean {
  const time = now.getTime()
  return time >= THANKSGIVING_NOTICE_START && time < THANKSGIVING_NOTICE_END
}

export function getWeeklySchedule(showThanksgiving: boolean): readonly DayEvent[] {
  if (!showThanksgiving) return FORT_LAUDERDALE_SCHEDULE

  return FORT_LAUDERDALE_SCHEDULE.map(event =>
    event.day === 'Thursday'
      ? { ...event, name: 'Thanksgiving Pajama Party', time: 'Nov 26' }
      : event
  )
}

export const HAPPY_HOUR = {
  allDay: 'Monday',
  windows: [
    { start: 10, end: 12 },
    { start: 16, end: 19 },
    { start: 1, end: 3 },
  ],
  offers: [
    { name: 'Large teas', price: '$5' },
    { name: 'Double shells', price: '$5' },
    { name: 'Shots', price: '$5' },
  ],
} as const

export function isHappyHourNow(now = new Date()): boolean {
  const { day, hour } = getVenueClock(now)
  const openingHour = FORT_LAUDERDALE.hours.opens
  const businessDay = hour >= openingHour ? day : (day + 6) % 7
  const inDailyWindow = HAPPY_HOUR.windows.some(window => hour >= window.start && hour < window.end)

  return isOpenNow(FORT_LAUDERDALE, now) && (businessDay === 1 || inDailyWindow)
}

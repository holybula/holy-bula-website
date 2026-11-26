import { BUSINESS_HOURS_TEXT, FORT_LAUDERDALE, formatHour, isOpenNow } from './locations'
import { HAPPY_HOUR, getWeeklySchedule, isThanksgivingSchedule } from './events'

export type GuestAnswer = { text: string; href: string; label: string }
const answer = (text: string, href: string, label: string): GuestAnswer => ({ text, href, label })
const team = (text: string) => answer(text, '/contact', 'Contact the Lounge')
const schedule = (text: string) => answer(text, '/events', 'See the event schedule')

export function getGuestAnswer(question: string, now = new Date()): GuestAnswer {
  const q = question.toLowerCase().slice(0, 300).replace(/[’']/g, '')
  if (/\b(emergency|can[’']?t breathe|cannot breathe|trouble breathing)\b/.test(q)) {
    return team('For a medical emergency, call 911. This chat is not monitored.')
  }
  if (/\b(allerg\w*|pregnan\w*|medic\w*|dose|dosage|side effect|sick|unsafe|emergency|how much should i (take|drink)|how many (shots|drinks) should i)\b/.test(q)) {
    return team('I can’t confirm ingredients, allergy safety, or give medical advice. Please check with Lounge staff before ordering.')
  }
  if (/\b(refund|complaint|lost|reservation|reserve|book|private event|private part\w*|manager|hire|hiring|parking|wheelchair|accessible|pet|dog|age|kids|children)\b/.test(q)) {
    return team('The Lounge team can help with that. I can’t confirm or book it here.')
  }
  if (/\b(happy hour|specials)\b/.test(q)) {
    const windows = HAPPY_HOUR.windows.map(({start, end}) => formatHour(start) + '–' + formatHour(end)).join(', ')
    return schedule('The posted happy hour is all day Monday, with daily windows of ' + windows + ' Eastern. Check the events page for changes.')
  }
  if (/\b(tonight|events?|tournament|fifa|pool|football|party|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/.test(q) && !/\b(hours|close|opening|open|delivery)\b/.test(q)) {
    const week = getWeeklySchedule(isThanksgivingSchedule(now))
    const day = week.find(item => new RegExp('\\b' + item.day.toLowerCase() + '\\b').test(q))
    return schedule(day ? day.day + ': ' + day.name + ' (' + day.time + '). Check the schedule before heading out.' : 'Check the current Fort Lauderdale lineup for pool, events and specials. The events page shows any posted holiday changes.')
  }
  if (/\b(hours|close|closes|opening|open|closing)\b/.test(q)) {
    const planned = /\b(right now|open now|are you open|are yall open)\b/.test(q) && !/\b(tonight|tomorrow|thanksgiving|christmas|holiday|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/.test(q)
    return answer((planned ? 'By our regular schedule, we’re ' + (isOpenNow(FORT_LAUDERDALE, now) ? 'open' : 'closed') + ' right now. ' : '') + 'The posted hours are ' + BUSINESS_HOURS_TEXT + ' Eastern daily. Holiday hours can vary.', '/locations', 'Hours and directions')
  }
  if (/\b(address|where|directions|location|cooper city|fort lauderdale)\b/.test(q)) {
    return answer('Our Lounge is at ' + FORT_LAUDERDALE.address.full + '.', '/locations', 'Get directions')
  }
  if (/\b(rewards?|points|loyalty)\b/.test(q)) {
    return answer('See the current rewards page to learn how to join or check your points.', '/rewards', 'Lounge rewards')
  }
  if (/\b(deliver\w*|doordash|uber eats|order online)\b/.test(q)) {
    return answer('See the Lounge’s current delivery options. For help with an existing delivery, use the app where you ordered.', '/order', 'Delivery options')
  }
  if (/\b(alcohol|alcohol-free|beer|wine)\b/.test(q)) {
    return answer('Ascension is an alcohol-free lounge.', '/menu', 'Browse the menu')
  }
  if (/\b(menu|drinks?|food|coffee|prices?|serve|wifi|work|study)\b/.test(q)) {
    if (/\b(wifi|work|study)\b/.test(q)) return answer('The Lounge welcomes guests looking for a place to work or study. Check with the team if you need a specific setup.', '/faq', 'Lounge FAQs')
    return answer('Here’s our posted Fort Lauderdale food and drink menu.', '/menu', 'Browse the menu')
  }
  return team('I don’t have a reliable answer to that. The Lounge team can help.')
}

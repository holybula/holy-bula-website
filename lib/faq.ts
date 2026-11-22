import { FORT_LAUDERDALE } from './locations'

export interface FaqItem {
  id: string
  question: string
  answer: string
  link?: { href: string; label: string }
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what-is-kava',
    question: 'What is kava?',
    answer: 'Kava is a traditional South Pacific drink made from the root of the kava plant. We serve it by the shell.',
  },
  {
    id: 'what-is-kratom',
    question: 'What is kratom?',
    answer: 'Kratom is a botanical from a Southeast Asian tree. We serve kratom teas at the lounge.',
  },
  {
    id: 'need-kava',
    question: 'Do I need to drink kava to come?',
    answer: 'No. We also serve coffee, teas, specialty sodas, protein shakes, and other alcohol-free options.',
    link: { href: '/menu', label: 'Explore the menu' },
  },
  {
    id: 'work-study',
    question: 'Can I work or study at Ascension?',
    answer: 'Yes. During the day, the lounge welcomes students, remote workers, and anyone looking for a place to focus.',
  },
  {
    id: 'at-night',
    question: 'What happens at night?',
    answer: 'Stop by for a drink with friends, play pool, or join one of our weekly events.',
  },
  {
    id: 'alcohol',
    question: 'Do you serve alcohol?',
    answer: 'No. Ascension is an alcohol-free lounge.',
  },
  {
    id: 'events',
    question: 'Do you host events?',
    answer: 'Yes. We host weekly games and social events at the Fort Lauderdale lounge.',
    link: { href: '/events', label: 'View weekly events' },
  },
  {
    id: 'locations',
    question: 'Where are you located?',
    answer: `Find us at ${FORT_LAUDERDALE.address.full}.`,
    link: { href: '/locations', label: 'Hours and directions' },
  },
]

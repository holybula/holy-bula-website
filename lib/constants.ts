// ─── Brand Identity ──────────────────────────────────────────
export const BRAND = {
  name:          'Ascension',
  nameFull:      'Ascension',
  tagline:       'Elevate Your Circle.',
  heroHeadline:  'Elevate Your Circle.',
  heroBrand:     'Business By Day. Social By Night.',

  heroSub:       "Ascension is where South Florida's driven crowd works, connects, and builds — over the best kava, kratom teas, and mocktails in the city.",
  industry:      'Kava Bar & Social Club',
  instagram:     '@holybulausa',
  instagramUrl:  'https://www.instagram.com/holybulausa',
  email:         'holybulausa@gmail.com',
} as const

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Menu',      href: '/menu' },
  { label: 'About',     href: '/about' },
  { label: 'Events',    href: '/events' },
  { label: 'Locations', href: '/locations' },
  { label: 'Rewards',   href: '/rewards' },
  { label: 'FAQs',      href: '/faq' },
] as const

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: 'Contact', href: '/contact' },
  { label: 'Reviews', href: '/reviews' },
] as const

export const NAV_CTA = {
  label: 'Order Online',
} as const

export const ORDERING_COMING_SOON = {
  label:   'Online Ordering Coming Soon',
  message: 'Online ordering is currently being finalized.',
} as const

// ─── Location IDs ─────────────────────────────────────────────
export const LOCATION_IDS = {
  fortLauderdale: 'fort-lauderdale',
  hollywood:      'hollywood',
} as const

export type LocationId = typeof LOCATION_IDS[keyof typeof LOCATION_IDS]

// ─── Who's Here — audience labels only ───────────────────────
export const AUDIENCE_LABELS = [
  'Entrepreneurs',
  'Professionals',
  'Creators',
  'Students',
  'Fitness Community',
] as const

// ─── Section copy ─────────────────────────────────────────────
export const COPY = {
  happyHourEyebrow:  'Happy Hour',
  happyHourNow:      'Happy Hour Now',

  whosHereEyebrow:   "Who's Here",
  whosHereSub:       'Your people are already here.',

  eventsEyebrow:     'Events This Week',
  eventsTitle:       'Something Every Night.',
  eventsNote:        'Schedules may vary. Follow @holybulausa for updates.',

  menuEyebrow:       'What We Pour',
  menuTitle:         'Premium drinks. Zero alcohol.',

  spaceEyebrow:      'The Space',

  rewardsEyebrow:    'Rewards',
  rewardsTitle:      'Every Visit Counts.',
  rewardsBody:       'Earn 10 points for every $1 spent. Redeem for free drinks, event upgrades, and perks.',
  rewardsCTA:        'Join Rewards',

  locationEyebrow:   'Find Us',
  locationTitle:     'Two Locations. One Circle.',
} as const

// ─── Rewards URLs ─────────────────────────────────────────────
export const REWARDS_SIGNUP_URL =
  'https://www.toasttab.com/holy-bula-kava-bar-fort-lauderdale-825-north-federal-highway/rewardsSignup'

export const REWARDS_MEMBER_URL =
  'https://www.toasttab.com/holy-bula-kava-bar-fort-lauderdale-825-north-federal-highway/rewards'

// ─── Social links ─────────────────────────────────────────────
export const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/holybulausa', icon: 'instagram' },
] as const

// ─── Gold gradient text style (inline) ───────────────────────
export const GOLD_GRADIENT_TEXT = {
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  backgroundImage: 'linear-gradient(135deg, #D4AF37 0%, #F5D76E 50%, #C9A227 100%)',
} as const

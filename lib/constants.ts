export const BRAND = {
  nameFull: 'Ascension Kava Bar & Lounge',
  instagram: '@ascensionloungeusa',
  instagramUrl: 'https://www.instagram.com/ascensionloungeusa',
  email: 'info@ascensionlounge.com',
} as const

export const NAV_LINKS = [
  { label: 'Events', href: '/events' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/about' },
  { label: 'Visit', href: '/locations' },
  { label: 'Rewards', href: '/rewards' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: 'Reviews', href: '/reviews' },
] as const

export const ORDERING_COMING_SOON = {
  label: 'Online Ordering Coming Soon',
  message: 'Online ordering is currently being finalized.',
} as const

export type LocationId = 'fort-lauderdale'

export const AUDIENCE_LABELS = [
  'Entrepreneurs',
  'Professionals',
  'Creators',
  'Students',
  'Fitness Community',
] as const

export const COPY = {
  whosHereEyebrow: "Who's Here",
  whosHereSub: 'Your people are already here.',
  rewardsEyebrow: 'Rewards',
  rewardsTitle: 'Every Visit Counts.',
  rewardsBody: 'Earn 10 points for every $1 spent. Redeem for free drinks, event upgrades, and perks.',
  rewardsCTA: 'Join Rewards',
} as const

export const REWARDS_SIGNUP_URL =
  'https://www.toasttab.com/holy-bula-kava-bar-fort-lauderdale-825-north-federal-highway/rewardsSignup'

export const REWARDS_MEMBER_URL =
  'https://www.toasttab.com/holy-bula-kava-bar-fort-lauderdale-825-north-federal-highway/rewards'

export const GOLD_GRADIENT_TEXT = {
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  backgroundImage: 'linear-gradient(135deg, #d6ac76 0%, #f5ddbc 50%, #cda16b 100%)',
} as const

import type { LocationId } from './constants'

// What We Pour — six categories with real Ascension data

export interface LocationMenu {
  image: string
  alt:   string
}

export const LOCATION_MENUS: Record<LocationId, LocationMenu> = {
  'fort-lauderdale': {
    image: '/images/menu/fort-lauderdale-menu.PNG',
    alt:   'Ascension Fort Lauderdale drink menu — kava, kratom teas, coffee, matcha, mocktails, and more',
  },
  'hollywood': {
    image: '/images/menu/hollywood-menu.PNG',
    alt:   'Ascension Hollywood drink menu — kava, kratom teas, coffee, matcha, mocktails, and more',
  },
}

export interface PourCategory {
  id:          string
  name:        string
  description: string   // one sentence max
  startingPrice: number
  featured:    string   // hero item name
  color:       string   // accent color
}

export const POUR_CATEGORIES: PourCategory[] = [
  {
    id:           'kava',
    name:         'Kava',
    description:  'Traditional Pacific Island herb. Promotes calm, eases stress, and supports well-being.',
    startingPrice: 4.95,
    featured:     'Single, Double, or Triple Shell',
    color:        '#D4AF37',
  },
  {
    id:           'kratom-tea',
    name:         'Kratom Tea',
    description:  'Clean focus up front. Euphoric calm on the back end. Five signature blends, three sizes.',
    startingPrice: 9.95,
    featured:     'Blue Harbor · White Gold · Golden Coast · Cherry Vice · Pink Lotus',
    color:        '#9333ea',
  },
  {
    id:           'coffee',
    name:         'Coffee',
    description:  'Iced coffee and double espresso. Oat or whole milk. Strong and simple.',
    startingPrice: 3.95,
    featured:     'Iced Coffee · Double Espresso',
    color:        '#B8860B',
  },
  {
    id:           'matcha',
    name:         'Matcha',
    description:  'Ceremonial-grade matcha. Vanilla or strawberry latte with your choice of milk.',
    startingPrice: 10.95,
    featured:     'Vanilla Matcha Latte · Strawberry Matcha Latte',
    color:        '#4ade80',
  },
  {
    id:           'mocktails',
    name:         'Mocktails',
    description:  'Four crafted flavors — Golden Mirage, Pink Current, Moonwater, Coco Rose.',
    startingPrice: 12.95,
    featured:     'Golden Mirage · Moonwater · Pink Current · Coco Rose',
    color:        '#c084fc',
  },
  {
    id:           'protein',
    name:         'Protein Shakes',
    description:  'Vanilla Ice Cream or Chocolate Fudge. Add PB2 or an extra scoop.',
    startingPrice: 11.95,
    featured:     'Vanilla Ice Cream · Chocolate Fudge',
    color:        '#D4AF37',
  },
]

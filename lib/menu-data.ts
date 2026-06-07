import type { LocationId } from './constants'

// ─── Types ────────────────────────────────────────────────────

export type MenuCategoryId =
  | 'kratom-teas'
  | 'kava'
  | 'shots'
  | 'house-teas'
  | 'protein'
  | 'coffee'
  | 'matcha'
  | 'mocktails'

export interface MenuSize {
  label: string
  price: number
}

export interface MenuAddOn {
  id:    string
  name:  string
  price: number
}

export interface MenuItem {
  id:          string
  name:        string
  description?: string
  /** Single price when no size options */
  price?:      number
  sizes?:      MenuSize[]
  addOns?:     MenuAddOn[]
  note?:       string
}

export interface MenuCategory {
  id:           MenuCategoryId
  name:         string
  description?: string
  items:        MenuItem[]
  /** Shared add-ons for all items in category */
  addOns?:      MenuAddOn[]
}

export interface LocationMenuCatalog {
  locationId: LocationId
  categories: MenuCategory[]
}

// ─── Category metadata ────────────────────────────────────────

export const MENU_CATEGORY_ORDER: MenuCategoryId[] = [
  'kratom-teas',
  'kava',
  'shots',
  'house-teas',
  'protein',
  'coffee',
  'matcha',
  'mocktails',
]

export const MENU_CATEGORY_META: Record<MenuCategoryId, { name: string; color: string }> = {
  'kratom-teas': { name: 'Kratom Teas', color: '#9333ea' },
  'kava':        { name: 'Kava',        color: '#D4AF37' },
  'shots':       { name: 'Shots',       color: '#c084fc' },
  'house-teas':  { name: 'House Teas',  color: '#4ade80' },
  'protein':     { name: 'Protein',     color: '#F5D76E' },
  'coffee':      { name: 'Coffee',      color: '#b8911f' },
  'matcha':      { name: 'Matcha',      color: '#4ade80' },
  'mocktails':   { name: 'Mocktails',   color: '#c084fc' },
}

// ─── Fort Lauderdale ──────────────────────────────────────────

const fortLauderdaleCatalog: LocationMenuCatalog = {
  locationId: 'fort-lauderdale',
  categories: [
    {
      id: 'kratom-teas',
      name: 'Kratom Teas',
      description: 'Clean focus up front. Euphoric calm on the back end. Five signature blends.',
      items: [
        { id: 'fl-kt-blue-harbor',   name: 'Blue Harbor',   sizes: [{ label: '16oz Small', price: 9.95 }, { label: '24oz Medium', price: 14.95 }, { label: '32oz Large', price: 17.95 }] },
        { id: 'fl-kt-white-gold',   name: 'White Gold',    sizes: [{ label: '16oz Small', price: 9.95 }, { label: '24oz Medium', price: 14.95 }, { label: '32oz Large', price: 17.95 }] },
        { id: 'fl-kt-golden-coast', name: 'Golden Coast',  sizes: [{ label: '16oz Small', price: 9.95 }, { label: '24oz Medium', price: 14.95 }, { label: '32oz Large', price: 17.95 }] },
        { id: 'fl-kt-cherry-vice',  name: 'Cherry Vice',   sizes: [{ label: '16oz Small', price: 9.95 }, { label: '24oz Medium', price: 14.95 }, { label: '32oz Large', price: 17.95 }] },
        { id: 'fl-kt-pink-lotus',   name: 'Pink Lotus',    sizes: [{ label: '16oz Small', price: 9.95 }, { label: '24oz Medium', price: 14.95 }, { label: '32oz Large', price: 17.95 }] },
      ],
    },
    {
      id: 'kava',
      name: 'Kava',
      description: 'Traditionally used in Pacific Island cultures to promote relaxation, ease stress, and support calm.',
      items: [
        {
          id: 'fl-kava-shell',
          name: 'Traditional Kava Shell',
          sizes: [
            { label: 'Single', price: 4.95 },
            { label: 'Double', price: 8.95 },
            { label: 'Triple', price: 12.95 },
          ],
        },
      ],
    },
    {
      id: 'shots',
      name: 'Shots',
      addOns: [{ id: 'fl-shot-add-drink', name: 'Add any botanical shot to a drink', price: 3.95 }],
      items: [
        { id: 'fl-shot-kanna',          name: 'Kanna',          description: 'Botanical shot', price: 6.95 },
        { id: 'fl-shot-damiana',        name: 'Damiana',        description: 'Botanical shot', price: 6.95 },
        { id: 'fl-shot-blue-lotus',     name: 'Blue Lotus',     description: 'Botanical shot', price: 6.95 },
        { id: 'fl-shot-kratom-extract', name: 'Kratom Extract', description: 'Botanical shot', price: 6.95 },
        { id: 'fl-shot-the-fix',        name: 'The Fix',        price: 6.95 },
        { id: 'fl-shot-kind',           name: 'Kind Shot',      price: 14.00 },
        { id: 'fl-shot-uplift',         name: 'Uplift Shot',    price: 12.00 },
        { id: 'fl-shot-black-velvet',   name: 'Black Velvet',   price: 7.95 },
      ],
    },
    {
      id: 'house-teas',
      name: 'House Teas',
      addOns: [{ id: 'fl-ht-flavor', name: 'Add flavoring', price: 1.00 }],
      items: [
        {
          id: 'fl-ht-green',
          name: 'Green Vein',
          description: 'Clean energy and mental clarity. Enhances focus and productive flow.',
          sizes: [{ label: '16oz Small', price: 6.95 }, { label: '24oz Medium', price: 9.95 }, { label: '32oz Large', price: 13.95 }],
        },
        {
          id: 'fl-ht-red',
          name: 'Red Vein',
          description: 'Promotes relaxation and balance. Eases stress and supports calm.',
          sizes: [{ label: '16oz Small', price: 6.95 }, { label: '24oz Medium', price: 9.95 }, { label: '32oz Large', price: 13.95 }],
        },
      ],
    },
    {
      id: 'protein',
      name: 'Protein',
      items: [
        {
          id: 'fl-protein-vanilla',
          name: 'Vanilla Ice Cream',
          sizes: [{ label: 'Small', price: 11.95 }, { label: 'Large', price: 14.95 }],
          addOns: [
            { id: 'fl-protein-scoop', name: 'Extra scoop of protein (25g)', price: 2.95 },
            { id: 'fl-protein-pb2', name: 'Add PB2', price: 1.00 },
          ],
        },
        {
          id: 'fl-protein-chocolate',
          name: 'Chocolate Fudge',
          sizes: [{ label: 'Small', price: 11.95 }, { label: 'Large', price: 14.95 }],
          addOns: [
            { id: 'fl-protein-scoop', name: 'Extra scoop of protein (25g)', price: 2.95 },
            { id: 'fl-protein-pb2', name: 'Add PB2', price: 1.00 },
          ],
        },
      ],
    },
    {
      id: 'coffee',
      name: 'Coffee',
      description: 'Oat milk or whole milk available.',
      addOns: [
        { id: 'fl-coffee-flavor', name: 'Add flavoring', price: 1.00 },
        { id: 'fl-coffee-creamer', name: 'Add creamer', price: 1.00 },
      ],
      items: [
        { id: 'fl-coffee-iced',      name: 'Iced Coffee',      price: 5.95 },
        { id: 'fl-coffee-espresso',  name: 'Double Espresso',  price: 3.95 },
      ],
    },
    {
      id: 'matcha',
      name: 'Matcha',
      description: 'Ceremonial-grade matcha lattes.',
      items: [
        { id: 'fl-matcha-vanilla',    name: 'Vanilla Matcha Latte',    price: 10.95 },
        { id: 'fl-matcha-strawberry', name: 'Strawberry Matcha Latte', price: 11.95 },
      ],
    },
    {
      id: 'mocktails',
      name: 'Mocktails',
      description: '16oz crafted alcohol-free cocktails.',
      items: [
        { id: 'fl-mock-golden', name: 'Golden Mirage', description: 'Passionfruit, mango, lime, blue agave, club soda', sizes: [{ label: 'Single', price: 12.95 }, { label: 'Double', price: 16.95 }] },
        { id: 'fl-mock-pink',   name: 'Pink Current',  description: 'Watermelon, raspberry, lime, blue agave, club soda', sizes: [{ label: 'Single', price: 12.95 }, { label: 'Double', price: 16.95 }] },
        { id: 'fl-mock-moon',   name: 'Moonwater',     description: 'Butterfly pea tea, lime, blue agave, club soda', sizes: [{ label: 'Single', price: 12.95 }, { label: 'Double', price: 16.95 }] },
        { id: 'fl-mock-coco',   name: 'Coco Rose',     description: 'Strawberry, coconut milk, blue agave, club soda', sizes: [{ label: 'Single', price: 12.95 }, { label: 'Double', price: 16.95 }] },
      ],
    },
  ],
}

// ─── Hollywood ────────────────────────────────────────────────

const hollywoodCatalog: LocationMenuCatalog = {
  locationId: 'hollywood',
  categories: [
    {
      id: 'kratom-teas',
      name: 'Kratom Teas',
      description: 'Sugar-free kratom teas with smooth focus and euphoric lift. Ask about weekly specialty flavors.',
      items: [
        { id: 'hw-kt-blue-razz',    name: 'Blue Razz',    sizes: [{ label: '16oz Small', price: 7.95 }, { label: '24oz Medium', price: 14.95 }, { label: '32oz Large', price: 17.95 }] },
        { id: 'hw-kt-straw-kiwi',   name: 'Straw-Kiwi',   sizes: [{ label: '16oz Small', price: 7.95 }, { label: '24oz Medium', price: 14.95 }, { label: '32oz Large', price: 17.95 }] },
        { id: 'hw-kt-watermelon',   name: 'Watermelon',   sizes: [{ label: '16oz Small', price: 7.95 }, { label: '24oz Medium', price: 14.95 }, { label: '32oz Large', price: 17.95 }] },
        { id: 'hw-kt-white-grape',  name: 'White Grape',  sizes: [{ label: '16oz Small', price: 7.95 }, { label: '24oz Medium', price: 14.95 }, { label: '32oz Large', price: 17.95 }] },
        { id: 'hw-kt-red-razz',     name: 'Red Razz',     sizes: [{ label: '16oz Small', price: 7.95 }, { label: '24oz Medium', price: 14.95 }, { label: '32oz Large', price: 17.95 }] },
      ],
    },
    {
      id: 'kava',
      name: 'Kava',
      addOns: [{ id: 'hw-kava-creamer', name: 'Add creamer', price: 1.00 }],
      items: [
        {
          id: 'hw-kava-shell',
          name: 'Traditional Kava Shell',
          sizes: [
            { label: 'Single', price: 4.95 },
            { label: 'Double', price: 8.95 },
            { label: 'Triple', price: 12.95 },
          ],
        },
      ],
    },
    {
      id: 'shots',
      name: 'Shots',
      items: [
        { id: 'hw-shot-normal',  name: 'Lactone Shot — Normal',  price: 6.95, addOns: [{ id: 'hw-shot-flavor-straw', name: 'Add strawberry flavor', price: 1.49 }, { id: 'hw-shot-flavor-mango', name: 'Add mango flavor', price: 1.49 }] },
        { id: 'hw-shot-coquito', name: 'Lactone Shot — Coquito', price: 8.95 },
        { id: 'hw-boost-kanna',  name: 'Kanna Boost',            description: '1 ml', price: 6.95 },
        { id: 'hw-boost-lotus',  name: 'Blue Lotus Boost',       description: '3 ml', price: 6.95 },
        { id: 'hw-boost-kratom', name: 'Kratom Extract Boost',   price: 3.95 },
      ],
    },
    {
      id: 'house-teas',
      name: 'House Teas',
      addOns: [{ id: 'hw-ht-flavor', name: 'Add flavor', price: 0.95 }],
      items: [
        {
          id: 'hw-house-tea',
          name: 'House Tea',
          sizes: [{ label: 'Small', price: 4.95 }, { label: 'Medium', price: 9.95 }, { label: 'Large', price: 12.95 }],
        },
      ],
    },
    {
      id: 'protein',
      name: 'Protein',
      description: 'Smoothies with optional protein boost.',
      items: [
        { id: 'hw-smoothie-straw-banana',    name: 'Straw-Banana Smoothie',    price: 9.95, addOns: [{ id: 'hw-smoothie-protein', name: 'Add protein powder', price: 2.49 }] },
        { id: 'hw-smoothie-pineapple-mango', name: 'Pineapple Mango Smoothie', price: 9.95, addOns: [{ id: 'hw-smoothie-protein', name: 'Add protein powder', price: 2.49 }] },
        { id: 'hw-smoothie-straw-mango',   name: 'Straw-Mango Smoothie',     price: 9.95, addOns: [{ id: 'hw-smoothie-protein', name: 'Add protein powder', price: 2.49 }] },
      ],
    },
    {
      id: 'coffee',
      name: 'Coffee',
      description: 'Whole, almond, or oat milk available.',
      addOns: [{ id: 'hw-coffee-creamer', name: 'Add creamer', price: 1.00 }],
      items: [
        { id: 'hw-coffee-hot',        name: 'Hot Coffee',           price: 5.95 },
        { id: 'hw-coffee-iced',       name: 'Iced Coffee',          price: 5.95 },
        { id: 'hw-coffee-espresso',   name: 'Espresso Double Shot', price: 3.95 },
        { id: 'hw-coffee-cappuccino', name: 'Cappuccino',           price: 5.95 },
      ],
    },
    {
      id: 'matcha',
      name: 'Matcha',
      description: 'Ask our team about matcha availability.',
      items: [],
    },
    {
      id: 'mocktails',
      name: 'Mocktails',
      items: [
        { id: 'hw-drink-rapture', name: 'Rapture', price: 10.95 },
        { id: 'hw-drink-redbull', name: 'Red Bull', price: 3.95 },
        { id: 'hw-drink-celsius', name: 'Celsius', price: 3.95 },
        { id: 'hw-drink-soda',    name: 'Soda', price: 2.49 },
        { id: 'hw-snacks',        name: 'Snacks & Candy', price: 2.49 },
      ],
    },
  ],
}

export const MENU_CATALOGS: Record<LocationId, LocationMenuCatalog> = {
  'fort-lauderdale': fortLauderdaleCatalog,
  'hollywood':       hollywoodCatalog,
}

export function getCategoriesForLocation(locationId: LocationId): MenuCategory[] {
  return MENU_CATALOGS[locationId].categories.filter(c => c.items.length > 0)
}

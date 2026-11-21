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

export const MENU_CATEGORIES: MenuCategory[] = [
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
]

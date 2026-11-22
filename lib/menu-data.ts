export type MenuCategoryId =
  | 'kratom-teas'
  | 'kava'
  | 'shots'
  | 'house-teas'
  | 'protein'
  | 'coffee'
  | 'food'
  | 'sweets'

export interface MenuSize {
  label: string
  price: number
}

export interface MenuAddOn {
  id: string
  name: string
  price: number
}

export interface MenuOptionGroup {
  label: string
  values: string[]
}

export interface MenuItem {
  id: string
  name: string
  description?: string
  /** Single price when no size options */
  price?: number
  sizes?: MenuSize[]
  options?: MenuOptionGroup[]
  addOns?: MenuAddOn[]
  note?: string
}

export interface MenuCategory {
  id: MenuCategoryId
  name: string
  description?: string
  items: MenuItem[]
  /** Shared add-ons for all items in category */
  addOns?: MenuAddOn[]
}

const addShotToDrink: MenuAddOn = {
  id: 'fl-shot-add-drink',
  name: 'Add to a drink',
  price: 3.95,
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'kratom-teas',
    name: 'Kratom Teas',
    items: [
      {
        id: 'fl-kratom-tea',
        name: 'Kratom Tea',
        sizes: [
          { label: 'Small (12 oz)', price: 7.95 },
          { label: 'Large (24 oz)', price: 12.49 },
        ],
        options: [
          {
            label: 'Flavors',
            values: [
              'Blue Razz',
              'Blue Apple',
              'Sour Cherry',
              'Cranberry',
              'Sour Green Apple',
              'Strawberry Kiwi',
              'White Grape',
              'Passionfruit',
              'Mango',
            ],
          },
        ],
        note: 'Ask about our new Black Label.',
      },
      {
        id: 'fl-kratom-special-tea',
        name: 'Kratom Special Tea',
        sizes: [
          { label: 'Gallon', price: 54.95 },
          { label: 'Half gallon', price: 34.95 },
        ],
      },
    ],
  },
  {
    id: 'kava',
    name: 'Kava',
    items: [
      {
        id: 'fl-kava-shell',
        name: 'Kava Shell',
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
      { id: 'fl-shot-triple-tigg', name: 'Triple Tigg', price: 19.95 },
      { id: 'fl-shot-kanna', name: 'Kanna', price: 6.95, addOns: [addShotToDrink] },
      { id: 'fl-shot-damiana', name: 'Damiana', price: 6.95, addOns: [addShotToDrink] },
      { id: 'fl-shot-blue-lotus', name: 'Blue Lotus', price: 6.95, addOns: [addShotToDrink] },
      { id: 'fl-shot-kratom-extract', name: 'Kratom Extract', price: 6.95, addOns: [addShotToDrink] },
      { id: 'fl-shot-the-fix', name: 'The Fix', price: 6.95 },
      { id: 'fl-shot-kind', name: 'Kind', price: 12 },
      { id: 'fl-shot-uplift', name: 'Uplift', price: 14 },
      { id: 'fl-shot-function', name: 'Function', price: 12 },
    ],
  },
  {
    id: 'house-teas',
    name: 'House Teas',
    items: [
      {
        id: 'fl-house-tea',
        name: 'House Tea',
        sizes: [
          { label: 'Small (12 oz)', price: 6.95 },
          { label: 'Large (24 oz)', price: 9.95 },
        ],
        options: [{ label: 'Varieties', values: ['Green Vein', 'White Vein', 'Red Vein'] }],
        addOns: [{ id: 'fl-ht-flavor', name: 'Flavoring', price: 1 }],
      },
    ],
  },
  {
    id: 'protein',
    name: 'Protein Shakes',
    items: [
      {
        id: 'fl-protein-shake',
        name: 'Protein Shake',
        sizes: [
          { label: 'Small (12 oz)', price: 9.95 },
          { label: 'Large (24 oz)', price: 14.95 },
        ],
        options: [{ label: 'Flavors', values: ['Vanilla Ice Cream', 'Chocolate Fudge'] }],
        addOns: [
          { id: 'fl-protein-scoop', name: 'Extra scoop of protein (25 g)', price: 2.95 },
          { id: 'fl-protein-peanut-butter', name: 'Peanut butter protein', price: 1 },
        ],
      },
    ],
  },
  {
    id: 'coffee',
    name: 'Coffee & Sodas',
    items: [
      {
        id: 'fl-coffee-iced',
        name: 'Iced Coffee',
        price: 5.95,
        options: [{ label: 'Milk options', values: ['Whole milk', 'Oat milk'] }],
      },
      {
        id: 'fl-coffee-espresso',
        name: 'Double Espresso',
        price: 3.95,
        options: [{ label: 'Milk options', values: ['Whole milk', 'Oat milk'] }],
      },
      {
        id: 'fl-sodas',
        name: 'Sodas',
        price: 9.95,
        options: [
          {
            label: 'Flavors',
            values: [
              'Cherry Bomb',
              'Passionfruit',
              'Dr. Rabbit',
              'Raspberry Lemonade',
              'Lemon Ice Tea',
              'Root Beer',
              'Mangoberry',
              'Sweet Peach',
              'Watermelon Candy',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'food',
    name: 'Food',
    items: [
      {
        id: 'fl-empanadas',
        name: 'Empanadas',
        sizes: [
          { label: 'One empanada', price: 6.95 },
          { label: 'Two empanadas', price: 10 },
        ],
        options: [
          {
            label: 'Fillings',
            values: ['Chicken & Cheese', 'Beef & Cheese', 'Ham & Cheese', 'Chorizo & Cheese', 'Cheese'],
          },
          { label: 'Sauces', values: ['Spicy mayo', 'Cilantro'] },
        ],
      },
      { id: 'fl-margherita-pizza', name: 'Margherita Pizza', price: 13.95 },
    ],
  },
  {
    id: 'sweets',
    name: 'Sweets',
    description: 'Protein packed.',
    items: [
      { id: 'fl-protein-cookies', name: 'Protein Cookies', price: 9.95 },
      { id: 'fl-cinnamon-buns', name: 'Cinnamon Buns', price: 9.95 },
    ],
  },
]

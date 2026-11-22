// Online-only image map for exact matches in the supplied photo handoff.
export interface MenuPhoto {
  src: string
  size?: string
  flavor?: string
}

export const MENU_PHOTOS: Partial<Record<string, readonly MenuPhoto[]>> = {
  'fl-empanadas': [
    { src: '/images/menu/items/1-empanada.webp', size: 'One empanada' },
    { src: '/images/menu/items/2-empanadas.webp', size: 'Two empanadas' },
  ],
  'fl-protein-shake': [
    { src: '/images/menu/items/vanilla-12oz.webp', size: 'Small (12 oz)', flavor: 'Vanilla Ice Cream' },
    { src: '/images/menu/items/chocolate-12oz.webp', size: 'Small (12 oz)', flavor: 'Chocolate Fudge' },
    { src: '/images/menu/items/vanilla-24oz.webp', size: 'Large (24 oz)', flavor: 'Vanilla Ice Cream' },
    { src: '/images/menu/items/chocolate-24oz.webp', size: 'Large (24 oz)', flavor: 'Chocolate Fudge' },
  ],
  'fl-shot-uplift': [
    { src: '/images/menu/items/uplift.webp' },
  ],
  'fl-shot-function': [
    { src: '/images/menu/items/function.webp' },
  ],
  'fl-shot-kind': [
    { src: '/images/menu/items/kind.webp' },
  ],
  'fl-shot-kratom-extract': [
    { src: '/images/menu/items/ktx.webp' },
  ],
  'fl-shot-damiana': [
    { src: '/images/menu/items/dmina.webp' },
  ],
  'fl-shot-blue-lotus': [
    { src: '/images/menu/items/bl-lts.webp' },
  ],
  'fl-shot-kanna': [
    { src: '/images/menu/items/kna.webp' },
  ],
  'fl-kratom-tea': [
    { src: '/images/menu/items/blue-razz-12oz.webp', size: 'Small (12 oz)', flavor: 'Blue Razz' },
    { src: '/images/menu/items/sour-cherry-12oz.webp', size: 'Small (12 oz)', flavor: 'Sour Cherry' },
    { src: '/images/menu/items/cranberry-12oz.webp', size: 'Small (12 oz)', flavor: 'Cranberry' },
    { src: '/images/menu/items/sour-green-apple-12oz.webp', size: 'Small (12 oz)', flavor: 'Sour Green Apple' },
    { src: '/images/menu/items/strawberry-kiwi-12oz.webp', size: 'Small (12 oz)', flavor: 'Strawberry Kiwi' },
    { src: '/images/menu/items/white-grape-12oz.webp', size: 'Small (12 oz)', flavor: 'White Grape' },
    { src: '/images/menu/items/passionfruit-12oz.webp', size: 'Small (12 oz)', flavor: 'Passionfruit' },
    { src: '/images/menu/items/mango-12oz.webp', size: 'Small (12 oz)', flavor: 'Mango' },
    { src: '/images/menu/items/blue-razz-24oz.webp', size: 'Large (24 oz)', flavor: 'Blue Razz' },
    { src: '/images/menu/items/sour-cherry-24oz.webp', size: 'Large (24 oz)', flavor: 'Sour Cherry' },
    { src: '/images/menu/items/cranberry-24oz.webp', size: 'Large (24 oz)', flavor: 'Cranberry' },
    { src: '/images/menu/items/sour-green-apple-24oz.webp', size: 'Large (24 oz)', flavor: 'Sour Green Apple' },
    { src: '/images/menu/items/strawberry-kiwi-24oz.webp', size: 'Large (24 oz)', flavor: 'Strawberry Kiwi' },
    { src: '/images/menu/items/white-grape-24oz.webp', size: 'Large (24 oz)', flavor: 'White Grape' },
    { src: '/images/menu/items/passionfruit-24oz.webp', size: 'Large (24 oz)', flavor: 'Passionfruit' },
    { src: '/images/menu/items/mango-24oz.webp', size: 'Large (24 oz)', flavor: 'Mango' },
  ],
}

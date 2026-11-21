'use client'

import { useState } from 'react'
import { MENU_CATEGORIES } from '@/lib/menu-data'
import MenuItemCard from '@/components/menu/MenuItemCard'

export default function InteractiveMenu() {
  const [category, setCategory] = useState(MENU_CATEGORIES[0])

  return (
    <section className="container-hb pb-14 pt-8 sm:pb-20 sm:pt-12" aria-label="Browse the drink menu">
      <ul className="grid grid-cols-2 gap-2.5 xs:grid-cols-3 min-[480px]:grid-cols-4 xl:grid-cols-8" aria-label="Drink categories">
        {MENU_CATEGORIES.map(option => (
          <li key={option.id}>
            <button
              type="button"
              aria-pressed={category.id === option.id}
              aria-controls="menu-category"
              onClick={() => setCategory(option)}
              className={`min-h-11 w-full border px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hb-gold ${
                category.id === option.id
                  ? 'border-hb-gold bg-hb-gold text-[#100e10]'
                  : 'border-white/20 text-[#d8ccc0] hover:border-hb-gold/70 hover:text-[#f5ecdc]'
              }`}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>

      <div id="menu-category" className="mt-9 sm:mt-12" aria-labelledby="menu-category-title">
        <div className="mb-6 border-b border-hb-gold/35 pb-5">
          <h2 id="menu-category-title" aria-live="polite" className="font-display text-4xl font-normal leading-none tracking-tight text-[#f5ecdc] sm:text-5xl">
            {category.name}
          </h2>
          {category.description && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#d8ccc0] sm:text-base">
              {category.description}
            </p>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map(item => (
            <MenuItemCard key={item.id} item={item} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

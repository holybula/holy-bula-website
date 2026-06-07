'use client'

import { useState, useMemo } from 'react'
import {
  getCategoriesForLocation,
  MENU_CATEGORY_META,
  type MenuCategoryId,
} from '@/lib/menu-data'
import { LOCATIONS_LIST } from '@/lib/locations'
import type { LocationId } from '@/lib/constants'
import MenuItemCard from '@/components/menu/MenuItemCard'

const TAB_LABELS: Record<LocationId, string> = {
  'fort-lauderdale': 'Fort Lauderdale',
  'hollywood':       'Hollywood',
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-4 py-3 text-[0.625rem] tracking-[0.18em] uppercase font-medium
        border-b-2 transition-all duration-200 whitespace-nowrap
        ${active ? 'text-hb-gold border-hb-gold' : 'text-white/30 border-transparent hover:text-white/55'}
      `}
    >
      {label}
    </button>
  )
}

function CategoryTab({ label, active, color, onClick }: { label: string; active: boolean; color: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-3 py-2 text-[0.6rem] tracking-[0.15em] uppercase font-medium
        border transition-all duration-200 whitespace-nowrap flex-shrink-0
        ${active
          ? 'border-[rgba(212,175,55,0.5)] text-hb-gold bg-[rgba(212,175,55,0.06)]'
          : 'border-white/[0.08] text-white/40 hover:text-white/65 hover:border-white/20'
        }
      `}
      style={active ? { borderBottomColor: color } : undefined}
    >
      {label}
    </button>
  )
}

export default function InteractiveMenu() {
  const [locationId, setLocationId] = useState<LocationId>('fort-lauderdale')

  const categories = useMemo(() => getCategoriesForLocation(locationId), [locationId])
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>(categories[0]?.id ?? 'kratom-teas')

  const currentCategory = categories.find(c => c.id === activeCategory) ?? categories[0]

  const switchLocation = (id: LocationId) => {
    setLocationId(id)
    const cats = getCategoriesForLocation(id)
    setActiveCategory(cats[0]?.id ?? 'kratom-teas')
  }

  return (
    <section className="relative section-padding overflow-hidden" aria-label="Menu browse">
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[50%] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.1) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-hb relative z-10">
        <div className="flex border-b border-white/[0.08] mb-6 overflow-x-auto">
          {LOCATIONS_LIST.map(loc => (
            <TabButton
              key={loc.id}
              label={TAB_LABELS[loc.id]}
              active={locationId === loc.id}
              onClick={() => switchLocation(loc.id)}
            />
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-thin">
          {categories.map(cat => (
            <CategoryTab
              key={cat.id}
              label={MENU_CATEGORY_META[cat.id].name}
              color={MENU_CATEGORY_META[cat.id].color}
              active={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
            />
          ))}
        </div>

        {currentCategory && (
          <>
            {currentCategory.description && (
              <p className="text-base text-white/72 leading-relaxed mb-6 max-w-2xl">
                {currentCategory.description}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {currentCategory.items.map(item => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  category={currentCategory}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

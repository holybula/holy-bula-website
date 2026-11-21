import type { MenuItem, MenuCategory } from '@/lib/menu-data'

interface MenuItemCardProps {
  item:     MenuItem
  category: MenuCategory
}

function formatPrice(n: number) {
  return `$${n.toFixed(2)}`
}

export default function MenuItemCard({ item, category }: MenuItemCardProps) {
  const allAddOns = [
    ...(category.addOns ?? []),
    ...(item.addOns ?? []),
  ]

  return (
    <article className="flex flex-col gap-4 border border-white/10 bg-hb-black-2 px-5 py-5 sm:px-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-normal leading-tight text-[#f5ecdc]">
          {item.name}
        </h3>
        {!item.sizes?.length && item.price != null && (
          <p className="text-sm font-medium tabular-nums text-hb-gold">{formatPrice(item.price)}</p>
        )}
      </div>

      {item.description && (
        <p className="text-sm leading-relaxed text-[#d8ccc0]">{item.description}</p>
      )}

      {item.sizes && item.sizes.length > 0 && (
        <ul className="flex flex-col gap-2 border-t border-white/10 pt-3">
          {item.sizes.map(size => (
            <li key={size.label} className="flex justify-between gap-3 text-sm">
              <span className="text-[#d8ccc0]">{size.label}</span>
              <span className="font-medium tabular-nums text-hb-gold">{formatPrice(size.price)}</span>
            </li>
          ))}
        </ul>
      )}

      {allAddOns.length > 0 && (
        <div className="border-t border-white/10 pt-3">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-hb-gold">Add-ons</p>
          <ul className="flex flex-col gap-2">
            {allAddOns.map(addOn => (
              <li key={addOn.id} className="flex justify-between gap-3 text-sm">
                <span className="text-[#d8ccc0]">{addOn.name}</span>
                <span className="font-medium tabular-nums text-hb-gold">+{formatPrice(addOn.price)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.note && (
        <p className="text-sm italic text-[#d8ccc0]">{item.note}</p>
      )}
    </article>
  )
}

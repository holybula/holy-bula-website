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
    <article className="flex flex-col border border-white/[0.08] bg-[#0d0d0d] p-5 md:p-6 transition-colors duration-200 hover:border-white/[0.14] hover:bg-[#111]">
      <h3 className="text-base md:text-lg font-extrabold text-white leading-tight mb-2">
        {item.name}
      </h3>

      {item.description && (
        <p className="text-sm text-white/72 leading-relaxed mb-3">{item.description}</p>
      )}

      {item.sizes?.length ? (
        <ul className="flex flex-col gap-1.5 mb-3">
          {item.sizes.map(size => (
            <li key={size.label} className="flex items-baseline justify-between gap-3 text-sm">
              <span className="text-white/65">{size.label}</span>
              <span className="text-hb-gold font-semibold">{formatPrice(size.price)}</span>
            </li>
          ))}
        </ul>
      ) : item.price != null ? (
        <p className="text-sm font-semibold text-hb-gold mb-3">{formatPrice(item.price)}</p>
      ) : null}

      {allAddOns.length > 0 && (
        <div className="mb-3">
          <p className="text-[0.6rem] tracking-[0.15em] uppercase text-white/45 mb-2">Add-ons</p>
          <ul className="flex flex-col gap-1">
            {allAddOns.map(addOn => (
              <li key={addOn.id} className="text-sm text-white/65">
                {addOn.name}
                <span className="text-white/45 ml-1">+{formatPrice(addOn.price)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.note && (
        <p className="text-sm text-white/55 italic">{item.note}</p>
      )}
    </article>
  )
}

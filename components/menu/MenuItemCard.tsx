import type { MenuAddOn, MenuItem } from '@/lib/menu-data'
import styles from '@/app/menu/menu.module.css'

interface MenuItemCardProps {
  item: MenuItem
}

function formatPrice(price: number) {
  return '$' + price.toFixed(2)
}

export function AddOns({ items }: { items: MenuAddOn[] }) {
  return (
    <div className={styles.addOns}>
      <p className={styles.detailLabel}>Add-ons</p>
      <dl className={styles.prices}>
        {items.map(addOn => (
          <div key={addOn.id}>
            <dt>{addOn.name}</dt>
            <dd>+{formatPrice(addOn.price)}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.cardHeading}>
          <h3>{item.name}</h3>
          {item.price != null && <p className={styles.price}>{formatPrice(item.price)}</p>}
        </div>

        {item.description && <p className={styles.detail}>{item.description}</p>}

        {item.sizes && (
          <dl className={styles.prices}>
            {item.sizes.map(size => (
              <div key={size.label}>
                <dt>{size.label}</dt>
                <dd>{formatPrice(size.price)}</dd>
              </div>
            ))}
          </dl>
        )}

        {item.options?.map(option => (
          <div key={option.label} className={styles.options}>
            <p className={styles.detailLabel}>{option.label}</p>
            <ul className={styles.optionList} aria-label={option.label}>
              {option.values.map(value => <li key={value}>{value}</li>)}
            </ul>
          </div>
        ))}

        {item.addOns && <AddOns items={item.addOns} />}
        {item.note && <p className={styles.note}>{item.note}</p>}
      </div>
    </article>
  )
}

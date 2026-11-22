import Image from 'next/image'
import type { MenuAddOn, MenuItem } from '@/lib/menu-data'
import type { MenuPhoto } from '@/lib/menu-photos'
import styles from '@/app/menu/menu.module.css'
import MenuPhotoGallery from './MenuPhotoGallery'

interface MenuItemCardProps {
  item: MenuItem
  photos?: readonly MenuPhoto[]
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

export default function MenuItemCard({ item, photos }: MenuItemCardProps) {
  const thumbnail = photos?.[0]
  const shown = thumbnail?.size ? [thumbnail.flavor, thumbnail.size].filter(Boolean).join(' · ') : null
  return (
    <article className={styles.card}>
      <div className={styles.cardBody}>
        <div className={thumbnail ? `${styles.cardHeading} ${styles.cardHeadingWithPhoto}` : styles.cardHeading}>
          {thumbnail && (
            <span className={styles.menuThumbnail}>
              <Image src={thumbnail.src} alt="" fill sizes="(max-width: 479px) 52px, 68px" />
            </span>
          )}
          {shown ? (
            <div className={styles.photoItemHeading}>
              <h3>{item.name}</h3>
              <span>Shown: {shown}</span>
            </div>
          ) : <h3>{item.name}</h3>}
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
        {photos && photos.length > 1 && <MenuPhotoGallery photos={photos} />}
      </div>
    </article>
  )
}

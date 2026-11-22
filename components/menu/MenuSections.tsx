import { MENU_CATEGORIES } from '@/lib/menu-data'
import MenuItemCard, { AddOns } from './MenuItemCard'
import styles from '@/app/menu/menu.module.css'

export default function MenuSections({ printable = false }: { printable?: boolean }) {
  return (
    <div className={styles.sections}>
      {MENU_CATEGORIES.map(category => {
        const titleId = category.id + '-title'

        return (
          <section
            key={category.id}
            id={category.id}
            tabIndex={printable ? undefined : -1}
            aria-labelledby={titleId}
            className={styles.categorySection}
          >
            <div className={styles.categoryHeading}>
              <div>
                <h2 id={titleId}>{category.name}</h2>
                {category.description && <p className={styles.detail}>{category.description}</p>}
              </div>
              {!printable && (
                <a href="#menu-categories" className={styles.backLink}>All categories</a>
              )}
            </div>
            <div className={styles.cards} data-card-count={category.items.length}>
              {category.items.map(item => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
            {category.addOns && <AddOns items={category.addOns} />}
          </section>
        )
      })}
    </div>
  )
}

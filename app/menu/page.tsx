import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MENU_CATEGORIES } from '@/lib/menu-data'
import { ORDER_PATH } from '@/lib/ordering'
import MenuSections from '@/components/menu/MenuSections'
import styles from './menu.module.css'

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore the Fort Lauderdale lounge menu for kava, kratom teas, shakes, coffee, sodas, empanadas, pizza, and sweets.',
  alternates: { canonical: '/menu' },
}

export default function MenuPage() {
  return (
    <main id="main-content" tabIndex={-1} className={styles.menuPage}>
      <section className={styles.hero} aria-labelledby="menu-title">
        <div className={styles.heroMedia} aria-hidden="true">
          <Image
            src="/images/lounge/tea-pour.jpg"
            alt=""
            fill
            priority
            unoptimized
            className={styles.heroImage}
          />
        </div>
        <div className={'container-hb ' + styles.heroContent}>
          <p className="eyebrow">Fort Lauderdale · In-store menu</p>
          <h1 id="menu-title" className={styles.title}>The menu.</h1>
          <p className={styles.intro}>Kava, kratom teas, coffee, and something to eat.</p>
          <div className={styles.heroActions}>
            <a href="#menu-categories" className="btn-gold">Browse Menu</a>
            <Link href={ORDER_PATH} className="btn-outline-gold">
              Order Online <span aria-hidden="true" className="link-arrow" />
            </Link>
          </div>
        </div>
      </section>

      <nav id="menu-categories" className={styles.categories} aria-label="Menu categories" tabIndex={-1}>
        <div className="container-hb">
          <ul className={styles.categoryLinks}>
            {MENU_CATEGORIES.map(category => (
              <li key={category.id}>
                <a href={'#' + category.id} className={styles.categoryLink}>{category.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container-hb">
        <div className={styles.utilities}>
          <Link href="/events#happy-hour">Happy hour specials <span aria-hidden="true" className="link-arrow" /></Link>
          <Link href="/menu/print">Printable menu <span aria-hidden="true" className="link-arrow" /></Link>
        </div>
        <MenuSections />
      </div>
    </main>
  )
}

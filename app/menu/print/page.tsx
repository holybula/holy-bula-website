import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import MenuSections from '@/components/menu/MenuSections'
import PrintMenuButton from '@/components/menu/PrintMenuButton'
import { FORT_LAUDERDALE } from '@/lib/locations'
import styles from '../menu.module.css'

export const metadata: Metadata = {
  title: 'Printable Menu',
  alternates: { canonical: '/menu' },
  robots: { index: false, follow: true },
}

export default function PrintMenuPage() {
  return (
    <main id="main-content" tabIndex={-1} className={'container-hb ' + styles.printPage}>
      <div className={styles.printActions}>
        <Link href="/menu" className="btn-outline-gold">Back to Menu</Link>
        <PrintMenuButton />
      </div>
      <header className={styles.printHeader}>
        <Image src="/ascension-mark.svg" width={33} height={43} alt="" />
        <div>
          <h1>Ascension Kava Bar &amp; Lounge</h1>
          <p>{FORT_LAUDERDALE.address.full}</p>
        </div>
      </header>
      <MenuSections printable />
    </main>
  )
}

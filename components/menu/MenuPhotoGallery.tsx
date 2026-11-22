'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { MenuPhoto } from '@/lib/menu-photos'
import styles from '@/app/menu/menu.module.css'

export default function MenuPhotoGallery({ photos }: { photos: readonly MenuPhoto[] }) {
  const sizes = Array.from(new Set(photos.map(photo => photo.size).filter((size): size is string => Boolean(size))))
  const showSizePicker = sizes.length > 1 && photos.every(photo => photo.flavor)
  const [open, setOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const visible = showSizePicker ? photos.filter(photo => photo.size === selectedSize) : photos

  return (
    <details className={styles.photoGallery} onToggle={event => setOpen(event.currentTarget.open)}>
      <summary className={styles.photoSummary}>View photos <span aria-hidden="true" /></summary>
      {open && (
        <div className={styles.photoGalleryBody}>
          {showSizePicker && (
            <div className={styles.photoSizes} role="group" aria-label="Photo size">
              {sizes.map(size => (
                <button key={size} type="button" aria-pressed={size === selectedSize} onClick={() => setSelectedSize(size)}>
                  {size}
                </button>
              ))}
            </div>
          )}
          <ul className={styles.photoGrid} aria-label="Available photos">
            {visible.map(photo => (
              <li key={photo.src}>
                <figure className={styles.photoTile}>
                  <div className={styles.photoTileMedia}>
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes="(max-width: 479px) 43vw, (max-width: 639px) 28vw, (max-width: 900px) 25vw, 175px"
                    />
                  </div>
                  <figcaption>
                    {photo.flavor || photo.size}
                    {photo.flavor && photo.size && <small>{photo.size}</small>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      )}
    </details>
  )
}

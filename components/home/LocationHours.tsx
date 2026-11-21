import Image from 'next/image'
import { FORT_LAUDERDALE } from '@/lib/locations'
import LocationCard from '@/components/shared/LocationCard'

interface LocationHoursProps {
  pageMode?: boolean
}

export default function LocationHours({ pageMode = false }: LocationHoursProps) {
  const Heading = pageMode ? 'h1' : 'h2'

  return (
    <section
      id={pageMode ? undefined : 'locations'}
      className={`relative border-t border-[#d6ac76]/15 bg-[#100e10] ${pageMode ? 'pt-16 md:pt-24' : ''}`}
      aria-labelledby="locations-heading"
    >
      <div className="container-hb section-padding">
        <div className="mb-8 md:mb-12">
          <p className="eyebrow">Plan your visit</p>
          <Heading
            id="locations-heading"
            className="max-w-[15ch] text-[clamp(2.5rem,6vw,5.7rem)] font-normal leading-[0.98] tracking-tight"
          >
            Visit <em className="font-normal text-[#e6bb85]">Ascension.</em>
          </Heading>
        </div>
        <div className="grid gap-0 md:grid-cols-[0.85fr_1fr]">
          <div className="relative min-h-64 overflow-hidden border border-[#d6ac76]/25 border-b-0 md:min-h-full md:border-b md:border-r-0">
            <Image
              src="/images/interior/holybula-art-4.PNG"
              alt="A pool table and framed artwork inside Ascension"
              fill
              sizes="(max-width: 767px) 90vw, 45vw"
              className="object-cover object-[50%_62%]"
              priority={pageMode}
            />
          </div>
          <LocationCard location={FORT_LAUDERDALE} heading={pageMode ? 'h2' : 'h3'} />
        </div>
      </div>
    </section>
  )
}

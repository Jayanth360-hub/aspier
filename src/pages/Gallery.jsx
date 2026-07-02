import { useEffect, useState } from 'react'
import PageHero from '../components/ui/PageHero'
import { galleryTabs } from '../data/content'
import { asset } from '../utils/images'

export default function Gallery() {
  const [activeTab, setActiveTab] = useState(galleryTabs[0].id)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const images = galleryTabs.find((t) => t.id === activeTab)?.images || []

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightboxIndex, images.length])

  return (
    <>
      <PageHero
        eyebrow="Campus & Community"
        title="Gallery"
        lead="A look at life at ASPIER — facilities, graduations, sports, conferences, festivals, and our fertility centre."
      />

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {galleryTabs.map((t) => (
              <button
                key={t.id}
                onClick={() => { setActiveTab(t.id); setLightboxIndex(null) }}
                className={`text-[0.72rem] font-bold tracking-widest uppercase px-4 py-2.5 border transition-colors ${
                  activeTab === t.id
                    ? 'bg-evergreen text-white '
                    : 'border-line-strong text-ink-soft hover: '
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <button
                key={img + i}
                onClick={() => setLightboxIndex(i)}
                className="group h-[200px] overflow-hidden border border-line-strong"
              >
                <img
                  src={asset(img)}
                  alt={`${galleryTabs.find((t) => t.id === activeTab)?.label} photo`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white"
            aria-label="Close"
          >
            ✕
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i - 1 + images.length) % images.length) }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-xl"
            aria-label="Previous"
          >
            ‹
          </button>
          <img
            src={asset(images[lightboxIndex])}
            alt="Gallery preview"
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((i) => (i + 1) % images.length) }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-xl"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}

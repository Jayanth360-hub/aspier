import { useEffect, useRef, useState } from 'react'

export default function Carousel({ children, autoPlay = true, interval = 6000, className = '' }) {
  const slides = Array.isArray(children) ? children : [children]
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer.current)
  }, [autoPlay, interval, slides.length])

  const goTo = (i) => {
    clearInterval(timer.current)
    setIndex(((i % slides.length) + slides.length) % slides.length)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous slide"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white border border-line-strong text-ink transition-colors"
          >
            ‹
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next slide"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white border border-line-strong text-ink transition-colors"
          >
            ›
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 transition-all ${i === index ? 'w-7 bg-evergreen-light' : 'w-1.5 bg-white/70 hover:bg-white'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

import { useRef } from 'react'

export default function ScrollRow({ children, className = '' }) {
  const ref = useRef(null)

  const scroll = (dir) => {
    const node = ref.current
    if (!node) return
    node.scrollBy({ left: dir * node.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        className={`flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${className}`}
      >
        {children}
      </div>
      <div className="hidden md:flex justify-end gap-2 mt-5">
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="w-10 h-10 border border-line-strong hover:border-evergreen hover:text-evergreen flex items-center justify-center transition-colors"
        >
          ‹
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="w-10 h-10 border border-line-strong hover:border-evergreen hover:text-evergreen flex items-center justify-center transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  )
}

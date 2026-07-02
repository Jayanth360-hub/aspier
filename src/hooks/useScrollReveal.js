import { useEffect, useRef, useState } from 'react'

export default function useScrollReveal(threshold = 0.12, delay = 0) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        },
        { threshold }
      )
      observer.observe(node)
      return () => observer.disconnect()
    }, delay)
    return () => clearTimeout(timer)
  }, [threshold, delay])

  return [ref, inView]
}

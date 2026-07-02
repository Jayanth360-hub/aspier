import { useRef, useCallback } from 'react'

export default function useTilt(intensity = 8) {
  const ref = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(600px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale(1.02)`
    el.style.boxShadow = `${-x * 12}px ${-y * 12}px 30px rgba(26,26,78,0.15)`
    el.style.transition = 'transform 0.1s ease, box-shadow 0.1s ease'
  }, [intensity])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)'
    el.style.boxShadow = ''
    el.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease'
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}

import { useEffect } from 'react'

export default function Modal({ open, onClose, children, maxWidth = 'max-w-2xl' }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(14,37,53,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className={`relative w-full ${maxWidth} max-h-[88vh] overflow-y-auto`}
        style={{ background: '#fff', border: '1px solid #DFF0F5', borderRadius: '16px', boxShadow: '0 24px 80px rgba(14,37,53,0.35)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center transition-all duration-200"
          style={{ background: '#EAF9FC', border: '1px solid #DFF0F5', borderRadius: '8px', color: '#1590A8' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#1EB8D0'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#EAF9FC'; e.currentTarget.style.color = '#1590A8' }}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

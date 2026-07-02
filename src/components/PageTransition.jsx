import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import logoSplash from '../assets/logo-splash.png'

export default function PageTransition({ children }) {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [key, setKey] = useState(location.pathname)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    if (location.pathname === key) return

    setLoading(true)
    setProgress(0)
    let p = 0
    const interval = setInterval(() => {
      p += Math.random() * 25
      if (p >= 85) { clearInterval(interval); p = 85 }
      setProgress(p)
    }, 80)

    const timer = setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
      setKey(location.pathname)
      setDisplayChildren(children)
      setTimeout(() => {
        setLoading(false)
        setProgress(0)
      }, 300)
    }, 500)

    return () => { clearTimeout(timer); clearInterval(interval) }
  }, [location.pathname])

  useEffect(() => {
    if (!loading) setDisplayChildren(children)
  }, [children, loading])

  return (
    <>
      {/* Progress bar */}
      {loading && (
        <div
          className="nav-progress"
          style={{ width: `${progress}%` }}
        />
      )}

      {/* Mini overlay spinner */}
      {loading && (
        <div className="fixed inset-0 z-[9000] pointer-events-none flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(13,13,46,0.85)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              border: '1px solid rgba(201,151,58,0.3)',
            }}
          >
            <img src={logoSplash} alt="" className="w-10 h-10 object-contain" style={{ animation: 'spinSlow 1.2s linear infinite' }} />
          </div>
        </div>
      )}

      {/* Page content with enter animation */}
      <div
        key={key}
        className={loading ? 'opacity-0' : 'page-enter'}
        style={{ minHeight: '100%' }}
      >
        {displayChildren}
      </div>
    </>
  )
}

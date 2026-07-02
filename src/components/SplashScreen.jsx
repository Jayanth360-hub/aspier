import { useEffect, useState } from 'react'
import logoSplash from '../assets/logo-splash.png'

export default function SplashScreen({ onDone }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true)
      setTimeout(onDone, 700)
    }, 2200)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div className={`splash-screen${exiting ? ' exit' : ''}`}>
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Gradient orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{ width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(30,184,208,0.2) 0%, transparent 70%)' }} />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-40 h-40 rounded-full border border-white/20 splash-ring" />
          <div className="absolute w-40 h-40 rounded-full border border-white/10 splash-ring" style={{ animationDelay: '0.5s' }} />

          <div
            className="relative w-28 h-28 rounded-full flex items-center justify-center splash-logo"
            style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '2px solid rgba(255,255,255,0.3)' }}
          >
            <img src={logoSplash} alt="ASPIER" className="w-22 h-22 object-contain" />
          </div>
        </div>

        <div className="text-center">
          <div className="text-white text-3xl font-bold tracking-wide">
            ASPIER
          </div>
          <div className="text-white/80 text-xs mt-1 tracking-widest font-semibold uppercase">
            Asia Pacific Institute of Embryology
          </div>
          <div className="text-white/40 text-[0.6rem] mt-1 tracking-widest">
            Knowledge is Power
          </div>
        </div>

        <div className="dot-loader flex items-center gap-2">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  )
}

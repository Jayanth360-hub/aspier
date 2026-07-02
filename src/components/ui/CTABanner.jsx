import { Link } from 'react-router-dom'

export default function CTABanner({ eyebrow, title, heading, lead, body, cta = 'Enroll Now', href = '/contact' }) {
  const h = heading || title
  const b = body || lead
  return (
    <section className="relative overflow-hidden py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #0E2535 0%, #1E4A62 100%)' }}>
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(30,184,208,0.6) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute top-0 inset-x-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #1EB8D0, transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #1EB8D0, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center">
        {eyebrow && <span className="text-[0.72rem] font-bold tracking-widest uppercase" style={{ color: '#45CCE2' }}>{eyebrow}</span>}
        <h2 className="mt-3 font-bold text-white text-[1.7rem] sm:text-[2.2rem] leading-tight">
          {h}
        </h2>
        {b && <p className="mt-4 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{b}</p>}
        <Link
          to={href}
          className="inline-block mt-8 px-8 py-4 font-bold text-[0.875rem] rounded-xl transition-all duration-300"
          style={{ background: 'linear-gradient(135deg, #1EB8D0, #45CCE2)', color: '#0E2535', boxShadow: '0 8px 24px rgba(30,184,208,0.4)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(30,184,208,0.55)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(30,184,208,0.4)' }}
        >
          {cta} →
        </Link>
      </div>
    </section>
  )
}
